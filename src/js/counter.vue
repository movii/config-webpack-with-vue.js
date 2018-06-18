<template>
  <div>
    <div> {{ count }}</div>
    <button @click="count++">计数器 + 1</button>
  </div>
</template>

<script>
export default {
  data () { return { count: 0 } }
}
</script>

