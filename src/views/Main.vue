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
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
           
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>

          <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>

           <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>

           <div class="story-container">
            <div class="container-imgUser-story">
              <img src="../assets/profile.jpg" alt="">
            </div>
            <h5 class="user-name-story">ciccio_pippo91</h5>
          </div>
        </div>

        <!-- posts box -->
        <div class="posts-box">
          <Post msg="post's components" />
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
.main {
  position: absolute;
  top: 80px;
  width: 100vw;
  max-width: 100%;
  height: 100%;
  main.wrapper-center {
    width: 1200px;
    background-color: lightgray; //TEMP
    height: calc(100vh - 80px); //TEMP
    margin: 0 auto;
    display: flex;
    .main-left {
      width: 50%;
      height: 100%;
      background-color: green;
      .stories-box {
        width: 100%;
        height: 180px;
        background: #fff; 
        display: flex;
        border: 2px solid lightgray;
        margin-top: 10px;
        overflow-x: auto;
        .story-container {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0px 10px;
            .container-imgUser-story {
            width: 50px;
            border-top: 2px solid rgb(214,11,120);
            border-right: 2px solid rgb(214,11,120);
            border-left:  2px solid gold;
            border-bottom:  2px solid gold;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            padding: 2px;  
            margin-bottom: 5px;        
            img {
              width: 100%;
              border-radius: 50%;
            }
          }
        }
        

      }
    }
    .main-right {
      width: 50%;
      height: 100%;
      background-color: yellow;
    }
  }
}
</style>
