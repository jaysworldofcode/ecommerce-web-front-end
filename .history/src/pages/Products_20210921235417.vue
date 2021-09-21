<template>
    <div id="container">
        <p class="slight-bold-title">PRODUCTS FOR {{ UrlParams.get('filter').toUpperCase() }}</p>
        <p class="page-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo lectus vel felis rhoncus commodo ac molestie tortor. Mauris vitae dapibus enim. Cras sed fringilla sapien. Vestibulum at elementum ex, at dictum lacus.</p>
        <div id="search-bar">
            <el-form-item placeholder="Search" class="search-field">
                <el-input></el-input>
            </el-form-item>
        </div>
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
    padding-top: 20px;
}

p {
    padding: 0;
    margin: 0;
}

#search-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.search-field {
    width: 200px;
}
</style>
