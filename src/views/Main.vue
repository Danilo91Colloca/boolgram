<template>
  <div class="main">
    <skeleton></skeleton>

    <!-- V-IF NOT SHOW -REAL MAIN -->
    <main class="wrapper-center"  v-if="INVISIBLE">
      <!-- LEFT SECTION -->
      <div class="main-left">
       <slide-story/>
        <!-- posts box -->
        <div class="posts-box">
          <Post/>
        </div>
      </div>
      <!-- RIGHT SECTION -->
      <div class="main-right">
        <div class="main-r-wrapper">
          <!-- user section on right -->
          <div class="user-r-section">
            <div class="profile-info-userLogged">
              <div class="img-profile-userLogged">
                <img src="../assets/profile.jpg" alt="">
              </div>
              <div class="user-name-box">
                <p class="user-name">piu_94</p>
                <p class="real-name">Paperion Pippo</p> 
              </div> 
              <a href="#" class="change-account">Passa a</a>  
            </div>
            <div class="link-to-seggested">
              <p class="suggested-text">Suggerimenti per te</p>
              <a class="view-all" href="/suggested"> Mostra tutti</a>
            </div>
            <!-- suggestions box-->
            <div class="suggestions-box">
              <ul class="list-users-suggested">
                <li class="user-suggested-li" v-for="user in usersArr" 
                v-bind:key="user.id">
                    <div class="suggested-user">
                      <div class="container-imgUser-story">
                        <img :src="user.profile_picture" alt="">
                      </div>
                      <div class="userName-burtton-r-contianer">
                        <h5 class="user-name-story">{{user.profile_name}}</h5>
                        <a href="#" class="change-account">Segui</a> 
                      </div>
                    </div>
                </li>
              </ul>
            </div>
          </div>
          <!-- FOOTER -->
          <footer>
            <div class="footer-links">
              <ul class="link-ul" >
                <li class="link-li dot" v-for="item in footerServices" v-bind:key="item.id">
                  {{item}}
                </li>
              </ul>
            </div>
            <div class="copyright">
              &copy; 2021 BOOLGRAM FROM BOOLBOOK
            </div>
          </footer>
        </div>
      </div>
    </main>
    
  </div>
</template>

<script>
// @ is an alias to /src
import Post from "@/components/Post.vue";
import { mapState } from "vuex";
import SlideStory from "@/components/SlideStory.vue";
import Skeleton from "@/components/Skeleton.vue"
export default {
  name: "Main",
  components: {
    Post,
    SlideStory,
    Skeleton
  },
  mounted () {
        this.$store.dispatch('getUsers')
    },
  computed: { 
      ...mapState([
        'usersArr',
        'footerServices',

    ]),
    
  } 
};
</script>

<style lang="scss" scoped>
    @import "../my-scss/main";
</style>
