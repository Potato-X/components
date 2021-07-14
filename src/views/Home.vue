<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/img/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    {{ appName }}
    this is {{ username }}
    <h1>the firstLetter is {{ firstLetter }}</h1>
    <button @click="changeAppName">修改appname</button>
    <button @click="asyncChangeAppName">修改异步appname</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '_c/HelloWorld.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import { getUserInfo } from '@/api/user'
export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  computed:{
    // ...mapState([
    //   'appName'
    // ])
    ...mapState({
      appName: state => state.appName,
      username: state => state.user.userName
    }),
    ...mapGetters('user', {
      firstLetter: 'firstLetter'
    })
  },
  methods: {
    ...mapMutations({
      setappname: 'SET_APP_NAME'
    }),
    ...mapActions({
      updateAppName: 'updateAppName'
    }),
    changeAppName(){
      this.setappname(222222)
    },
    asyncChangeAppName(){
      this.updateAppName()
    },
    getInfo1 () {
      return new Promise((resolve, reject) => {
        getUserInfo({id:3}).then(res => {
          console.log('res:', res.data)
          resolve(res.data)
        })
      })

    },
    getInfo2 () {
      return new Promise((resolve, reject) => {
        getUserInfo({id:3}).then(res => {
          console.log('res:', res.data)
          resolve(res.data)
        })
      })

    },
    getInfo3 () {
      return new Promise((resolve, reject) => {
        getUserInfo({id:3}).then(res => {
          console.log('res:', res.data)
          resolve(res.data)
        })
      })

    }
  },
  created(){
    Promise.all([getUserInfo({id:3}),getUserInfo({id:3}),getUserInfo({id:3})]).then(res=>{
      console.log('all reses:', res)
    })
  },
  // beforeRouteEnter (to, from, next) { //组件导航守卫,触发时机为组件创建之前，故获取不到this
  //   // ...
  // },
  beforeRouteLeave (to, from, next) {
    const leave = confirm('你还有内容为保存，确定离开当前页面嘛？')
    if(leave) next();
    else next(false)
  }
}
</script>
