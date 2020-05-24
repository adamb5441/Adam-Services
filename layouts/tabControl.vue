<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow
      >
        <v-tab >
          History
        </v-tab>
        <v-tab >
          Projects
        </v-tab>
      </v-tabs>
      <v-tabs-items  v-model="tab">
        <v-tab-item >
          <v-list >
            <span
            v-for="(item, i) in history"
            :key="i"
            >
                <v-list-item>
                    <v-list-item-action>
                        <v-icon>{{ item.type }}</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.title" />
                    </v-list-item-content>
                </v-list-item>
            </span>
          </v-list>
        </v-tab-item>
        <v-tab-item >
          <p>Please login</p>
        </v-tab-item>
      </v-tabs-items>
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
      tab: null,
      toolbar: false,
      drawer: true,
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
    history(){
      return this.$store.getters.getHistory
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
