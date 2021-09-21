class UserModel {
    constructor(data) {
      this.data = data
    }
  
    name() {
      return this.data.firstname + ' ' + this.data.lastname
    }
  
    // and so on, put other methods here
  }
  