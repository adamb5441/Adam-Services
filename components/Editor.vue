<template>
  <div>
    <v-jsoneditor v-model="json" :options="options" :plus="true" height="1000px" @error="onError" />
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
