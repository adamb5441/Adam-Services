import Vue from 'vue'
import VJsoneditor from 'v-jsoneditor'

Vue.use(VJsoneditor)
if(process.client){
    require('v-jsoneditor')
}