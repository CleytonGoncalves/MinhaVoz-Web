<template>
    <v-footer height="30px">
        <v-flex primary lighten-1 py-1 text-xs-center white--text xs12>{{ text }}</v-flex>
    </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      text: "GRUPO FATA — INSTITUTO DE COMPUTAÇÃO — UFMT"
    };
  }
};
</script>

<style scoped>
footer {
  min-height: 0rem;
}
</style>