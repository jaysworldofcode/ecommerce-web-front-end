const RouteCommand = {
  methods: {
    Back() {
      this.$router.go(-1);
    },
    GoToHome(){
      this.$router.push('/home');
    },
    GoToProducts(FilterType){
      this.$router.push('/products?filter='+FilterType);
    }
  }
}
 
export default RouteCommand;