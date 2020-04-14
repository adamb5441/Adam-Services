<template>
    <div>
        <v-hover>
        <template v-slot:default="{ hover }">
                    <v-card class="projectCard">
                    <v-img style="height: 300px" class="white--text align-end" :src="mainImg">
                    </v-img>
                    <v-card-title>{{title}}</v-card-title>
                    <v-card-text >{{descriptionShort}}</v-card-text>
                        <v-fade-transition>
                            <v-overlay
                            v-if="hover"
                            absolute
                            color="#FFFFFF"
                            >
                            <v-btn @click.stop="dialog = !dialog" color="primary" class="projectBtn">Learn more</v-btn>
                            <v-btn color="primary" class="projectBtn" v-if="repoLink.length > 0" :href="repoLink">Repository</v-btn>
                            <v-btn color="primary"  class="projectBtn" v-if="siteLink.length > 0" :href="siteLink">Live Site</v-btn>
                        </v-overlay>
                    </v-fade-transition>
                </v-card>
            </template>
        </v-hover>
    <v-dialog
        v-model="dialog"
        class="modal"
        max-width="1000px"
      >
        <!-- <v-btn 
            fab
            dark
            x-large
            top
            right 
            icon 
            @click="dialog = false"
            style="marginTop: 30px"
        >
            <v-icon>mdi-close</v-icon>
        </v-btn> -->
        <v-card class="modelCard">
        <v-carousel
            cycle
            show-arrows-on-hover
            >
            <v-carousel-item
                v-for="(img, i) in imgs"
                :key="i"
                :src="img"
            >

            </v-carousel-item>
        </v-carousel>
  
          <v-card-text>
              {{descriptionLong}}
          </v-card-text>
  
        </v-card>
      </v-dialog>
    </div>
</template>
<script>
export default {
    name: "Project",
    props: {
        title: {
            default: "New Project",  
            type: String
        },
        mainImg: {
            default: "/img/comingsoon.png",
            type: String
        },
        imgs: {
            default: () => [
                "/img/comingsoon.png"
            ],
            type: Array
        },
        descriptionShort: {
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.",
            type: String
        },
        descriptionLong: {
            default: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, \"Lorem ipsum dolor sit amet..\", comes from a line in section 1.10.32.",
            type: String
        },
        repoLink: {
            default: "",
            type: String
        },
        siteLink: {
            default: "",
            type: String
        }
    },
    data: () => ({
        overlay: false,
        dialog: false
    }),
}
</script>
<style >
.v-btn--fab.v-size--x-large {
    height: 10vh;
    width: 72px;
}
.modalX{
    margin-top: 50px;
}
.projectCard{
    height: 100%;
}
.projectBtn{
    min-width: 40px;
}
.modelCard{
}
.modal{
}
</style>