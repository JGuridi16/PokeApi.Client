import Vue from 'vue';
import axios from 'axios';
Vue.prototype.$http = axios;

//Buefy
import 'buefy/dist/buefy.css'
import Buefy from 'buefy';
Vue.use(Buefy);