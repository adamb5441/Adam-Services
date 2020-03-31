<template>
    <div>
      <div id="titleGroup"> 
        
      </div>
      <div id="aboutGroup"></div>
      <div id="projects"></div>
      <div id="contact"></div>
    </div>
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

<style scoped>
  #titleGroup {
    display: block; 
    height: 100vh; 
    width: 100%; 
    /* background-image: url('../static/hiking.jpg'); */
    background-repeat: no-repeat;
    background-size: 100%;
  }
</style>