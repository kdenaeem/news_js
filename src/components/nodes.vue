<template>
    <div>
        <button v-on:click="output_data" class="dot"></button>
    </div>
</template>

<script>
export default {
    methods: {
    output_data: function() {
        alert("shut up izza");
        }
    }
}

</script>

<style scoped>
.dot {
  height: 25px;
  width: 25px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
}
</style>