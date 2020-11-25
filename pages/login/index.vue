<template>
  <div class="login">
    <div class="auth-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center"> {{ isLogin ? 'Sign up' : 'Sign up'}}</h1>
        <p class="text-xs-center">
          <!-- <a href="">Have an account?</a> -->
           <nuxt-link v-if="isLogin" to="/register">Need an account?</nuxt-link>
           <nuxt-link v-else to="/login">Have an account?</nuxt-link>
        </p>

        <ul class="error-messages">
          <!-- <template v-for="(messages,field) in errors"> -->
          <li v-for="(messages, field) in errors" :key="field">
            {{field}} {{messages}}
          </li>
          <!-- </template> -->
          
        </ul>

        <form @submit.prevent="onSubmit">
          <fieldset v-if="!isLogin" class="form-group">
            <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.email" class="form-control form-control-lg" type="email" placeholder="Email" required>
          </fieldset>
          <fieldset class="form-group">
            <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password" required minlength="8"> 
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right">
            {{ isLogin ? 'Sign up' : 'Sign up'}}
          </button>
        </form>
      </div>

    </div>
  </div>
</div>
  </div>
</template>

<script>
import {login , register} from '@/api/user'
//仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie'): undefined
export default {
  name: 'LoginIndex',
  middleware:['no-auth'],
  components: {},
  data () {
    return {
      user:{
        username:'',
        email:'',
        password:''
      },
      errors:{
      }
    }
  },
  props: {},
  computed: {
    isLogin (){//根据路由地址判断是否为登录
      return this.$route.name === 'login'
    }
  },
  methods: {
    async onSubmit(){
      //提交表单请求登录
      try {
        const { data } = this.isLogin ? await login({
          user:this.user
        }):await register({
          user:this.user
        })
        //TODO:保存用户登录 信息
        this.$store.commit('setUser', data.user)
        //为了防止刷新页面数据丢失，数据持久化
        Cookie.set('user',data.user)
        //跳转到首页
        this.$router.push('/')
      } catch (err) {
        console.dir(err);
        this.errors = err.response.data.errors
      }
     
    }
  },
  watch: {},
  created () {},
  mounted () {},
  destroyed () {}
}

</script>
<style lang='scss' scoped>
</style>
