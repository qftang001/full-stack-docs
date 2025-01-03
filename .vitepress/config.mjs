import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "云视角全栈编程-文档站",
  description: "一个有用的技术文档记录",
  head: [["link", {rel: "icon", href: "bg-logo.svg"}]],
  themeConfig: {
    outlineTitle: "文章目录",
    outline: [2, 6],
    sidebar: false,
    aside: "left",
    nav: [
      { text: '首页', link: '/' },
      { text: '前端', items: [
        {text: 'uniapp', link: '/前端/api-examples'}
        ]},
      { text: '后端', link: '/api-examples' },
      { text: '解决方案', link: '/markdown-examples' },
      { text: '关于我们', link: '/api-examples' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: {
        svg: '<svg t="1735870770555" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3013" width="200" height="200"><path d="M512 1021.72444445A509.72444445 509.72444445 0 1 1 512 2.27555555a509.72444445 509.72444445 0 0 1 0 1019.4488889z m257.99338667-566.37667556H480.54272a25.19495111 25.19495111 0 0 0-25.19495111 25.19495111v62.91456c0 13.90819555 11.28675555 25.19495111 25.12213333 25.19495111h176.21902223c13.98101333 0 25.19495111 11.28675555 25.1949511 25.12213334v12.59747555c0 41.72458667-33.78744889 75.51203555-75.51203555 75.51203555H367.23825778a25.19495111 25.19495111 0 0 1-25.12213333-25.12213333V417.62816c0-41.72458667 33.78744889-75.51203555 75.43921777-75.51203555h352.43804445c13.83537778 0 25.12213333-11.28675555 25.12213333-25.19495112v-62.91456a25.19495111 25.19495111 0 0 0-25.12213333-25.19495111h-352.43804445a188.74368 188.74368 0 0 0-188.74368 188.81649778v352.36522667c0 13.90819555 11.28675555 25.19495111 25.19495111 25.19495111h371.22503112a169.88387555 169.88387555 0 0 0 169.95669333-169.88387556V480.54272a25.19495111 25.19495111 0 0 0-25.19495111-25.19495111z" fill="#C71D23" p-id="3014"></path></svg>'
        },
        link: 'https://github.com/vuejs/vitepress' 
      },
    ],
    footer: {
      copyright: "Copyright@ 2025 南京云视角科技有限公司"
    },
    logo: "bg-logo.svg",  // 配置logo位置，public目录
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档"
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换"
            }
          }
        }
      }
    }
  },
  base: "full-stack-docs"
})
