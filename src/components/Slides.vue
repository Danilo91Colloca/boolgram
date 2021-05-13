<template>
    <div class="stories-box">
      <!-- stories box -->
      <div class="prev-arrow">
        <i class="fas fa-arrow-left"></i>
      </div>
      <div class="slider">
        <div class="story-container"  v-for="userStory in usersArr" v-bind:key="userStory.id">
          <div class="container-imgUser-story">
            <img :src="userStory.profile_picture" alt="">
          </div>
          <h5 class="user-name-story">{{userStory.profile_name}}</h5>
        </div>
        <!-- <div class="story-container"  v-for="userStory in usersArr" v-bind:key="userStory.id">
          <div class="container-imgUser-story">
            <img :src="userStory.profile_picture" alt="">
          </div>
          <h5 class="user-name-story">{{userStory.profile_name}}</h5>
        </div> -->
      </div>
      <div class="next-arrow">
        <i class="fas fa-arrow-right"></i>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src

import { mapState } from 'vuex';
export default {
  name: "Slides",
  components: {
  },
  mounted () {
        this.$store.dispatch('getUsers')
    },
  computed: 
    mapState([
      'usersArr'
  ]),
};
</script>

<style lang="scss" scoped>
    @import "../my-scss/_stories-box";
</style>
