<template>
  <section>
    <v-navigation-drawer :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher temporary app>

      <v-list>
        <!-- Displays all routes that contains title and icon -->
        <v-list-tile v-for="(item, i) in items" :key="i" v-if="item.title && item.icon" :to="item.path" active-class="primary white--text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar app dense :clipped-left="clipped">

      <v-toolbar-side-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>{{ title }}</v-toolbar-title>

      <v-spacer />

    </v-toolbar>
  </section>

</template>

<script>
import { routes } from "../routes";

export default {
  name: "NavigationDrawer",
  data() {
    return {
      title: "Minha Voz",
      clipped: true,
      drawer: false,
      miniVariant: false,
      items: routes
    };
  }
};
</script>