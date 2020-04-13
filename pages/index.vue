<template>
    <div>
      <div class="" id="titleGroup"> 
        <div id="title">
          <h2 >{{siteIntro}}</h2>
        </div>
      </div>
      <div class="section" id="aboutGroup">
        <SectionHead>About</SectionHead>
          <v-container class="aboutlayout">
            <v-row justify="center" align-content="center" class="aboutContent">
              <v-col class="center d-flex child-flex" cols="12" md="3">
                <div style="" class="center">
                    <v-img height="250px" max-width="250px" class="headShot"  src="/img/headshot.jpg" />
                </div>
              </v-col>
              <v-col class="d-flex child-flex aboutDesc" cols="12" md="6">
              <p v-html="about"></p>
              </v-col>
            </v-row>
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
              <v-form ref="contactForm" v-model="valid" >
                <v-text-field v-model="name" :rules="[v => !!v || 'Name is required']" class="contactIn" full-width outlined label="Name"/>
                <v-text-field :rules="[v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid',]" v-model="email" required class="contactIn" full-width outlined label="Email"/>
                <v-textarea v-model="message" :rules="[v => !!v || 'Message is required']" class="contactIn" full-width outlined label="Message"/>
                <div class="contactBtnWrapper">
                  <v-btn @click="sentContact" color="primary">Submit</v-btn>
                </div>
              </v-form>
            </div>
          </v-card>
          <div class="contactGroup">
            <v-btn href="https://github.com/adamb5441" x-large icon>
              <v-icon dark>mdi-github</v-icon>
            </v-btn>      
            <v-btn  href="https://www.linkedin.com/in/adamb54/" x-large icon>
              <v-icon dark>mdi-linkedin</v-icon>
            </v-btn>      
          </div>
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
      valid:  false,
      email: "",
      name: "",
      message: "",
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
      siteIntro: "I am a passionate developer  interested in creating things that take on a life of there own.",
      about: "<p>I'm a Developer with an interest in hiking and martial arts. I'm always looking to learn how things work and why they are the way they are.</p><p>In my work I have an obsession  for finding the most effective solution to a given problem. Then refining it into something elegant and precise. This makes me exited for new challenges that come my way.</p>",
      title: "Adam Brown",
      sub: "Software Developer",
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
  methods: {
    async sentContact(){
      this.$refs.contactForm.validate()
        if(this.valid){
          this.$axios.$post("/status", {message: this.message, name: this.name, email: this.email}).then(res => {
            console.log(res)
          })
        }

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
.contactGroup{
  margin: 10px;
}
.aboutDesc{
  min-height: 100%;
  display: flex;
  align-items: center;
  font-size: 24px;
}
.center{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.headShot{
  border-radius: 50%;
}
.aboutSubHead{
  display: flex;
  flex-direction: column;
}
.aboutContent{
  display: flex;
}
  .aboutlayout{
    padding: 0 50px;
    min-height: 30vh;
    max-width: 1380px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  #titleGroup {
    min-height: 60vh;
    display: block; 
    height: 100vh; 
    width: 100%; 
    background-image: url('/img/nightsky.jpeg');  
    background-repeat: no-repeat;
    background-size: cover;
  }
  #title{
    padding: 10px;
    font-size: 30px;
  }
  @media only screen and (min-width: 600px){
    #title{
      font-size: 60px;
    }
  }
  .section{
    margin-top: 20px;
  }
  #contact{
    min-height: 70vh;
  }
  .contactWrapper{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 60vh;
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