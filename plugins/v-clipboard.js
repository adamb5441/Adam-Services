import Vue       from 'vue'
import Clipboard from 'v-clipboard'

Vue.use(Clipboard)
if(process.client){
    require('v-clipboard')
}