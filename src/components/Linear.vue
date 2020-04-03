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

    <form class="form-box" v-on:submit.prevent="calculate_result">
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
        <p>Completa los datos para determinar la solución del problema</p>
      </div>
      <span></span>
      <div class="helper">
        <label for>Margen de error</label>
        <p>El máximo valor de error permitido para la solución.</p>
      </div>
      <input type="number" placeholder="Margen de error" step="any" v-model="error_margin" />
      <div class="helper">
        <label for>Limite de operaciones</label>
        <p>El limite de operaciones para determinar la solución.</p>
      </div>
      <input type="number" placeholder="Limite de operaciones" v-model="operations_limit" />
      <button type="submit">Calcular</button>
    </form>
    <span></span>
    <h1>Solución</h1>
    <div v-for="(valor, idx) in result" v-bind:key="idx">
      <label class="result_label">Variable {{idx + 1}} : {{valor}}</label>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      array_of_strings: ["", "", ""],
      result: null,
      error_margin: 0.005,
      operations_limit: 300,
      toast: Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false
      })
    };
  },
  methods: {
    calculate_result() {
      if (this.method == "Jacobi") {
        try {
          let result = this.calculate_jacobi(
            this.extended_matrix,
            null,
            this.error_margin,
            this.operations_limit
          );
          console.log(result);
          for (const iterator of result) {
            if (isNaN(iterator) || iterator == null) {
              throw new Error("No hemos encontrado la solución.");
            }
          }
          this.toast.fire({
            icon: "success",
            title: "Calculado."
          });
        } catch (e) {
          this.result = null;
          this.toast.fire({
            icon: "error",
            title: e
          });
        }
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
    calculate_gauss_seidel(a, x, err, li) {},
    calculate_jacobi(a, x, err, li) {
      let i,
        j,
        aux,
        t,
        s,
        n = a.length,
        y = new Array(n);
      let c = 0;

      if (x == null) {
        x = new Array(n);
        for (i = 0; i < n; i++) {
          x[i] = 0;
        }
      }
      while (true) {
        for (i = 0; i < n; i++) {
          for (s = 0, j = 0; j < n; j++) {
            s += i != j ? a[i][j] * x[j] : 0;
          }
          y[i] = (a[i][n] - s) / a[i][i];
        }
        for (t = 1, i = 0; i < n; i++) {
          if (y[i]) {
            if (Math.abs(x[i] / y[i] - 1) > err) {
              t = 0;
              break;
            }
          }
        }
        if (t) {
          this.result = y;
          return y;
        }
        for (t = 1, i = 0; i < n; i++) {
          for (s = 0, j = 0; j < n; j++) {
            s += a[i][j] * y[j];
          }
          if (Math.abs(a[i][n] - s) > err) {
            t = 0;
            break;
          }
        }
        if (t) {
          this.result = y;
          return y;
        }
        if (c++ == li) throw new Error("Limite de pasos exedido");
        aux = x;
        x = y;
        y = aux;
      }
    }
  },
  computed: {
    extended_matrix() {
      let result_matrix = [];
      let current_matrix_element = [];
      let current_line;
      for (const iterator of this.array_of_strings) {
        current_line = iterator.trim().split(" ");
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

.method label.result_label {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
}

@media (max-width: 650px) {
  .method .btn_extra {
    display: block;
    margin-bottom: 2px;
    width: 100%;
  }
}
</style>