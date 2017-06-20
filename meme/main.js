import Vue from 'vue';
import iview from 'iview'
import $ from 'jquery';


// import io from 'socket.io';
import axios from 'axios';

Vue.component('CityItem',require('./vue/CityItem.vue'));
Vue.component('MyEditor',require('./vue/MyEditor.vue'));
Vue.component('TheUpload',require('./vue/TheUpload.vue'));

Vue.use(iview);
window.$ = $;
window.Vue = Vue;
window.axios = axios;


