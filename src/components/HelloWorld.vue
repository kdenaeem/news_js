<template>
  <div id="svgMap"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/svgmap/dist/svgMap.min.css"></div>
</template>


<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
<script src="https://cdn.jsdelivr.net/npm/svgmap/dist/svgMap.min.js"></script>

<script>
import svgMap from "svgmap";
// import svgPanZoom from "svgpanzoom";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  mounted() {
    new svgMap({
      targetElementID: "svgMap",
      data: {
        data: {
          news: {
            name: "Latest Update",
            format : "{0}",

            
          },
          gdp: {
            name: "GDP per capita",
            format: "{0}%",
            thousandSeparator: ",",
            thresholdMax: 50000,
            thresholdMin: 1000
          },
          change: {
            name: "Change to year before",
            format: "{0} %"
          }
        },
        applyData: "gdp",
        values: {
          AF: { gdp: 587, change: 4.73 },
          AL: { gdp: 4583, change: 11.09 },
          DZ: { gdp: 4293, change: 10.01 },
          GB: { gdp: 3000, change: 10.01, news : ["", "asdads"]}
          // ...
        }
      }
    });
  }
};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#svgMap {
  width: 800px;
  height: 600px;
}

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
