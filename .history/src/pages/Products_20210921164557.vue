<template>
    <div id="container">
        <p class="page-title">PRODUCTS FOR {{ UrlParams.get('filter').toUpperCase() }}</p>
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

</style>
