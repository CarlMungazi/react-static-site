import axios from 'axios'
import { map, pickBy } from 'lodash'
import slug from 'slug'
import decamelize from 'decamelize'
import grayMatter from 'gray-matter'
import marked from 'marked'

import cardio from './src/content/topics/cardiovascular.md'
import resp from './src/content/topics/respiratory.md'
const content = [cardio, resp];

function processMarkdown (markdown, key) {
  const { content, data } = grayMatter(markdown)
  console.log(content)
  const html = marked(content)
  return {
    content: html,
    key: decamelize(key, '-'),
    ...data
  }
}

function mapTopicsFrontMatter({
  title,
  description
}) {
  return {
    title,
    description
  }
}

function toSlug (str) {
  return slug(str.toLowerCase());
}

async function getTopics () {
  const topicsDetailsRaw = map(content, processMarkdown)
  const topicsDetails = await Promise.all(map(topicsDetailsRaw, mapTopicsFrontMatter))

  const topics = topicsDetails.map(topic => {
    const slug = toSlug(topic.title)
    return pickBy({...slug}, val => val)
  })

  return topics
}


export default {
  getSiteData: () => ({
    title: 'PA Reference',
  }),
  getRoutes: async () => {
    const { data: posts } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    )
    const topics = await getTopics();
    return [
      {
        path: '/',
        component: 'src/containers/Home',
        getData: () => {
          return {
            topics
          }
        }
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
      {
        path: 'topics',
        children: topics.map(topic => ({
          path: topic.slug,
          component: 'src/containers/Topic',
          getData: () => ({
            ...topic
          })
        }))
      }
    ]
  },
}
