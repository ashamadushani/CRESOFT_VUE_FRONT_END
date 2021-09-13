<template>
  <hello-world />
</template>

<script>
  import HelloWorld from '../components/HelloWorld'
  import ChartDoughnut from "@/components/ChartDoughnut";

  export default {
    name: 'Home',

    components: {
      HelloWorld,
      ChartDoughnut,
    },
  }
</script>
