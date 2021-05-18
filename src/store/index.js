import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(Vuex);
Vue.use(VueAxios, axios);

export default new Vuex.Store({
  state: {
    usersArr: [],
    postsArr: [],
    footerServices:[
      'Informazioni',
      'Assistenza',
      'Stampa',
      'API',
      'Lavora con noi',
      'Privacy',
      'Condizioni',
      'luoghi',
      'Account più popolari',
      'Hashtag',
      'Lingua'
    ],

    commentIsWrite: ''
  },
  getters: {
    usersArr: state=> {
      return state.usersArr;
    },
    postsArr: state=> {
      return state.postsArr;
    },
    commentIsWrite: state=>{
      return state.commentIsWrite;
    },
    disable: state=>{
      return state.disable;
    },

  },
  mutations: {
    SET_usersArr(state, objectfromApi) {
      state.usersArr = objectfromApi;
    },
    SET_postsArr(state, objectsfromApi) {
      state.postsArr = objectsfromApi;
    },
    upDatecommentIsWrite(state, commentIsWrite){
      state.commentIsWrite = commentIsWrite;
    }
  },
  actions: {
    getUsers ({ commit }) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
        .then((response)=>{
          let objectfromApi=response.data;
          commit('SET_usersArr', objectfromApi);
        });
    },
    getPosts ({ commit }) {
      axios
        .get('https://flynn.boolean.careers/exercises/api/boolgram/posts')
        .then((response)=>{
          let objectsfromApi=response.data;
          // console.log(response.data);
          commit('SET_postsArr', objectsfromApi);
        });
    }
  },
  modules: {},
});
