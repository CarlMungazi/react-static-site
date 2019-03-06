import fs from 'fs'
import { promisify } from 'util';
import grayMatter from 'gray-matter'
import marked from 'marked'

import categoryDescs from './src/utils/category-descriptions';
import topicDescs from './src/utils/topic-descriptions';

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

async function getConditionList (topic) {
  const extractMarkdown = async function (file) {
    const fileData = await readFile(`./src/content/${topic.parent}/${topic.name}/${file}`);
    const fileFrontMatter = grayMatter(fileData);
    
    const fileDataObject = { 
      name: `${file.slice(0, file.length - 3)}`, 
      title: fileFrontMatter.data.title, 
      markdown: marked(fileFrontMatter.content),
      backLink: `${topic.parent}/${topic.name}`
    }

    return fileDataObject;
  }

  const conditionList = await readdir(`./src/content/${topic.parent}/${topic.name}`);

  const resolvedConditionList = async function () {
    const newFilesPromises = conditionList.map(extractMarkdown);
    return await Promise.all(newFilesPromises);
  }

  return await resolvedConditionList();
}

async function getTopicsList(category) {
  const topicsList = await readdir(`./src/content/${category}`);
  const sortedTopicsList = topicsList.map((topic) => {
    return { parent: category, name: topic }
  })

  const resolvedConditionList = async function () {
    const list = sortedTopicsList.map(getConditionList);
    return await Promise.all(list)
  }
  
  const finalConditionList = await resolvedConditionList()

  const sortedTopics = topicsList.map((topic, idx) => {
    return { parent: category, name: topic, data: topicDescs[topic], conditions: finalConditionList[idx] }
  })

  return sortedTopics
}

async function sortCategories (categories) {
  const topicsListPromises = categories.map(getTopicsList);

  const resolvedTopicsList = await Promise.all(topicsListPromises)

  const sortedCategories = categories.map((category, idx) => {
    return { name: category, data: categoryDescs[category], topics: resolvedTopicsList[idx] }
  });
  
  return sortedCategories
}

async function getCategories () {
  let categories;

  try { 
    categories = await readdir('./src/content');
  } catch (err) {
    // do something
  }

  const finalCategories = await sortCategories(categories);
  
  return finalCategories;
}

export default {
  getSiteData: () => ({
    siteTitle: 'PA Reference',
    siteTitleTag: 'Reference Guide For Matrix Of Conditions',
    siteTag: 'Your quick guide to the matrix of conditions'
  }),
  getRoutes: async () => {
    const categories = await getCategories();   
    
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: async () => ({
          categories
        }),
        children: categories.map( category => ({
          path: `${category.name}`,
          component: 'src/containers/Category/Category',
          getData: async () => ({
            category
          }),
          children: category.topics.map( topic => ({
            path: `${topic.name}`,
            component: 'src/containers/Topic/Topic',
            getData: async () => ({
              topic
            }),
            children: topic.conditions.map( condition => ({
              path: `${condition.name}`,
              component: 'src/containers/Condition/Condition',
              getData: async () => ({
                condition
              })
            }))
          })),
        })),  
      },
    ]
  },
}
