<template>
  <v-app>

    <ToolbarDrawer />

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 - FATA - IC - UFMT</span>
    </v-footer>

  </v-app>
</template>

<script>
import ToolbarDrawer from "./components/ToolbarDrawer";

export default {
  name: "App",
  components: {
    ToolbarDrawer
  }
};
</script>
