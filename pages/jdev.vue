<template>
  <v-container class="home">
    <UrlInput @sendEvent="sendHandler" :text="JSONdata" />
    <Editor @inputEvent="inputHandler" :jData="JSONdata" />
  </v-container>
</template>

<script>
// @ is an alias to /src
import Editor from '@/components/Editor.vue'
import UrlInput from '@/components/UrlInput.vue'

export default {
  name: 'jdev',
  props: {
    loggedIn: Boolean
  },
  layout: 'tabControl',
  components: {
    Editor,
    UrlInput
  },
  data: () => ({
    JSONdata: {},
    geturl: "",
    posturl: "",
    history: [],
    success: false
  }),
  methods: {
    sendHandler(request){
      this[request.event](request)
    },
    inputHandler(val){
      this.JSONdata = val
    },
    async get(request){
      this.$axios.$post("/api/getJSON", {url: request.url}).then(res => {
        this.JSONdata = res
      })
    },
    post(request){
      this.$axios.$post("/api/getJSON", {url: request.url, package: this.JSONdata}).then(res => {
        this.success = true
      })
    }
  },
  computed: {
    selected(){
      return this.$store.getters.selected
    }
  }
}
</script>
