import axios from 'axios'
import fs from 'fs'
import { promisify } from 'util';
import { map, pickBy } from 'lodash'
import slug from 'slug'
import decamelize from 'decamelize'
import grayMatter from 'gray-matter'
import marked from 'marked'

import * as exampleCondition from './src/content/cardiovascular/hypertension/accelerated.md'

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

function processMarkdown (markdown, key) {
  const { content, data } = grayMatter(markdown)
  const html = marked(content)
  return {
    content: html,
    // key: decamelize(key, '-'),
    ...data
  }
}

function mapTopicsFrontMatter({
  title,
  description,
  content
}) {
  return {
    title,
    description,
    content
  }
}

function toSlug (str) {
  return slug(str.toLowerCase());
}

async function createConditionContent (conditionsContent) {
  // const conditionDetailsRaw = map(conditionsContent, processMarkdown)
  // const conditionDetails = await Promise.all(map(conditionDetailsRaw, mapTopicsFrontMatter))

  // const conditions = conditionDetails.map(topic => {
  //   const slug = { slug: toSlug(topic.title) }
  //   return pickBy({...topic, ...slug}, val => val)
  // })
  
  // return conditions
}

async function getConditionList (topic) {
  const extractMarkdown = async function (file) {
    const fileData = await readFile(`./src/content/${topic.parent}/${topic.name}/${file}`)
    const fileFrontMatter = grayMatter(fileData)
    const fileDataObject = { link: `${file.slice(0, file.length - 3)}`, name: fileFrontMatter.data.title, markdown: grayMatter(fileData) }
    return fileDataObject;
  }

  const conditionList = await readdir(`./src/content/${topic.parent}/${topic.name}`);

  const resolvedConditionList = async function () {
    const newFilesPromises = conditionList.map(extractMarkdown);
    return await Promise.all(newFilesPromises);
  }

  return await resolvedConditionList()
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
    return { parent: category, name: topic, conditions: finalConditionList[idx] }
  })

  return sortedTopics
}

async function sortCategories (categories) {
  const topicsListPromises = categories.map(getTopicsList);

  const resolvedTopicsList = await Promise.all(topicsListPromises)

  const sortedCategories = categories.map((category, idx) => {
    return { name: category, topics: resolvedTopicsList[idx] }
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
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
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
              path: `${condition.link}`,
              component: 'src/containers/Condition/Condition',
              getData: async () => ({
                condition
              })
            }))
          })),
        })),  
      },
      {
        path: '/blog',
        getData: () => ({
          posts,
        }),
        children: posts.map(post => ({
          path: `/post/${post.id}`,
          component: 'src/containers/Post',
          getData: () => ({
            post,
          }),
        })),
      }
    ]
  },
}
