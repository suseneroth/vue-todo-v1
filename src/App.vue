<template>
    <div id="app">
    <div id="nav">
      <router-link to="/">Start</router-link><span class="nav-streck">|</span> 
      <router-link to="/om">Om</router-link><span class="nav-streck">|</span> 
      <router-link to="/addtodo">Lägg till</router-link>
    </div>
    <router-view/>
    
  </div>
</template>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #292424;
}

#nav {
  padding: 30px;
  background: #000000;
  font-size: 1rem
}

.nav-streck {
  color: #e8e8e8;
  margin-left: 10px;
  margin-right: 10px;
}

#nav a {
  font-weight: bold;
  color: #e8e8e8;
}

#nav a.router-link-exact-active {
  color: #ffffff;
}

.jumbotron-img {
  background-image: url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0 95px !important;
  position: relative;
  border-radius: 0 !important;
}

.container-footer{
  height: 20px;
  width: 100vw;
  margin-top: 30px;
  background: #7A191F;
  color: #ffffff;
  z-index: 1;
}

</style>