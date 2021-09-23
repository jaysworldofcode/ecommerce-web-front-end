<template>
  <el-button plain @click="open1"> Closes automatically </el-button>
  <el-button plain @click="open2"> Won't close automatically </el-button>
</template>

<script>
  import { h } from 'vue'

  export default {
    name: 'ShowAddToCartSuccess',
    created() {
        this.$root.$refs.ShowAddToCartSuccess = this;
    },
    methods: {
      open1() {
        this.$notify({
          title: 'Title',
          message: h('i', { style: 'color: teal' }, 'This is a reminder'),
        })
      },
      open2() {
        this.$notify({
          title: 'Prompt',
          message: 'This is a message that does not automatically close',
          duration: 0,
        })
      },
        foo: function() {
            alert('this is A.foo');
        }
    },
  }
</script>