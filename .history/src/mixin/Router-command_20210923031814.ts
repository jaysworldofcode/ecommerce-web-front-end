var RouteCommand = {
  methods: {
    Back: function () {
      this.$router.go(-1);
    }
  }
}
 
export default RouteCommand;