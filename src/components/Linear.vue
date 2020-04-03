<template>
  <div class="container method">
    <h1>Metodo de {{method}}</h1>
    <span></span>
    <p>
      <b>Introducción:</b>
      {{method_introduction}}
    </p>
    <p>
      <b>Descripción:</b>
      {{method_description}}
    </p>

    <form class="form-box" v-on:submit="calculate_result">
      <div class="helper">
        <span></span>
        <label>Introduce las ecuaciones</label>
        <p>
          Para cálcular la solución es necesario que introdusca la matriz extendida de la ecuacion con los valores separados por espacios.
          <br />Puede añadir la cantidad de ecuaciones que desee siempre i tanto sea un sistema de ecuaciones cuadratico o sea
          <b>(3 Ecuaciones y 3 Variables)</b>.
        </p>
        <span></span>
      </div>
      <input
        type="text"
        v-for="(linea, idx) in array_of_strings"
        v-bind:key="idx"
        v-on:keyDown="get_key()"
        :placeholder="'Ecuación: ' + (idx + 1)"
        v-model="array_of_strings[idx]"
      />
      <button type="button" class="btn_extra" v-on:click="add_ecuation">Añadir Ecuación</button>
      <button type="button" class="btn_extra" v-on:click="remove_ecuation">Eliminar Ecuación</button>
      <button type="button" class="btn_extra" v-on:click="reset_ecuations">Reestablecer Ecuaciones</button>
      <span></span>
      <div class="helper">
        <label>Calcular Solución</label>
      </div>
      <button type="submit">Calcular</button>
    </form>

    <p>{{extended_matrix}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      array_of_strings: ["", "", ""]
    };
  },
  methods: {
    calculate_result() {
      if (this.method == "Jacobi") {
        console.log(this.calculate_jacobi);
      }
    },
    add_ecuation() {
      this.array_of_strings.push("");
    },
    remove_ecuation() {
      this.array_of_strings.pop();
    },
    reset_ecuations() {
      this.array_of_strings = ["", "", ""];
    },
    get_key(e) {
      cosole.console.log(e);
    },
    calculate_jacobi(x, err, li) {}
  },
  computed: {
    extended_matrix() {
      let result_matrix = [];
      let current_matrix_element = [];
      let current_line;
      for (const iterator of this.array_of_strings) {
        current_line = iterator.split(" ");
        current_matrix_element = [];
        for (const element of current_line) {
          current_matrix_element.push(parseFloat(element));
        }
        result_matrix.push(current_matrix_element);
      }
      return result_matrix;
    }
  },
  props: {
    method: {
      type: String,
      default: "Bisection"
    },
    method_introduction: {
      type: String,
      default: "No tiene Introducción"
    },
    method_description: {
      type: String,
      default: "No tiene Descripción"
    }
  }
};
</script>

<style>
@import url("../assets/styles/forms.css");
@import url("../assets/styles/tables.css");

.container {
  width: 100%;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  box-sizing: border-box;
  text-align: left;
  margin-bottom: 30px;
}

.method h1 {
  text-align: left;
  font-size: 30px;
}

.method p {
  text-align: justify;
  font-size: 16px;
  line-height: 20px;
}

.method span {
  display: block;
  width: 100%;
  background: #d2d6da;
  margin: 30px auto;
  box-sizing: border-box;
  height: 1px;
}

.hidden {
  display: none;
}

.method .btn_extra {
  border-radius: 0;
  padding: 10px;
  background: #42b983;
  color: #fff;
  border: none;
}

@media (max-width: 650px) {
  .method .btn_extra {
    display: block;
    margin-bottom: 2px;
    width: 100%;
  }
}
</style>