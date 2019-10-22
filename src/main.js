import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import VueTextareaAutosize from "vue-textarea-autosize";
import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(VueTextareaAutosize);

Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyC6fyR6BS9_SySfHWhQZmUJM7kSQYXwqBg",
  authDomain: "vue-calendar-59c5f.firebaseapp.com",
  databaseURL: "https://vue-calendar-59c5f.firebaseio.com",
  projectId: "vue-calendar-59c5f",
  storageBucket: "vue-calendar-59c5f.appspot.com",
  messagingSenderId: "329603856119",
  appId: "1:329603856119:web:45e0ee45303df30b1ec5f2"
});

export const db = firebase.firestore();

new Vue({
  vuetify,
  render: h => h(App)
}).$mount("#app");
