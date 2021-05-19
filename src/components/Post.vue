<template>
  <div class="post" >
    <div class="post-collection-comntainer" v-for="(post, index) in postsArr" :key="index.id">
      <div class="post-author-box">
        <div class="post-userData">
          <div class="post-userImage">
            <img :src="post.profile_picture" alt="">
          </div>
          <div class="post-authorName">
            <h5>{{post.profile_name}}</h5>
            <span class="post-full-name">{{post.profile_fullname}}</span>
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
          <i id="heart-like" class="far fa-heart heart"></i>
          <i class="far fa-comment"></i>
        </div>
        <div class="like-users">
          <div class="img-user-like">
            <img :src="post.likes[0].profile_picture"  alt="">
          </div>
          <div class="all-likes">
            Piace a 
            <strong>{{post.likes[0].username}}</strong>
            e 
            <a href="#">
              <strong>{{counter(post.likes)}} altri</strong>
            </a>
          </div>
        </div>
      </div>
      <!-- posts text -->
      <div class="post-text-box">
         <h4>{{post.profile_name}}</h4>
         <p>{{post.post_text}}</p>
      </div>
      <!-- read comments box-->
      <div class="comments-box">
          <div class="last-comment">
            <p>
              <strong>{{post.comments[0].username}}</strong>
              {{post.comments[0].text}}
            </p>
          </div>
          <a class="all-comments" href="#" >
            Visualizza tutti e {{counter(post.comments)}} commenti
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
  },
  methods: {
    counter(toCount){
      return toCount.length;
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../my-scss/_post";
</style>
