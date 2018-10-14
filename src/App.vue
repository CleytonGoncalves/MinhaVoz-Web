<template>
  <v-app>

    <ToolbarDrawer />

    <v-content>
      <router-view />
    </v-content>

    <Footer />

  </v-app>
</template>

<script>
import ToolbarDrawer from "./components/ToolbarDrawer";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    ToolbarDrawer,
    Footer
  }
};
</script>
