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
 title: '我若为王API',
 description: '一个公益性API接口',
  plugins: [
    [
      'vuepress-plugin-yuque',{
        html: false,
        yuqueLink: true,
        repoUrl: 'https://www.yuque.com/ilay/api',
        home: {
          actionText: 'Getting Started →',
          actionLink: '/weather.html',
          heroImage: 'https://cdn.nlark.com/yuque/0/2019/png/242808/1549571925285-2372b0a0-0234-421c-a139-00ea16f1a106.png',
          footer: `Copyright © iLay`,
        }
      }
    ]
  ]
}