<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      "Prueba GRPC Client"
    </p>
    <div class="grpc-example">
      <div class="form-group col-4">
        <input type="text" class="form-control" placeholder="first name" v-model="firstName">
        <input type="text" class="form-control mt-2" placeholder="last name" v-model="lastName">
        <input type="text" class="form-control mt-2" placeholder="address" v-model="address">
        <input type="text" class="form-control mt-2" placeholder="email" v-model="email">

        <b-button class="col-2 mt-4" @click="registerPerson()">submmit</b-button>

        <h2>{{result}}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import {grpcService} from "../service/grpcService"
import {PersonRequest} from "../protos/tutorial_pb.js"


export default {
  name: "ClientExample",
  props: {
    msg: String,
  },
  data() {
    return {
      firstName: '',
      lastName: '',
      address: '',
      email: '',
      result: ''
    }
  },
  created: function() {
    grpcService.createClient("https://localhost", "44361");
    
  },
  methods: {
    registerPerson: async function() {
      console.log("vamos a registrarnos!!!"); 

      let request = new PersonRequest();
      request.setFirstname("Jeremiah")
      request.setLastname("Jhonson")
      request.setAddress("Rocky Mountains")
      request.setEmail("jj.mountainman@grizzly.com")

      request.setFirstname(this.firstName || "Jeremiah")
      request.setLastname(this.lastName || "Jhonson")
      request.setAddress(this.address || "Rocky Mountains")
      request.setEmail(this.email || "jj.mountainman@grizzly.com")
    
      let response = await grpcService.signPerson(request).catch((err)=>{
        console.error('somethig was wrong: ' + err)
        this.result = err;
      })
      if(response) {
        console.log('response: ' + JSON.stringify(response))
        this.result = JSON.stringify(response);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
h2 {
  margin-top: 20px;
  color: aliceblue;
  background: silver;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.grpc-example {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
