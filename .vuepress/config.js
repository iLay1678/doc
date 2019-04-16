module.exports = {
  head: [
    ['link', { rel: 'icon', href: `https://wei.bz/favicon.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  themeConfig: {
    nav: [
      { text: '我若为王', link: 'https://wei.bz' },
    ]
  },
 title: '我若为王',
 description: '我若为王公开知识库',
  plugins: [
    [
      'vuepress-plugin-yuque',{
        html: true,
        yuqueLink: true,
        repoUrl: 'https://www.yuque.com/ilay/666',
        home: {
          actionText: 'Getting Started →',
          actionLink: '/weather.html',
          heroImage: 'https://wei.bz/favicon.png',
          footer: `Copyright © iLay`,
        }
      }
    ]
  ]
}
