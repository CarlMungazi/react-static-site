import axios from 'axios'
import fs from 'fs'
import { promisify } from 'util';
import { map, pickBy } from 'lodash'
import slug from 'slug'
import decamelize from 'decamelize'
import grayMatter from 'gray-matter'
import marked from 'marked'
import * as topicsContent from './src/content/topics/*.md'

const readdir = promisify(fs.readdir);

function processMarkdown (markdown, key) {
  const { content, data } = grayMatter(markdown)
  const html = marked(content)
  return {
    content: html,
    key: decamelize(key, '-'),
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

async function getConditions () {
  const conditionDetailsRaw = map(topicsContent, processMarkdown)
  const conditionDetails = await Promise.all(map(conditionDetailsRaw, mapTopicsFrontMatter))

  const topics = topicsDetails.map(topic => {
    const slug = { slug: toSlug(topic.title) }
    return pickBy({...topic, ...slug}, val => val)
  })
  
  return topics
}

async function getConditionList (topic) {
  console.log(topic)
  const conditionList = await readdir(`./src/content/${topic.parent}/${topic}/`);

  const sortedConditions = conditionList.map((condition, idx) => {
    return { parent: topic, name: condition, content: [] }
  })

  return sortedConditions;
}

async function getTopicsList(category) {
  const topicsList = await readdir(`./src/content/${category}`);
  
  const conditionList = topicsList.map(getConditionList);
  const sortedTopics = topicsList.map((topic, idx) => {
    return { parent: category, name: topic, conditions: conditionList[idx] }
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
            })
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
