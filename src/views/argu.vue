<template>
  <div>
    this is a argu page!
    {{ name }}
  </div>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: 'winner'
    }
  }
}
</script>
