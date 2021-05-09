<template>
  <div id="app">
    <div id="nav">
      <div class="nav-content">

          <div class="nav-logo">
              <img src="./assets/logo.png" alt="">
          </div>
          
          <div class="nav-search">
            <input id="serach" type="text" placeholder="Cerca">
          </div>
          <div class="nav-likeHomeUser">

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
      width: 30%;
      display: flex;
      justify-items: center;
      align-items: center;
      img {
        width: 140px;
      }
    }
    .nav-search {
      height: 100%;
      width: 30%;
      display: flex;
      justify-content: center;
      align-items: center;
      input {
        width: 50%;
        line-height: 20px;
        text-align: center;
      }
    }
    .nav-likeHomeUser {
      height: 100%;
      width: 30%;
      background-color: gray; //TEMP
    }
  }
  
}

</style>
