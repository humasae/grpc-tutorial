<template>
  <div class="about">
    <h1>This is Grpc page</h1>

    <ClientExample msg="el ejemplo"></ClientExample>
  </div>
</template>

<script>
// @ is an alias to /src
import ClientExample from "@/components/GrpcClientExample.vue";

export default {
  name: "Grpc",
  components: {
    ClientExample,
  },
};
</script>
