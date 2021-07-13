<template>
  <div>
    I am a child
    <button @click="topage">to child2</button>
  </div>
</template>
<script>
export default {
  methods: {
    topage(){
      this.$router.push({
        name:'child2'
      })
    }
  },
}
</script>
