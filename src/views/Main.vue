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
          <Post />
        </div>
      </div>

      <!-- RIGHT SECTION -->
      <div class="main-right">
        <h2>profilo</h2>
        <h2>suggerimenti</h2>
        <h2>footer</h2>
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
    @import "../scss/main";
</style>
