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

    <span></span>
    <form class="form-box" v-on:submit.prevent="calculate">
      <div class="helper">
        <label>Valores de x</label>
        <p>Introduce los valores de x separados por un espacio y sin repetirse</p>
      </div>
      <input type="text" v-model="values_of_x" placeholder="Valores de x" name id />
      <div class="helper">
        <label>Valores de y</label>
        <p>Introduce los valores de y separados por un espacio</p>
      </div>
      <input type="text" v-model="values_of_y" placeholder="Valores de y" name id />
      <div class="helper">
        <label>Valor a interpolar</label>
        <p>Introduce el valor que deseas interpolar</p>
      </div>
      <input
        type="number"
        v-model="value_to_interpolate"
        step="any"
        placeholder="Valor a interpolar"
        name
        id
      />

      <button type="submit">Calcular</button>
    </form>
    <span></span>
    <h1>Solición</h1>
    <span></span>
    <h4>El resultado de la interpolación es: {{value_of_result}}</h4>
  </div>
</template>

<script>
import Swal from "sweetalert2";

export default {
  data() {
    return {
      values_of_x: null,
      values_of_y: null,
      value_to_interpolate: null,
      value_of_result: null,
      toast: Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: false
      })
    };
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
  },
  methods: {
    calculate() {
      if (this.value_to_interpolate != null) {
        try {
          if (this.method == "Lagrange") {
            let res = this.lagrange_interpolation(
              this.array_of_x,
              this.array_of_y,
              this.value_to_interpolate
            );
          } else if (this.method == "Newton") {
            let res = this.newton_interpolation(
              this.array_of_x,
              this.array_of_y,
              this.value_to_interpolate
            );
          }
          this.toast.fire({
            icon: "success",
            title: "Calculado correctamente"
          });
        } catch (error) {
          this.toast.fire({
            icon: "error",
            title: "No se ha podido calcular"
          });
          this.value_of_result = null;
        }
      }
    },
    newton_interpolation(vx, vy, x) {
      let k,
        i,
        n = vx.length,
        p,
        y,
        f,
        b;
      f = [...vy];
      b = new Array(n);

      for (k = 0; k < n - 1; k++) {
        b[k] = f[0];
        for (i = 0; i < n - k - 1; i++)
          f[i] = (f[i + 1] - f[i]) / (vx[i + k + 1] - vx[i]);
      }

      b[n - 1] = f[0];
      p = 1;
      y = b[0];
      for (k = 1; k < n; k++) {
        p *= x - vx[k - 1];
        y += b[k] * p;
      }

      this.value_of_result = y;
      return y;
    },
    lagrange_interpolation(vx, vy, x) {
      let k,
        i,
        n = vx.length;
      let q = new Array(n),
        p = new Array(n),
        l = new Array(n),
        y = 0;
      for (k = 0; k < n; k++) {
        q[k] = 1;
        for (i = 0; i < n; i++) {
          q[k] *= i != k ? vx[k] - vx[i] : 1;
        }
      }
      for (k = 0; k < n; k++) {
        p[k] = 1;
        for (i = 0; i < n; i++) p[k] *= i != k ? x - vx[i] : 1;
      }

      for (k = 0; k < n; k++) l[k] = p[k] / q[k];
      for (k = 0; k < n; k++) y += vy[k] * l[k];
      this.value_of_result = y;
      return y;
    }
  },
  computed: {
    array_of_x() {
      if (this.values_of_x != null) {
        let array_result = new Array();
        let separate_array_string = this.values_of_x.trim().split(" ");
        for (const iterator of separate_array_string) {
          let value_float = parseFloat(iterator);
          if (!isNaN(value_float)) array_result.push(value_float);
        }
        return array_result;
      } else {
        return null;
      }
    },
    array_of_y() {
      if (this.values_of_y != null) {
        let array_result = new Array();
        let separate_array_string = this.values_of_y.trim().split(" ");
        for (const iterator of separate_array_string) {
          let value_float = parseFloat(iterator);
          if (!isNaN(value_float)) array_result.push(value_float);
        }
        return array_result;
      } else {
        return null;
      }
    },
    interpolate_value_on_float() {
      return parseFloat(this.value_to_interpolate);
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
  font-size: 18px;
  line-height: 25px;
  display: block;
  margin-bottom: 19px;
  color: #187c51;
}

@media (max-width: 650px) {
  .method .btn_extra {
    display: block;
    margin-bottom: 2px;
    width: 100%;
  }
}
</style>