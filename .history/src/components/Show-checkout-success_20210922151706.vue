<template>
  <el-button plain @click="open1"> Closes automatically </el-button>
  <el-button plain @click="open2"> Won't close automatically </el-button>
</template>

<script>
  import { h } from 'vue'

  export default {
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
    },
    mounted() {
        this.$root.$on('component1', () => {
            console.log("Tester");
            this.c1method();
        });
    },
  }
</script>