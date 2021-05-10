<template>
  <div class="post">
      <div class="post-author-box">
        <div class="post-userData">
          <div class="post-userImage">
            <!-- <img src="" alt=""> -->

          </div>
          <h5>NAME AUTHOR</h5>
        </div>
        <div class="menu-post">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div class="post-img-box">
        <img src="" alt="">
        POST IMAGE
      </div>
      <div class="like-message-box">
        <div class="icon-like-msg">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <div class="like-users">
          <div class="img-first-user">
            <img src="" alt="">
          </div>
          <h5>user name</h5>
        </div>
      </div>

  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../scss/_post";
</style>
