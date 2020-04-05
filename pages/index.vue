<template>
    <div>
      <div class="section" id="titleGroup"> 
        <div id="title">
          <h1>
            {{title}}
          </h1>
          <h2>
            {{sub}}
          </h2> 
        </div>
      </div>
      <div class="section" id="aboutGroup">
        <SectionHead>About</SectionHead>
        <v-container class="aboutlayout">
          <div class="aboutItem" >
            <v-img
                    :src="`https://picsum.photos/500/300?image=${1 * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${1 * 5 + 10}`"
                    class="grey lighten-2"
                  />
          </div>
          <div class="aboutItem">
            <h3>{{aboutHead}}</h3>
            <div v-html="about"></div>
          </div>
        </v-container>
      </div>
      <div class="section" id="projects">
        <SectionHead>Projects</SectionHead>
          <v-container >
            <v-row>
              <v-col
                v-for="n in 9"
                :key="n"
                class="d-flex child-flex"
                cols="4"
              >
                <v-card flat tile class="d-flex">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                  >
                    <template v-slot:placeholder>
                      <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                      >
                        <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                      </v-row>
                    </template>
                  </v-img>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
      </div>      
      <div class="section" id="skills">
        <SectionHead>Skills</SectionHead>
        <v-container>
          <v-card>
            <v-card-title>Some of my skills</v-card-title>
            <v-divider />

          </v-card>
        </v-container>
      </div>
      <div class="section" id="contact">
        <SectionHead>Contact</SectionHead>
        <v-container class="contactWrapper" >
          <v-card id="contactCard">
            <v-card-title>Hope to speak with you soon!</v-card-title>
            <v-divider ></v-divider>
            <div class="contactInputsWrapper">
              <v-text-field class="contactIn" full-width outlined label="Name"/>
              <v-text-field class="contactIn" full-width outlined label="Email"/>
              <v-textarea class="contactIn" full-width outlined label="Message"/>
              <div class="contactBtnWrapper">
                <v-btn color="primary">Submit</v-btn>
              </div>
            </div>
          </v-card>
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
      skills: [],
      projects: [],
      aboutHead: "I am a passionate developer  interested in creating ideas and patterns that take on a life of there own.",
      title: "Adam Brown",
      sub: "Software Developer",
      about: "<p></p>",
      navigation: [
        {
          icon: 'mdi-apps',
          title: 'Home',
          click: () => this.$vuetify.goTo(0)
        }  ,      
        {
          icon: 'mdi-apps',
          title: 'About',
          click: () => this.$vuetify.goTo('#aboutGroup')
        },        
        {
          icon: 'mdi-apps',
          title: 'Projects',
          click: () => this.$vuetify.goTo('#projects')
        },        
        {
          icon: 'mdi-apps',
          title: 'Skills',
          click: () => this.$vuetify.goTo('#skills')
        }
        // {
        //   icon: 'mdi-apps',
        //   title: 'Welcome',
        //   to: '/'
        // },
        // {
        //   icon: 'mdi-chart-bubble',
        //   title: 'Inspire',
        //   to: '/inspire'
        // }
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
  #title{
    margin: 10px;
  }
  .section{
    min-height: 50vh;
  }
  #contact{
    
  }
  .contactWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 40vh
  }
  #contactCard{
    width: 100%;
    max-width: 600px;
  }
  .contactInputsWrapper{
    padding: 50px 20px;
  }
  .contactBtnWrapper{
    display: flex;
    justify-content: flex-end;
    width: 100%;
  }
  .contactIn{

  }
  .aboutlayout{
    display: flex;
    justify-content: space-around;
  }
  .aboutItem{
    margin: 20px;
  }
</style>