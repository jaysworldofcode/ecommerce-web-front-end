<template>
    <h5>Display</h5>
</template>
<script lang='ts'>
import { ProductModel } from '../model/product';
import { defineComponent } from "vue";

export default defineComponent({
  name: 'ItemDisplay',
    props: {
      user: {
        type: Object as unknown as ProductModel,
        required: true,
      },
    },
  data() {
    return {
    }
  },
  created() {

  },
  methods: {

  },
});
</script>
<style scoped>
</style>
