const axios = require("axios");

//class types
class Database{
  constructor() null {
    this.values = {}; //set values to json for quicker access without having to make constant calls.
  }

  //make api calls
  set(key, value) {
    //check for value to conserve api use
    if (key in this.values) {
      return this.values[key];
    }
    //make request
    axios
    .post(
      "https://future_domain.net/set_value/",
      JSON.stringify({
        token: this.token,
        key: key,
        value: value
      })
    ).then(res => {
      return res // return resp
    }).catch(error => {
      console.error(error); //throw error
    }));
  }
    
  get(key) {
    //make request
    axios
    .post(
      "https://future_domain/get_value/",
      JSON.stringify({
        token: this.token,
        key: key
      })
    ).then(res => {
      return res
    }).catch(error => {
      console.error(error)
    }));
  }
    
  del(key) {
    //make request
    axios
    .post(
      "https://future_domain/delete_value/",
      JSON.stringify({
        token: this.token,
        key: key
      })
    ).then(res => {
      return res
    }).catch(error => {
      console.error(error)
    }));
  }
}

class Client {
  constructor(token) null {
    this.token=token;
    this.db = new Database();
  }
}
