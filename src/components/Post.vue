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
            <p  v-on:click="likesVisibility()">
              <strong>{{counter(post.likes)}} altri</strong>
            </p>
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
          <p class="all-num-comments" v-on:click="commentsVisibility(), getCommentIndex(index)">
            Visualizza tutti e {{counter(post.comments)}} commenti
          </p>
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
      <!-- modale all likes -->
      <div class="modal-container-all-likes-bg"
        v-if="allLikesToggle === true" 
        v-on:click="likesVisibility()"
      >
        <div class="likes-users-box">
          <div class="title-modal">
            <div class="close-cross-container">
              <i class="fas fa-times" v-on:click="commentsVisibility()"></i>
            </div>
            <p>
              Mi piace
            </p>
          </div>

        </div>
      </div>


      <!-- modale dei commenti -->
      <div class="modal-container-all-comments-bg" 
        v-if="allCommentsToggle === true" 
        v-on:click="commentsVisibility()"
      >
        <!-- close comments modal -->
        <div class="close-cross-container">
          <i class="fas fa-times" v-on:click="commentsVisibility()"></i>
        </div>
        <!-- /close comments modal -->
        <!-- all comments modal-->
        <div class="all-comments-modal-box">
          <div class="img-post-container">
            <img :src="postsArr[commentIndex].post_image" alt="">
          </div>
          <div class="comments-side">
            <!-- author img and name -->
            <div class="author-post-section-inPost">
              <div class="author-post-img-inPost">
                <img :src="postsArr[commentIndex].profile_picture" alt="">
              </div>
              <h4>{{postsArr[commentIndex].profile_name}}</h4>
            </div>
            <div class="post-box-text-comments">
              <div class="post-text-container">
                <div class="author-post-img-inPost">
                  <img :src="postsArr[commentIndex].profile_picture" alt="">
                </div>
                <h4 class="author-name">
                  {{postsArr[commentIndex].profile_name}}
                </h4>
                <p class="post-text">
                  {{postsArr[commentIndex].post_text}}
                </p>
              </div>
              <!-- /author img and name -->
              <ul class="comments-ul">
                <li class="comments-li" v-for="comment in postsArr[commentIndex].comments" :key="comment.id">
                  <h4 class="userName-comment">
                    {{comment.username}}
                  </h4>
                  <p class="comment-text">
                    {{comment.text}}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Post",
  mounted () {
    // il dispatch serve per invocare un'azione (funzione) asincrona
    this.$store.dispatch('getUsers');
    this.$store.dispatch('getPosts');
    },
  computed:{
    ...mapState([
      "usersArr",
      "postsArr",
      "commentIsWrite",
      "allCommentsToggle",
      "commentIndex",
      "allLikesToggle",
    ]),
    commentIsWrite: {
      get () {
        return this.$store.state.commentIsWrite
      },
      set (value) {
        this.$store.commit('upDatecommentIsWrite', value)
      },
    },
    allCommentsToggle: {
      get() {
        return this.$store.state.allCommentsToggle
      },
      set(value) {
        this.$store.commit('CHANGE_allCommentsToggle', value)
      }
    },
    allLikesToggle: {
      get() {
        return this.$store.state.allLikesToggle
      },
      set(value) {
        this.$store.commit('CHANGE_allLikesToggle', value)
      }
    },
    commentIndex: {
      get() {
        return this.$store.state.commentIndex
      },
      set(value) {
        this.$store.commit('SET_commentIndex', value)
      }
    }
  },
  methods: {
    counter(toCount){
      return toCount.length;
    },
    commentsVisibility(){
      if(this.allCommentsToggle === false) {
        this.allCommentsToggle = true;
      } else {
        this.allCommentsToggle = false;
      }
    },
    likesVisibility(){
      if(this.allLikesToggle === false) {
        this.allLikesToggle = true;
      } else {
        this.allLikesToggle = false;
      }
    },
    getCommentIndex(idx) {
      this.commentIndex = idx;
      console.log(idx)
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../my-scss/_post";
</style>
