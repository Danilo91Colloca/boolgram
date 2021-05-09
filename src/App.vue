<template>
  <div id="app">
    <div id="nav">
      <div class="nav-content">
        <div class="nav-logo">
          <img src="./assets/logo.png" alt="" />
        </div>

        <div class="nav-search">
          <input id="serach" type="text" placeholder="Cerca" />
        </div>
        <div class="nav-likeHomeUser">
          <i class="far fa-heart icon"></i>
          <i class="fas fa-home icon"></i>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  min-width: 350px;
}

#nav {
  // background-color: red; //TEMP
  border-top: 2px solid lightgray;
  border-bottom: 2px solid lightgray;
  height: 80px;
  width: 100vw;
  max-width: 100%;
  .nav-content {
    width: 1200px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .nav-logo {
      height: 100%;
      width: 20%;
      display: flex;
      justify-items: center;
      align-items: center;
      img {
        width: 140px;
      }
      &:hover {
        cursor: pointer;
      }
    }
    .nav-search {
      height: 100%;
      width: 40%;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 50%;
        line-height: 20px;
        text-align: center;
        &:focus {
          outline: 1px solid black;
        }
      }
    }
    .nav-likeHomeUser {
      height: 100%;
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      .icon {
        font-size: 18px;
        margin-left: 25px;
        &:hover {
          cursor: pointer;
        }
      }
      .img-profile {
        width: 38px;
        overflow: hidden;
        border-radius: 50%;
        margin-left: 25px;
        img {
          width: 100%;
          border-radius: 50%;
          border: 2px solid lightgray;
        }
        &:hover {
          cursor: pointer;
        }
      }
    }
  }
}
</style>
