<template>
    <div>
      <div id="titleGroup"> 
        <div id="TitleGroup">
          <h1>
            {{title}}
          </h1>
          <h2>
            {{sub}}
          </h2>
        </div>
      </div>
      <div id="aboutGroup">
        <SectionHead>About</SectionHead>
      </div>
      <div id="projects">
        <SectionHead>Projects</SectionHead>

      </div>      
      <div id="Skills">
        <SectionHead>Skills</SectionHead>

      </div>
      <div id="contact">
        <SectionHead>Contact</SectionHead>
        <v-container>
          <v-text-field outlined label="Name"/>
          <v-text-field outlined label="Email"/>
          <v-textarea outlined label="Message"/>
          <v-btn>Submit</v-btn>
        </v-container>
        <MediaGroup />
      </div>
    </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import SectionHead from '~/components/SectionHead'
import MediaGroup from '~/components/MediaGroup'
export default {
  name: "Portfolio",
  components: {
    MediaGroup,
    SectionHead
  },
  data: function(){
    return {
      title: "Adam Brown",
      sub: "Software Developer",
      about: "<p></p>",
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
  }
  
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