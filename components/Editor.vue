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
  border: thin solid #1E1E1E !important;
}
.jsoneditor-menu {
    background-color: #1e1e1e !important;
    border-bottom: none
}
.ace_content{
  background-color: #121212 !important;
}
.ace_gutter{
    background-color: #1e1e1e !important;
}
.ace-jsoneditor .ace_gutter-active-line {
    background-color: #3068A0 !important;
    color: #ffffff !important;
}
.ace-jsoneditor .ace_marker-layer .ace_active-line {
    background-color: #3068A0 !important;
}
.jsoneditor-statusbar{
    background-color: #1E1E1E !important;
}
.ace_gutter-cell{
  color: #ffffff !important;
}
.ace-jsoneditor .ace_text-layer {
    color: white !important;
}
.ace-jsoneditor .ace_cursor {
border-left: 2px solid white
}
.ace-jsoneditor .ace_variable {
color: blue
}
.ace-jsoneditor .ace_string {
color: white
}
.ace-jsoneditor .ace_comment {
color: white
}
.ace-jsoneditor .ace_constant.ace_numeric {
color:  white
}
</style>
