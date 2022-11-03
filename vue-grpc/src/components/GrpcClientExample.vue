<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      "Prueba GRPC Client"
    </p>
  </div>
</template>

<script>
// import {GreeterClient} from "../protoclient/protos/greet_grpc_web_pb";
// import {HelloRequest} from "../protoclient/protos/greet_pb";
import {SignerClient} from "../protos/tutorial_grpc_web_pb"
import {PersonRequest} from "../protos/tutorial_pb.js"

export default {
  name: "ClientExample",
  props: {
    msg: String,
  },
  created: function() {
    this.client = new SignerClient("https://localhost:44361", null, null);
    this.registerPerson();
  },
  methods: {
    registerPerson: function() {
      console.log("vamos a registrarnos!!!"); 

      let request = new PersonRequest();
      request.setFirstname("Jeremiah")
      request.setLastname("Jhonson")
      request.setAddress("Rocky Mountains")
      request.setEmail("jj.mountainman@grizzly.com")
    
      

      this.client.signPerson(request, {}, (err, response) =>{
        console.log(err);
        console.log(response);
      })
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
</style>
