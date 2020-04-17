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
      <div class="section" id="experience">
        <sectionHead>Experience</sectionHead>
        <v-container class="experienceBody">
          <v-card v-for="(job, i) in experience" :key="i">
            <v-card-title><div class="experienceHeadCompany"><h2>{{job.company}}</h2><h5>{{job.time}}</h5></div><v-spacer /><h4>{{job.title}}</h4></v-card-title>
            <v-divider />
            <v-card-text>
              {{job.description}}
            </v-card-text>
            <v-card-text>
              <h3>
                Accomplishments
              </h3>
              <ul>
                <li v-for="(point, i) in job.acomplishments" :key="i">
                  {{point}}
                </li>
              </ul>
            </v-card-text>
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
                lg="4"
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
                  <div v-html="contactBtnMessage"></div>
                </div>
                <div class="contactBtnWrapper">
                  <v-btn :loading="contactBtnLoading" :disabled="contactBtnDisabled" @click="sentContact" color="primary">Submit</v-btn>
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
            <v-btn  href="mailto:adamb5441@gmail.com" x-large icon>
              <v-icon dark>mdi-email</v-icon>
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
  head () {
    return {
      title: "Adam Brown Portfolio"
    }
  },
  name: "Portfolio",
  components: {
    MediaGroup,
    SectionHead,
    ProjectCard
  },
  data: function(){
    return {
      contactBtnDisabled: false,
      contactBtnLoading: false,
      contactBtnMessage: "",
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
          img: "/img/VUEX.png",
          label: "Vuex"
        },
        {
          img: "/img/DOTNETCORE.png",
          label: ".NET core"
        },
        {
          img: "/img/LINQ.png",
          label: "Linq"
        },    
        {
          img: "/img/ENTITY.png",
          label: "Entity"
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
          img: "/img/SQL.png",
          label: "SQL"
        },
        {
          img: "/img/postman.png",
          label: "Postman"
        },
        {
          img: "/img/HTML.png",
          label: "HTML"
        },        
        {
          img: "/img/CSS.png",
          label: "CSS"
        },        
        {
          img: "/img/Python.png",
          label: "Python"
        }

      ],
      experience: [
        {
          title: "Full-Stack  Developer",
          company: "Tempus Dynamics",
          description: "I currently Work with a agile team of 5 developers on business process automation in the space of non profit research  with HIPPA compliance. My responsibilities included new development maintenance and documentation of application. As well as presenting features, and planning  applications with other developers, clients and subject experts.",
          time: "March 2019 - present",
          acomplishments: [
            "Created data collection platform that integrated  with multiple workflow engines using .net core and Vuejs",
            "Built cms for email services and internal json tools using .NET mvc.",
            "Created data visualization platform using vuejs."
          ],
        }
      ],
      projects: [
        {
          title: "This portfolio",
          mainImg: "/img/NUXT.png",
          descriptionShort: "The website your looking at is a nuxt app using serverside vue.",
          descriptionLong: "This site was designed by me and built using nuxt and vuetify. Making the most out of the view model design to separate text and html. In addition to being set up with a github to heroku pipline to automatically deploy changes commited to the master branch.",
          imgs: [
            "/img/nuxtapp.png"
          ],
          repoLink: "https://github.com/adamb5441/Adam-Services"

        },
        {
          title: "Finite",
          mainImg: "/img/Screenshot_2019-03-18 Finite.png",
          descriptionShort: "A .NET mvc project using for managing for track a household budget.",
          descriptionLong: "Finite is a finnancial planning application for household budgeting that uses a budget tracker to separate by catagory and an account balance with over draft and custom alert.",
          imgs: [
            "/img/Screenshot_2019-03-18 Finite.png",
            "/img/Screenshot_2019-03-18 Finite(1).png",
            "/img/Screenshot_2019-03-18 https finiteplanner azurewebsites net.png"
          ],
          repoLink: "https://github.com/adamb5441/FinancialPlanner"
        },
        {
          title: "BugTracker",
          mainImg: "/img/bugTracker.jpg",
          repoLink: "https://github.com/adamb5441/BugTracker",
          descriptionLong: "The Bug Tracker is a error managment system made in mvc5. Consisting of Developer, Submitter, Project Manager and Admin roles.",
          descriptionShort: "Work ticketing app built using .NET mvc, linq and entity framework",
          mainImg: "/img/Bugtracker/Screenshot_2019-02-12 BugTracker-1.png",
          imgs: [
            "/img/Bugtracker/Screenshot_2019-02-12 BugTracker.png",
            "/img/Bugtracker/Screenshot_2019-02-12 BugTracker-1.png",
            "/img/Bugtracker/Screenshot_2019-02-12 BugTracker-2.png"
          ]
        },
        {
          title: "Legend's Blog",
          repoLink: "https://github.com/adamb5441/mvcBlog",
          mainImg: "/img/himalaya-evening.jpg",
          imgs: [
            "/img/bloglog01.png",
            "/img/bloglogo02.png",
            "/img/bloglogo03.png"
          ],
          descriptionShort: "A blog site written in .NET mvc using 0Auth login.",
          descriptionLong: "The Legend's Blog is a .net mvc5 application with a blogpost feed, comment section and 3rd party login."
        },
        {
          title: "Keyboard Warrior",
          mainImg: "/img/portimg3.png",
          descriptionShort: "A react and node ecommerce app using bcrypt login.",
          descriptionLong: "The Keyboard Warrior is an eCommerce app using both local storage and database carts for a dynamic user experience. Features include search by names, sorting by costs, sorting by alphabet order and bcrypt login.  All so that the user can unleash there inner keyboard warrior!",
          imgs: [
            "/img/ext (2).jpg",
            "/img/ext (3).jpg",
          ],
          repoLink: "https://github.com/adamb5441/ecommerce"
        },
        {
          title: "DigiDash",
          mainImg: "/img/portimg2.png",
          descriptionShort: "A group project made with react node and postgres featuring custom layouts and settings",
          descriptionLong: "DigiDash is a replacement home page made to be more useful then your standard search engine screen. With 10 different functional widgets and customization styles. Made with react grid layout and a variety of apis.",
          imgs: [
            "/img/digi01.png",
            "/img/digi02.png",
            "/img/digi03.png",
            "/img/digi04.png"
          ],
          siteLink: "https://digi-dash.co/",
          repoLink: "https://github.com/adamb5441/digidash" 
        },
        // {
        //   title: "Trip Planner",
        //   mainImg: "/img/portimg1.png",
        //   repoLink: "https://github.com/adamb5441/Personal_project",
        //   descriptionShort: "A react node and postgres app using Auth0.",
        //   descriptionLong: "The Trip Planner is a full CRUD app made with the PERN stack using Sessions and Auth0 to login and manage information under the profile. The app has a note, calendar and map portion to help stop bad planning!",
        //   imgs: [
        //     "/img/trip-planner/tp01.jpg",
        //     "/img/trip-planner/tp02.jpg",
        //     "/img/trip-planner/tp03.jpg",
        //     "/img/trip-planner/tp04.jpg",
        //     "/img/trip-planner/tp05.jpg",
        //     "/img/trip-planner/tp06.jpg",
        //   ]
        // }
      ],
      siteIntro: "I am a passionate developer  interested in creating things that take on a life of their own.",
      about: "<p>I'm a developer with an interest in hiking and martial arts. I'm always looking to learn how things work and why they are the way they are.</p><p>I have an obsession  for finding the most effective solution to a given problem, then refining it into something elegant and precise.</p>",
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
          icon: 'mdi-briefcase',
          title: 'Experience',
          click: () => this.$vuetify.goTo('#experience')
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
          this.contactBtnLoading = true;
          this.contactBtnDisabled = true
          this.$axios.$post("/status", {message: this.message, name: this.name, email: this.email}).then(res => {
            this.contactBtnLoading = false;
            this.contactBtnMessage = "Thank you, I will respond as soon." 
          }).catch( err => {
            this.contactBtnLoading = false;
            this.contactBtnMessage = '<p style="color: red" >Failed to send. You can still contact me at <a href="mailto:adamb5441@gmail.com">adamb5441@gmail.com</a>.</p>'
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
.experienceHeadCompany{
  display: flex;
  flex-direction: column;
}
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
    min-height: 90vh;
    display: block;
  }
  .contactWrapper{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 85vh;
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