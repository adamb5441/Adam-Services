import Vue from 'vue'
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
if(process.client){
    require('vue-particles')
}