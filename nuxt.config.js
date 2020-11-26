// Nuxt.js 配置文件
module.exports = {
  router:{
    linkActiveClass: 'active',//当前路由激活的class名称
    //自定义路由表规则
    extendRoutes(routes, resolve) {
      //1.清除nuxtjs基于pages目录生成从路由表
      routes.splice(0)
      routes.push(...[{
        path: '/',
        component: resolve(__dirname, 'pages/layout/'),
        //2.创建子路由
        children: [{
          path: '',//默认子路由
          name: 'home',
          component: resolve(__dirname,'pages/home/')
         },
         {
          path: '/login',//登录
          name: 'login',
          component: resolve(__dirname,'pages/login/')
         },
         {
          path: '/register',//注册
          name: 'register',
          component: resolve(__dirname,'pages/login/')
         },
         {
          path: '/profile/:username',//用户页面
          name: 'profile',
          component: resolve(__dirname,'pages/profile/')
         },
         {
          path: '/settings',//设置页面
          name: 'settings',
          component: resolve(__dirname,'pages/settings/')
         },
         {
          path: '/editor',//创建/编辑文章
          name: 'editor',
          component: resolve(__dirname,'pages/editor/')
         },
         {
          path: '/article/:slug',//文章详情
          name: 'article',
          component: resolve(__dirname,'pages/article/')
         }
        ]
      }])
    }
  },
  server:{
	  host:'0.0.0.0',
	  port:3000
  },
  //注册插件
  plugins:[
    '~/plugins/request.js',
    '~/plugins/dayjs.js'
  ]
}