<template>
  <div id="app">
    <div id="nav">
      <div class="nav-content">
        <div class="nav-logo">
          <a href="/" class="logo">
            <img src="./assets/logo.png" alt="" />
          </a>
        </div>
        <div class="nav-search">
          <input id="serach" type="text" placeholder="Cerca" />
        </div>
        <div class="nav-likeHomeUser">
          <i class="far fa-heart icon heart"></i>
          <a href="/" class="home-icon">
            <i class="fas fa-home"></i>
          </a>
          <div class="img-profile">
             <img src="./assets/profile.jpg" alt="">
          </div>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import "./my-scss/color-palette";
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap');
  body {
     background-color: $mainBgColor;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto Slab', serif;
  }
  #app {
    min-width: 350px;
    position: relative;
  }

  @import "./my-scss/nav";
</style>
