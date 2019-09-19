
export default {
  getSiteData: () => ({
    siteTitle: 'PA Reference',
    siteTitleTag: 'Reference Guide For Matrix Of Conditions',
    siteTag: 'Your guide to the matrix of conditions'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/containers/Home'
      },
    ]
  },
}
