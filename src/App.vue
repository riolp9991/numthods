<template>
  <div>
    <nav>
      <router-link id="logo" to="/">Numthods!</router-link>

      <!-- <div id="logo">Numthods!</div> -->
      <label for="drop" class="toggle" v-on:click="togle_sidebar()" id="main-toggle">
        <span class="nav-icon"></span>
      </label>
      <input type="checkbox" id="drop" />
      <ul class="menu">
        <li>
          <router-link to="/">Inicio</router-link>
        </li>
        <li>
          <label for="drop-1" class="toggle">Metodos</label>
          <a href="#">Metodos</a>
          <input type="checkbox" id="drop-1" />
          <ul>
            <h2>Busqueda de Raíz</h2>
            <li>
              <router-link to="/Metodos/Biseccion">Bisección</router-link>
            </li>
            <li>
              <router-link to="/Metodos/Newton_Raphson" v-on:click="togle_sidebar()">Newton Raphson</router-link>
            </li>
            <span></span>
            <h2>Resolver Ecuación</h2>
            <li>
              <router-link to="/Metodos/Jacobi">Jacobi</router-link>
            </li>
            <li>
              <a href="#">Seidel</a>
            </li>
            <span></span>
            <h2>Interpolación</h2>
            <li>
              <a href="#">Lagrange</a>
            </li>
            <li>
              <a href="#">Gauss</a>
            </li>
          </ul>
        </li>

        <li>
          <a href="#">Acerca de</a>
        </li>
      </ul>
    </nav>
    <div class="sidebar" :class="sidebar_active">
      <div class="middle">
        <div class="menu">
          <router-link v-on:click="togle_sidebar()" to="/">
            <img src="./assets/numthods.png" alt />
          </router-link>
          <li class="item">
            <router-link to="/" class="btn" v-on:click="togle_sidebar()">Inicio</router-link>
          </li>
          <li class="item" id="methods">
            <a :href="methods_word" v-on:click="togle_methods()" class="btn">Metodos</a>
            <div class="smenu">
              <label>Busqueda de Raíz</label>
              <router-link to="/Metodos/Biseccion" v-on:click="togle_sidebar()">Bisección</router-link>
              <router-link to="/Metodos/Newton_Raphson" v-on:click="togle_sidebar()">Newton Raphson</router-link>
              <span></span>
              <label>Resolver Ecuación</label>
              <router-link to="/Metodos/Jacobi" v-on:click="togle_sidebar()">Jacobi</router-link>
              <a href="#">Seidel</a>
              <span></span>
              <label>Busqueda de Raíz</label>
              <a href="#">Lagrange</a>
              <a href="#">Gauss</a>
              <span></span>
            </div>
          </li>
          <li class="item">
            <a href="#" class="btn">Acerca de</a>
          </li>
        </div>
      </div>
    </div>
    <div class="back" v-on:click="togle_sidebar()"></div>

    <div id="app">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      sidebar_active: "",
      methods_word: "#"
    };
  },
  methods: {
    togle_sidebar() {
      if (this.sidebar_active == "active") {
        this.sidebar_active = "";
      } else {
        this.sidebar_active = "active";
      }
    },
    togle_methods() {
      if (this.methods_word == "#methods") {
        this.methods_word = "#";
      } else {
        this.methods_word = "#methods";
      }
    }
  }
};
</script>

<style>
@import url("./assets/styles/menu.css");
@import url("./assets/styles/sidebar.css");
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}

.container {
  max-width: 1000px;
  margin-left: auto;
  margin-right: auto;
}

.sidebar a {
  font-size: 15px;
}

::selection {
  background: #42b983;
  color: #fff;
}

@media (max-width: 768px) {
  ul.menu {
    display: none;
  }

  [id^="drop"]:checked + ul {
    display: none;
    background: none;
  }
}
</style>
