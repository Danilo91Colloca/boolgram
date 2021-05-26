<template>
  <div class="skeleton">
    <main class="wrapper-center">
      <!-- LEFT SECTION -->
      <div class="main-left">
        <div class="stories-box">
          <div class="slider">
            <div class="story-container"  v-for="userStory in usersArr" v-bind:key="userStory.id">
              <div class="container-imgUser-story">
                <!-- BACKGROUND COLOR NO IMG-->
              </div>
            </div>
          </div>
        </div>
        <!-- posts box -->
        <div class="posts-box">
          <div class="post" >
            <div class="post-collection-comntainer">
              <div class="post-author-box">
                <div class="post-userData">
                  <div class="post-userImage">
                    <!-- NO IMAGE -->
                  </div>
                  <div class="post-authorName">
                    <h5 class="name1">
                      <!-- NO USER NAME -->
                    </h5>
                    <h5 class="post-full-name">
                      <!-- NO ND NAME -->
                    </h5>
                  </div>
                </div>
              </div>
              <div class="post-img-box">
                <img src="" alt="">
              </div>
              <!-- like and msg box-->
            </div>
          </div>
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
              <a class="view-all" href="#"> Mostra tutti</a>
            </div>
            <!-- suggestions box-->
            <div class="suggestions-box">
              <ul class="list-users-suggested">
                <li class="user-suggested-li" 
                  v-for="user in usersArr" 
                  v-bind:key="user.id"
                >
                  <div class="suggested-user">
                    <div class="container-imgUser-story">
                      <!-- NO IMG -->
                    </div>
                    <div class="userName-burtton-r-contianer">
                      <h5 class="user-name-story1">
                        <!-- NO NAME -->
                      </h5>
                      <h5 class="user-name-story2">
                        <!-- NO NAME -->
                      </h5>
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
import { mapState } from "vuex";
export default {
  name: "Skeleton",
  mounted () {
    this.$store.dispatch("getUsers")
  },
  computed: { 
      ...mapState([
        "usersArr",
        "footerServices",
        "postsArr"

    ]),
    
  } 
};
</script>

<style lang="scss" scoped>
    @import "../my-scss/skeleton";
</style>
