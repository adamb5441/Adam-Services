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
  components: {
    Logo,
    VuetifyLogo
  },
  
}
</script>
<style lang="stylus" scoped>

</style>