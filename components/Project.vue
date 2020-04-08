<template>
    <v-hover>
      <template v-slot:default="{ hover }">
                <v-card class="projectCard">
                <v-img class="white--text align-end" :src="mainImg">
                </v-img>
                <v-card-title>{{title}}</v-card-title>
                <v-card-text >{{descriptionShort}}</v-card-text>
                    <v-fade-transition>
                        <v-overlay
                        v-if="hover"
                        absolute
                        color="#FFFFFF"
                        >
                        <v-btn color="primary" class="projectBtn">Learn more</v-btn>
                        <v-btn color="primary" class="projectBtn" v-if="repoLink.length > 0" :href="repoLink">Repository</v-btn>
                        <v-btn color="primary"  class="projectBtn" v-if="siteLink.length > 0" :href="siteLink">Live Site</v-btn>
                    </v-overlay>
                </v-fade-transition>
            </v-card>
        </template>
    </v-hover>
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
            default: () => [],
            type: Array
        },
        descriptionShort: {
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            type: String
        },
        descriptionLong: {
            default: "",
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
    }),
}
</script>
<style scoped>
.projectCard{
}
.projectBtn{
    min-width: 40px;
}
</style>