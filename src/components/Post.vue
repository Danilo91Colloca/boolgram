<template>
  <div class="post" >
    <div class="post-collection-comntainer" v-for="post in postsArr" :key="post.id" onload="getLikesNum()">
      <div class="post-author-box">
        <div class="post-userData">
          <div class="post-userImage">
            <img :src="post.profile_picture" alt="">
          </div>
          <div>
            <h5>{{post.profile_name}}</h5>
            <span>{{post.profile_fullname}}</span>
          </div>
        </div>
        <div class="menu-post">
          <i class="fas fa-ellipsis-h"></i>
        </div>
      </div>
      <div class="post-img-box">
        <img :src="post.post_image" alt="">
      </div>
      <!-- like and msg box-->
      <div class="like-message-box">
        <div class="icon-like-msg">
          <i class="far fa-heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <div class="like-users">
          <div class="img-user-like">
            <img src="" alt="">
          </div>
          <div class="all-likes">
            Piace a 
            <strong>name</strong>
            e 
            <a href="#">
              <strong>n altri</strong>
            </a>
        </div>
      </div>
          </div>
      <!-- read comments box-->
      <div class="comments-box">
          <div class="last-comment">
            <p>
              <strong>heaters_5483 </strong>
              this is an heaters comment
            </p>
          </div>
          <a class="all-comments" href="#" >
            Visualizza tutti e n commenti
          </a>
      </div>
      <!-- write a comment box-->
      <div class="write-comment-box">
        <form class="form-comment" action="">
          <textarea type="text" placeholder="Aggiungi un commento" maxlength="1000" v-model="commentIsWrite" v-on:keyup="removeDisabled()">
          </textarea>  
          <button type="submit" class="disable-button" v-if="commentIsWrite.length < 1"> Pubblica</button>
          <button type="submit" v-else> Pubblica</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Post",
  props: {
  },
  mounted () {
    this.$store.dispatch('getUsers');
    this.$store.dispatch('getPosts');
    },
  computed:{
    ...mapState([
      'usersArr',
      'postsArr',
      'commentIsWrite'
    ]),
    commentIsWrite: {
      get () {
        return this.$store.state.commentIsWrite
      },
      set (value) {
        this.$store.commit('upDatecommentIsWrite', value)
      },
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../my-scss/_post";
</style>
