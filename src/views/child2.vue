<template>
  <div>
    this is a child2 page!
    <button @click="back">goback</button>
  </div>
</template>
<script>
export default {
  methods: {
    back(){
      this.$router.back()
    }
  },
}
</script>
