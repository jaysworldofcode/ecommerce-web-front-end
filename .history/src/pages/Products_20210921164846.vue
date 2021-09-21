<template>
    <div id="container">
        <p class="slight-bold-title">PRODUCTS FOR {{ UrlParams.get('filter').toUpperCase() }}</p>
    </div>
</template>
<script lang='ts'>
export default {
  name: 'Products',
  components: {
  },
  methods: {
  },
  created() {
  },
  data() {
    return {
        UrlParams: new URLSearchParams(window.location.search)
    }
  },
}
</script>
<style scoped>
#container {
  display: flex;
  flex-direction: row;
  height: 60vh;
  text-align: left;
}

.slight-bold-title {
    text-align: center;
}
</style>
