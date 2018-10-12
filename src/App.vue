<template>
  <v-app>

    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >

      <v-list>
        <v-list-tile
          value="true"
          v-for="(item, i) in items"
          :key="i"
          @click="selectedItem = item.icon"
        >

          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

    </v-navigation-drawer>

    <v-toolbar
      app
      :clipped-left="clipped"
    >

      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

      <v-toolbar-title>{{ title }} </v-toolbar-title>

      <v-spacer></v-spacer>

    </v-toolbar>

    <v-content>
      <pacientes/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2018 - FATA - IC - UFMT</span>
    </v-footer>

  </v-app>
</template>

<script>
import Pacientes from "./components/Pacientes";

export default {
  name: "App",
  components: {
    Pacientes
  },
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          title: "Pacientes",
          icon: "sentiment_satisfied_alt",
          isSelected: true,
        },
        {
          title: "Sujeitos",
          icon: "accessibility_new"
        },
        {
          title: "Verbos",
          icon: "pool"
        },
        {
          title: "Complementos",
          icon: "local_florist"
        },
        {
          title: "Diversos",
          icon: "format_quote"
        }
      ],
      miniVariant: false,
      title: "Minha Voz"
    };
  }
};
</script>
