<template>
  <div class="main">
    <main class="wrapper-center">
      <!-- LEFT SECTION -->
      <div class="main-left">
        <div class="stories-box">
          <!-- stories box -->
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
          <!-- TEMP -->
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
          <!-- TEMP --> 
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
          <!-- TEMP -->
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
            <!-- TEMP -->
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
           
        </div>

        <!-- posts box -->
        <div class="posts-box">
          <Post 
            :postImg="require('@/assets/landscape.png')" 
            :userLikeImg="require('@/assets/landscape.png')"
          />
        </div>
      </div>

      <!-- RIGHT SECTION -->
      <div class="main-right">
        <div class="main-r-wrapper">
          <!-- user section on right -->
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
          <!-- suggestions box-->
          <div class="suggestions-box">
             <ul class="list-users-suggested">
               <li class="user-suggested-li">
                  <div class="suggested-user">
                    <div class="container-imgUser-story">
                      <img src="../assets/profile.jpg" alt="">
                    </div>
                    <h5 class="user-name-story">ciccio_pippo91</h5>
                    <a href="#" class="change-account">Segui</a> 
                  </div>
               </li>
               <!-- TEMP-->
               <li class="user-suggested-li">
                  <div class="suggested-user">
                    <div class="container-imgUser-story">
                      <img src="../assets/profile.jpg" alt="">
                    </div>
                    <h5 class="user-name-story">ciccio_pippo91</h5>
                    <a href="#" class="change-account">Segui</a> 
                  </div>
               </li>
               <!-- TEMP-->
               <li class="user-suggested-li">
                  <div class="suggested-user">
                    <div class="container-imgUser-story">
                      <img src="../assets/profile.jpg" alt="">
                    </div>
                    <h5 class="user-name-story">ciccio_pippo91</h5>
                    <a href="#" class="change-account">Segui</a> 
                  </div>
               </li>
               <!-- TEMP-->
               <li class="user-suggested-li">
                  <div class="suggested-user">
                    <div class="container-imgUser-story">
                      <img src="../assets/profile.jpg" alt="">
                    </div>
                    <h5 class="user-name-story">ciccio_pippo91</h5>
                    <a href="#" class="change-account">Segui</a> 
                  </div>
               </li>
             </ul>
          </div>
          <!-- FOOTER -->
          <footer>
            <div class="footer-links">
              <ul class="link-ul">
                <li class="link-li">About</li>
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
export default {
  name: "App",
  components: {
    Post,
  },
};
</script>

<style lang="scss" scoped>
    @import "../my-scss/main";
</style>
