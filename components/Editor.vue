<template>
  <div class="editorWrapper">
    <v-jsoneditor v-model="json" :options="options" :plus="false" :height="'75vh'" @error="onError" />
  </div>
</template>

<script>

export default {
  name: 'Editor',
    components: {
    },
    props: {
      jData: Object
    },
    data() {
        return {
            json: {},
            options: {mode: 'code'}
        }
    },
    watch: {
      jData: function(){
        this.json = this.jData
      },
      json: function(){
        this.$emit("inputEvent", this.json)
      }
    },
    methods: {
        onError() {
            console.log('error')
        }
    }
};
</script>
<style>
.jsoneditor{
  height: 75vh !important;
  border: thin solid #1E1E1E;
}
.jsoneditor-menu {
    background-color: #1E1E1E;
}
.sda{
  background-color: #121212;
}
</style>
