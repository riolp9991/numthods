<template>
  <div id="welcome">
    <img src="../assets/numthods.png" width="120px" alt />
    <h1>Numthods!</h1>
    <h2>
      Una aplicación
      <br />Para Resolver Problemas Mátemáticos
    </h2>
    <div class="links">
      <!-- <a href="#">Leer Más</a> -->
      <a href="#" class="active">Descargar apk</a>
    </div>

    <section>
      <div class="container">
        <p>
          <b>Numthods!</b> es una aplicación creada utilizando el framework:
          <b>Vue.js</b> de
          <b>JavaScript</b>, que ayuda al usuario a resolver problemas mátemáticos de forma rápida y sencilla.
          <br />
          <br />
          <b>Para empesar a usar:</b> dirijete a la parte superior en la pestaña de
          <b>Metodos</b> para resolver algun ejercicio o si lo deseas puedes descargar nuestra
          <a
            href="#"
          >Aplicacion</a> para dispositivos
          <b>android</b> creada utilizando el framework
          <b>Xamarin</b>.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style>
#welcome h1 {
  margin-top: 50px;
  font-family: Arial;
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 35px;
  color: #35495e;
}

#welcome h2 {
  font-family: Arial;
  padding: 10px;
  font-size: 20px;
  margin: auto;
  margin-bottom: 10px;
  color: #297373ea;
  font-weight: 300;
}

#welcome .links {
  margin-top: 15px;
  padding: 15px;
}

#welcome section {
  background: rgb(250, 250, 250);
  padding: 30px;
  margin-top: 30px;
}

#welcome .links a {
  display: inline;
  text-decoration: none;
  padding: 10px 30px;
  background: #fff;
  border: 2px solid #42b983;
  border-radius: 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  font-family: Arial;
  color: #42b983;
}

#welcome .links a.active {
  background: #42b983;
  color: #fff;
}

#welcome p {
  font-family: Arial;
  text-align: left;
  font-size: 20px;
  padding: 0 20px;
}

#welcome p a {
  text-decoration: none;
  color: #42b983;
}

#welcome {
  margin-top: 100px;
}

@media (max-width: 680px) {
  #welcome section {
    padding: 30px 10px;
  }
}
</style>