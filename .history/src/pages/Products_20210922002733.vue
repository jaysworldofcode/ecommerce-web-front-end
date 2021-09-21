<template>
    <div id="container">
        <p class="slight-bold-title">PRODUCTS FOR {{ UrlParams.get('filter').toUpperCase() }}</p>
        <p class="page-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo lectus vel felis rhoncus commodo ac molestie tortor. Mauris vitae dapibus enim. Cras sed fringilla sapien. Vestibulum at elementum ex, at dictum lacus.</p>
        <div id="search-bar">
            <el-input placeholder="Search" class="search-field"></el-input> 
        </div>
        <div id="products-list-container">
            <ProductItemPlainView v-for="item in ProductsList" :key="item.Id" :product="item"></ProductItemPlainView>
        </div>
    </div>
</template>
<script lang='ts'>
import ProductItemPlainView from '../components/Product-item-plain-view.vue';
import ProductService from "../service/Product-service";
import { ProductModel } from '../model/product';

export default {
  name: 'Products',
  components: {
      ProductItemPlainView
  },
  methods: {
  },
  async created(){
    this.ProductsList = await new ProductService().FetchProductByType("male") as ProductModel[];
  },
  computed: {
    GetProducts: function () {
      return this.ProductsList
    }
  },
  data() {
    return {
        UrlParams: new URLSearchParams(window.location.search),
        ProductsList: []
    }
  },
}
</script>
<style scoped>
#container {
  display: flex;
  flex-direction: column;
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
  align-items: end;
  justify-content: end;
  margin-top: 20px;
  padding-right: 40px;
}

.search-field {
    width: 200px;
}

#products-list-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  grid-gap: 1em;
}
</style>
