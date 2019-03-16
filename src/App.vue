<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        fixed
        v-model="drawerRight"
        right
        clipped
        app
      >
        <v-list dense>
          <v-list-tile @click.stop="right = !right">
            <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Open Temporary Drawer</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>

      <v-toolbar
        color="blue-grey"
        dark
        fixed
        app
        clipped-right
      >
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>

        <v-toolbar-title>Toolbar</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-toolbar-side-icon></v-toolbar-side-icon>
      </v-toolbar>

      <v-navigation-drawer
        fixed
        temporary
        v-model="drawer"
        class="blue lighten-3"
        dark
        app
      >
        <v-list>
          <v-list-tile
            v-for="item in items"
            :key="item.title"
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

      <v-navigation-drawer
        temporary
        v-model="left"
        fixed
      />

      <v-content>
        <v-container fluid fill-height>
          <v-layout justify-center align-center>
            <v-flex shrink>
              <v-tooltip right>
                <v-btn
                  icon
                  large
                  :href="source"
                  target="_blank"
                  slot="activator"
                >
                  <v-icon large>code</v-icon>
                </v-btn>

                <span>Source</span>
              </v-tooltip>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-footer color="blue-grey" class="white--text" app>
        <span>Vuetify</span>

        <v-spacer></v-spacer>

        <span>&copy; 2017</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    drawerRight: false,
    items: [
      { title: 'Dashboard', icon: 'dashboard' },
      { title: 'Account', icon: 'account_box' },
      { title: 'Admin', icon: 'gavel' }
    ],
    right: null,
    left: null
  }),

  props: {
    source: String
  }
}
</script>
