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
    history: [],
    success: false
  }),
  methods: {
    sendHandler(request){
      this[request.type](request)
    },
    inputHandler(val){
      this.JSONdata = val
    },
    async get(request){
      this.$axios.$post("/api/getJSON", {url: request.url}).then(res => {
        this.JSONdata = res
        this.$store.commit("addHistory", request)
      })
    },
    post(request){
      this.$axios.$post("/api/getJSON", {url: request.url, package: this.JSONdata}).then(res => {
        this.success = true,
        request.body = this.JSONdata
        this.$store.commit("addHistory", request)
      })
    }
  }
}
</script>
