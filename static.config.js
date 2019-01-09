import axios from 'axios'
import fs from 'fs'
import { map, pickBy } from 'lodash'
import slug from 'slug'
import decamelize from 'decamelize'
import grayMatter from 'gray-matter'
import marked from 'marked'
import * as topicsContent from './src/content/topics/*.md'

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

// TO DO: get folder names from and create array of category names
function getCategories () {
  // TO DO: investigate if it is better to use async readdir
  const categories = fs.readdirSync('./src/content/', (err, files) => {
    return files
  })
  
  return categories
}

async function getTopics () {
  const topicsDetailsRaw = map(topicsContent, processMarkdown)
  const topicsDetails = await Promise.all(map(topicsDetailsRaw, mapTopicsFrontMatter))

  const topics = topicsDetails.map(topic => {
    const slug = { slug: toSlug(topic.title) }
    return pickBy({...topic, ...slug}, val => val)
  })
  
  return topics
}


export default {
  getSiteData: () => ({
    siteTitle: 'PA Reference',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )

    const topics = await getTopics();
    const categories = await getCategories();
    
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => ({
          categories
        }),
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
      },
      // {
      //   path: 'topics',
      //   children: topics.map(topic => ({
      //     path: topic.slug,
      //     component: 'src/containers/Topic',
      //     getData: () => ({
      //       ...topic
      //     })
      //   }))
      // }
    ]
  },
}
