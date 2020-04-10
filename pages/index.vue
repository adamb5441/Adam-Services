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

            <v-card class="aboutCard">
          <v-row class="aboutRow" justify="center" align-content="center">
          <v-col cols="12" md="6" class="" >
            <v-img :aspect-ratio="15/10" style="border-radius: 1%"  src="/img/EDIT-6704.JPG" />
          </v-col>
          <v-col cols="12" md="6" class="">
            <h3>{{aboutHead}}</h3>
            <p></p>
          </v-col>
          </v-row>

        </v-card>
        </v-container>
      </div>
      <div class="section" id="projects">
        <SectionHead>Projects</SectionHead>
          <v-container >
            <v-row>
              <v-col
                v-for="(project, i) in projects"
                :key="i"
                class="d-flex child-flex"
                cols="12"
                md="4"
              >
                <ProjectCard 
                :title="project.title"
                :mainImg="project.mainImg"
                :imgs="project.imgs"
                :descriptionShort="project.descriptionShort"
                :descriptionLong="project.descriptionLong"
                :repoLink="project.repoLink"
                :siteLink="project.siteLink"
                ></ProjectCard>
              </v-col>
            </v-row>
          </v-container>
      </div>      
      <div class="section" id="skills">
        <SectionHead>Skills</SectionHead>
        <v-container class="skillWrapper">
          <v-card class="skillCard">
            <v-card-title>Some of my skills</v-card-title>
            <v-divider />
            <v-row class="skillGridRow" align-content="center" justify="center">
              <v-col v-for="(skill,i) in skills" :key="i" cols=4 md=2 class="skill">
                <img class="skillImg" :src="skill.img">
                <h3>{{skill.label}}</h3>
              </v-col>
            </v-row>
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
import ProjectCard from '~/components/Project'
export default {
  name: "Portfolio",
  components: {
    MediaGroup,
    SectionHead,
    ProjectCard
  },
  data: function(){
    return {
      skills: [
        {
          img: "/img/vue-logo.png",
          label: "Vue"
        },    
        {
          img: "/img/react.png",
          label: "React"
        },
        {
          img: "/img/jquery.png",
          label: "JQuery"
        },    
        {
          img: "/img/smlNode.png",
          label: "Node"
        },
        {
          img: "/img/express.png",
          label: "Express"
        },
        {
          img: "/img/mvc.net_-300x160.png",
          label: ".NET MVC"
        },
        {
          img: "/img/ENTITY.png",
          label: "Entity"
        },
        {
          img: "/img/MSSQL.png",
          label: "SQL"
        },
        {
          img: "/img/LINQ.png",
          label: "Linq"
        },
        {
          img: "/img/postman.png",
          label: "Postman"
        },
      ],
      projects: [
        {
          title: "This portfolio",
          mainImg: "/img/NUXT.png"
        },
        {
          title: "Keyboard Warrior",
          mainImg: "/img/portimg3.png",
          descriptionShort: "A React and node ecommerce app using bcrypt login.",
          descriptionLong: "The Keyboard Warrior uses a offline and online cart system meaning the items you place in you cart while offline will be adding to you existing cart to create a seamless experience.",
          imgs: [
            "/img/ext (2).jpg",
            "/img/ext (3).jpg",
          ]
        },
        {
          title: "BugTracker",
          mainImg: "/img/Bugtracker/Screenshot_2019-02-12 BugTracker-1.png"
        },
        {
          title: "Finite",
          mainImg: "/img/Screenshot_2019-03-18 Finite.png"
        },
        {
          title: "Trip Planner",
          mainImg: "/img/portimg1.png"
        }
      ],
      aboutHead: "I am a passionate developer  interested in creating ideas and patterns that take on a life of there own.",
      title: "Adam Brown",
      sub: "Software Developer",
      about: "<p></p>",
      navigation: [
        {
          icon: 'mdi-home',
          title: 'Home',
          click: () => this.$vuetify.goTo(0)
        }  ,      
        {
          icon: 'mdi-account',
          title: 'About',
          click: () => this.$vuetify.goTo('#aboutGroup')
        },        
        {
          icon: 'mdi-pencil',
          title: 'Projects',
          click: () => this.$vuetify.goTo('#projects')
        },        
        {
          icon: 'mdi-library',
          title: 'Skills',
          click: () => this.$vuetify.goTo('#skills')
        },
        {
          icon: 'mdi-mail',
          title: 'Contact',
          click: () => this.$vuetify.goTo('#contact')
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
  },
  computed: {
    skillgrid () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return 4
        case 'sm': return 4
        case 'md': return 2
        case 'lg': return 2
        case 'xl': return 2
      }
    }
  }
  
}
</script>

<style scoped>
.aboutRow{
  width: 100%;
}
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
    min-height: 60vh;
    margin-top: 20px;
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
  #skills{
    min-height: 60vh;
  }
  .skillWrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-height: 50vh;
  }
  .skill{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
  }
  .skillImg{
    height: 10vh;
    margin: 15px;
  }
  .skillGridRow{
    padding: 20px;
  }
  .skillCard{
    margin: 5px;
  }
</style>