<template>
  <div class="container about">
    <h1>Numthods</h1>
    <p>
      <b>Numthods</b> es una simple aplicación web que ayuda al usuario a resolver problemas matematicos a traves de metodos numericos.
      <br />Esta ha sido creada utilizando el framework de
      <b>JavaScript</b>:
      <b>Vue.js</b> para brindar al usuario una experiencia más limpia y rápida.
      <br />
      <br />
      <b>SPA</b>: Numthods es una SPA(Single Page Aplication) traducido al español como
      <b>Aplicación de una sola página</b>.
      <br />
      <br />
      <b>¿Qué significa esto?</b>
      Como el nombre indica funciona en una sola página lo que elimina el tener que recargar el navegador cada ves que queremos dirigirnos a otra ubicación dentro del sitio. Una ves hecha la carga inical no tendras que volverte a preocupar por esperar, a no ser que actualices manualmente la pestaña del navegador.
    </p>
    <span></span>
    <h2>¿Por que Numthods?</h2>
    <p>
      <b>Numthods</b> es el acronimo de las palabras en
      <b>Ingles</b>
      <b>Numeric</b> &
      <b>Methods</b>, que en
      <b>Español</b> juntas significan metodos numéricos
    </p>
    <span></span>

    <div class="others">
      <div class="github-holder">
        <img src="../assets/github.png" alt />
        <a href>
          <h3>Numthods en GitHub</h3>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.about {
  text-align: justify;
}

.about span {
  display: block;
  width: 100%;
  background: #d8d9da;
  margin: 30px auto;
  box-sizing: border-box;
  height: 1px;
}

.about .others .github-holder {
  display: flex;
  align-content: center;
  justify-content: center;
}

.about .others .github-holder img {
  display: inline-block;
  height: 40px;
}

.about .others .github-holder a {
  display: inline-block;
  font-size: 20px;
  text-decoration: none;
  transition: ease-in-out 0.5s;
}
.about .others .github-holder a:hover {
  color: #42b983;
}

.about .others .github-holder a h3 {
  line-height: 40px;
  padding: 0;
  margin: 0;
}

.about p {
  font-size: 16px;
  line-height: 19px;
  text-align: justify;
}
</style>