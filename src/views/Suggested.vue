<template>
  <div class="suggested">
    <main class="suggested-main">
      <div class="title-page">
        <div class="title">
          <span>Suggeriti per te</span>
        </div>
      </div>
      <div class="contacts-suggested-container">
        <ul class="ul-list-users-suggested">
          <li v-for="user in usersArr" :key="user.id" class="user-item">
            <div class="pic-name">
              <div class="user-img">
                <img :src="user.profile_picture" alt="">
              </div>
              <p class="user-name">
                {{user.profile_name}}
              </p>
            </div>
            <button class="follow-button">
              Segui
            </button>
          </li>
          <li v-for="userB in postsArr" :key="userB.id" class="user-item">
            <div class="pic-name">
              <div class="user-img">
                <img :src="userB.profile_picture" alt="">
              </div>
              <p class="user-name">
                {{userB.profile_name}}
              </p>
            </div>
            <button class="follow-button">
              Segui
            </button>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: "Suggested",
  mounted () {
    // il dispatch serve per invocare un'azione (funzione) asincrona
    this.$store.dispatch('getUsers');
    this.$store.dispatch('getPosts');
    },
  computed:{
    ...mapState([
      'usersArr',
      'postsArr'

    
    ])
  },
  methods: {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import "../my-scss/_suggested";
</style>
