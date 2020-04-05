<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <span
        v-for="(item, i) in navs"
        :key="i"
        >
            <v-list-item
            v-if="item.to && item.to.length > 0"
            :to="item.to"
            router
            exact
            >
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                </v-list-item-content>
            </v-list-item>
            <v-list-item
            v-else
            @click="item.click"
            router
            exact
            >
                <v-list-item-action>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title v-text="item.title" />
                </v-list-item-content>
            </v-list-item>
        </span>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      v-if="toolbar && isMobile"
      class="hidden-md-and-up"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-content>
        <nuxt />
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      toolbar: false,
      drawer: true,
      items: [],
      right: true,
      rightDrawer: false,
      title: 'Adam Brown'
    }
  },
  created(){
    if(this.isMobile){
      this.drawer = false
    }
  },
  mounted(){
    if(this.isMobile){
      this.toolbar = true
    }
  },
  methods: {
    setNavBtns(navs){
      this.items = navs
    }
  }, 
  computed: {
    navs(){
      return this.$store.getters.getNav
    },
    isMobile () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return true
        case 'sm': return true
        case 'md': return false
        case 'lg': return false
        case 'xl': return false
      }
    },
  }
}
</script>
