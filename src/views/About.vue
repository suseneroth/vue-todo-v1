<template>
  <div class="about">
   <b-jumbotron class="jumbotron-img" bg-variant="info" text-variant="white">
      <template slot="header">
        <b-container>Filmer som måste ses</b-container>
      </template>
      <template slot="lead">
        <b-container>Lägg till film på listan</b-container>
      </template>
       <b-button class="container-button" type="submit" to="/addtodo">Lägg till film</b-button>
    </b-jumbotron>
    <b-container class="container-about">
      <h1>Om den här appen</h1>
        <p class="about-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam autem blanditiis, officia nobis placeat recusandae dolorem incidunt optio illo qui eius molestiae labore.</p>
        <b-button type="submit" to="/addtodo" class="addtodo-button-about">Lägg till film</b-button>
    </b-container>
  </div>
  
</template>

<style scoped>
  .container-about {
    max-width: 500px;
    background: #e2e2e2;
    padding: 20px;
    border-radius: 5px; 
  }
  .about-text{
    text-align: center;
  }

  .todo-page-heading {
  color: #7A191F;
}

.container-button {
  padding: 10px 10px;
  background: #7A191F;
  border: #7A191F;
}

.container-footer{
  height: 100px;
  width: 100vw;
  background: #7A191F;
  color: #ffffff;
  position: fixed;
  bottom: 0;
}

.addtodo-button-about {
  background: #7A191F;
    border: #7A191F;
    width: 120px;
    height: 35px;
}
</style>