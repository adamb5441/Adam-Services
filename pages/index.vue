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
            <h3>Somthing</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
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
      <div class="section" id="Skills">
        <SectionHead>Skills</SectionHead>

      </div>
      <div class="section" id="contact">
        <SectionHead>Contact</SectionHead>
        <v-container class="sectionContent" >
          <v-text-field class="contactIn" full-width outlined label="Name"/>
          <v-text-field class="contactIn" full-width outlined label="Email"/>
          <v-textarea class="contactIn" full-width outlined label="Message"/>
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
      aboutHead: "",
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
  #title{
    margin: 10px;
  }
  .section{
    min-height: 50vh;
  }
  #contact{
    
  }
  .sectionContent{
    padding: 50px 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .contactIn{
    width: 50%;
  }
  .aboutlayout{
    display: flex;
    justify-content: space-around;
  }
  .aboutItem{
    margin: 20px;
  }
</style>