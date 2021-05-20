<template>
  <div class="suggested">
    <main class="suggested-main">
      <div class="title-page">
        <div class="title">
          <span>Suggeriti per te</span>
        </div>
      </div>
      <div class="contacts-suggested-container">
        <ul>
          <li v-for="user in usersArr" :key="user.id">
            {{user.profile_name}}
          </li>
          <li v-for="userB in postsArr" :key="userB.id">
            {{userB.profile_name}}
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
