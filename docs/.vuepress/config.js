
module.exports = {
  title: 'Hello VuePress',
  description: 'Just playing around',
  base: '/doc/',
  dest: 'doc',
  themeConfig: {
    search: false,
    navbar: false,
    sidebar: [
      {
        title: '鉴权',
        collapsable: true,
        children: [
          {
            title: '鉴权',
            path: '/鉴权/鉴权',
            collapsable: false,
          }
        ]
      }, {
        title: '例子',
        path: '/例子',
				collapsable: false
      }
    ]
  },
  extraWatchFiles: [
    '.vuepress/post-message.js', // 使用相对路径
  ],
  plugins: [
    require('./post-message.js')
  ]
}