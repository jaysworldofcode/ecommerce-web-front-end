<template>
    <div id="container">
        <p class="slight-bold-title">PRODUCTS FOR {{ UrlParams.get('filter').toUpperCase() }}</p>
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
  flex-direction: column;
  height: 60vh;
}

.slight-bold-title {
    text-align: center;
}

p {
    padding: 0;
    margin: 0;
}
</style>
