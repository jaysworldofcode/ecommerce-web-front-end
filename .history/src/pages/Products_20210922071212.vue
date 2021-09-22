<template>
    <div id="container">
        <p class="slight-bold-title">PRODUCTS FOR {{ UrlParams.get('filter').toUpperCase() }}</p>
        <div id="search-bar">
            <i class="fa fa-search" style="padding-right:20px;"></i>
            <input type="input" class="form__field search-field" placeholder="Search" name="name" id='name' />
        </div>
        <div v-if="ProductsList.length != 0" id="products-list-container">
            <ProductItemPlainView v-for="item in GetProducts" :key="item.Id" :product="item"></ProductItemPlainView>
        </div>
        <div v-else id="spinner-container">
            <Spinner height="60px" width="60px"></Spinner>
        </div>
    </div>
</template>
<script lang='ts'>
import ProductItemPlainView from '../components/Product-item-plain-view.vue';
import ProductService from "../service/Product-service";
import { ProductModel } from '../model/product';
import Spinner from "../components/Spinner.vue";

export default {
  name: 'Products',
  components: {
      ProductItemPlainView,
      Spinner
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
  flex-direction: row;
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
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 1em;
  margin-left: 20px;
}

#spinner-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
}

</style>
