<template>
  <section>
    <v-navigation-drawer :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher temporary app>

      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" ripple active-class="primary white--text" :to="item.href">

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

      <v-toolbar-title>{{ title }} </v-toolbar-title>

      <v-spacer />

    </v-toolbar>
  </section>

</template>

<script>
export default {
  name: "NavigationDrawer",
  data() {
    return {
      title: "Minha Voz",
      clipped: true,
      drawer: false,
      fixed: false,
      miniVariant: false,
      items: [
        {
          title: "Pacientes",
          icon: "sentiment_satisfied_alt",
          href: "/pacientes"
        },
        {
          title: "Sujeitos",
          icon: "accessibility_new",
          href: "/sujeitos"
        },
        {
          title: "Verbos",
          icon: "pool",
          href: "/verbos"
        },
        {
          title: "Complementos",
          icon: "local_florist",
          href: "/complementos"
        },
        {
          title: "Diversos",
          icon: "format_quote",
          href: "/diversos"
        }
      ]
    };
  }
};
</script>