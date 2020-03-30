<template>
  <v-layout
    column
    justify-center
    align-center
  >
    <v-flex
      xs12
      sm8
      md6
    >
      <div id="titleGroup"> 
      </div>
      <div id="aboutGroup"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    </v-flex>
  </v-layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data: function(){
    return {
      navigation: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ]
    }
  },
  mounted(){
    this.$store.commit("createNavigation", this.navigation)
  },
  components: {
    Logo,
    VuetifyLogo
  },
  
}
</script>
<style lang="stylus" scoped>

</style>