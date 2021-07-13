<template>
  <div>
    I am a parent !
    <button @click="toArgu('argu')">跳转</button>
    <transition  name="parent">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  data() {
    return {

    }
  },
  methods: {
    toArgu(pathname){
      this.$router.push({
        name:pathname,
        params:{
          name: 'potato'
        }
      })
    }
  },
}
</script>
<style lang="scss">
.parent-enter{
  opacity: 0;
}
.parent-enter-active{
  transition: opacity 1s ease;
}
.parent-enter-to{
  opacity: 1;
}
.parent-leave{
  opacity: 1;
}
.parent-leave-active{
  transition: opacity 1s ease;
}
.parent-leave-to{
  opacity: 0;
}
</style>
