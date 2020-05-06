<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item class="sideHead">
          <v-list-item-content>
            <v-list-item-title class="title">
              {{title}}
            </v-list-item-title>
            <v-list-item-subtitle>
              {{sub}}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
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
            @click="() => navEvent(item.click)"
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
      class="hidden-lg-and-up appbar"
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title><h4>{{title}}</h4> <h6>{{sub}}</h6> </v-toolbar-title>
    </v-app-bar>
    <v-content id="mainContent">
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
      title: 'image',
      sub: 'username'
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
    },
    navEvent(ev){
      ev()
      if(this.isMobile){
        this.drawer = false
      }
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
        case 'md': return true
        case 'lg': return false
        case 'xl': return false
      }
    },
  }
}
</script>
<style scoped>

</style>
