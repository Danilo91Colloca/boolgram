<template>
  <div class="main">
    <main class="wrapper-center">
      <div class="main-left">
        <div class="stories-box">
          <h1>stoires container</h1>
        </div>
        <div class="posts-box">
          <Post msg="post's components" />
        </div>
      </div>
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
        height: 200px;
        background: blue; //TEMP
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
