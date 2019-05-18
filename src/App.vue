<template>
  <div id="app">
    <v-app id="inspire">
      <v-card
        class="hide-overflow"
        height="200px"
      >
        <v-card-text class="text-xs-center">
          <v-btn
            flat
            color="primary"
            @click="showNav = !showNav"
          >
            Toggle Nav
          </v-btn>
        </v-card-text>

        <v-bottom-nav
          :active.sync="activeBtn"
          :value="showNav"
          absolute
          color="transparent"
        >
          <v-btn flat color="teal">
            <span>Recents</span>
            <v-icon>history</v-icon>
          </v-btn>

          <v-btn flat color="teal">
            <span>Favorites</span>
            <v-icon>favorite</v-icon>
          </v-btn>

          <v-btn flat color="teal">
            <span>Nearby</span>
            <v-icon>place</v-icon>
          </v-btn>
        </v-bottom-nav>
      </v-card>
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
    left: null,
    activeBtn: 1,
    showNav: true
  }),

  props: {
    source: String
  }
}
</script>
