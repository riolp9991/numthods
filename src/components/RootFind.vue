<template>
    <div class="container method">
        <h1>Metodo de {{metodo}}</h1>
        <span></span>
        <p>
            <b>Introducción:</b>
            {{metodo_Intro}}
        </p>
        <p>
            <b>Descripción:</b>
            {{metodo_Description}}
        </p>
        <span></span>

        <form v-on:submit.prevent="calculate" class="form-box">
            <div class="helper">
                <label>Introduce la ecuación</label>
                <p>
                    Genera una ecuación siguiendo estos
                    <router-link to="/Ayuda/Ecuaciones/">pasos</router-link>
                </p>
            </div>
            <input
                type="text"
                :class="get_alert_ecuation"
                v-model="ecuation"
                name="Ecuation"
                placeholder="Ecuación"
            />
            <label class="input-msg" :class="get_alert_ecuation">{{ ecuation_solution }}</label>
            <span></span>
            <div class="helper">
                <label>Calcular intervalo de solución</label>
                <p>
                    Rellena los campos para calcular el intervalo en el que se encuentra
                    la solución,
                    <b>ATENCIÓN</b> el intervalo se buscará desde donde inicie en
                    adelante, no mirará valores inferiores. Además, tiene establecido un
                    límite de
                    <b>130</b> iteraciones para mantener una experiencia rápida
                    y agradable.
                    <br />
                    <br />
                    <b>Nota:</b> Al calcular el intervalo de solución aparecerá una notificación y se
                    llenarán automáticamente los campos necesarios para calcular la solución.
                </p>
            </div>
            <span></span>
            <div class="helper">
                <label>Inicio de la búsqueda</label>
                <p>Introduce desde donde se empezará a buscar el intervalo de solución.</p>
            </div>
            <input
                type="number"
                step="any"
                name="interval_search_start"
                v-model="search_i_start_string"
                placeholder="Inicio de la búsqueda"
            />

            <div class="helper">
                <label>Longitud del intervalo</label>
                <p>Introduce el tamaño del intervalo de solución que desea calcular.</p>
            </div>
            <input
                type="number"
                step="any"
                name="interval_search_length"
                v-model="search_i_lenght_string"
                placeholder="Longitud del intervalo"
            />

            <button v-on:click="calculate_interval" type="button">Calcular Intervalo</button>
            <span></span>
            <div class="helper">
                <label>Para calcular la solución</label>
                <p>
                    Para calcular la solución sin problemas se ha establecido el número
                    máximo de iteraciones a 300 para así evitar un mal funcionamiento de
                    la aplicación, o una demora excesiva a la hora de determinar la
                    solución.
                </p>
            </div>
            <span></span>

            <div class="helper">
                <label>Inicio del Intervalo</label>
                <p>Introduce el inicio del intervalo de solución.</p>
            </div>
            <input
                type="number"
                step="any"
                v-model="interval_start"
                placeholder="Inicio del intervalo"
            />

            <div class="helper">
                <label>Final del Intervalo</label>
                <p>Introduce el final del intervalo de solución.</p>
            </div>
            <input
                type="number"
                step="any"
                v-model="interval_end"
                placeholder="Final del intervalo"
            />

            <div class="helper">
                <label>Margen de Error</label>
                <p>
                    Introduce el máximo valor de
                    <b>Error</b> permitido.
                </p>
            </div>
            <input type="number" step="any" v-model="solution_error" placeholder="Margen de error" />

            <div class="helper">
                <label>Aproximación Inicial</label>
                <p>El valor de aproximación inicial.</p>
            </div>

            <div :class="hide_Newton" class="range">
                <div class="range-value">
                    <center>
                        <label>{{newtonr_slide_value}}</label>
                    </center>
                </div>

                <input
                    class="slider"
                    type="range"
                    :min="interval_start"
                    :max="interval_end"
                    v-model="newtonr_slide_value"
                    name
                    step="0.1"
                    id
                />
            </div>

            <button type="submit">Calcular la solución</button>
        </form>

        <span></span>
        <h1>Solución</h1>
        <p>
            <b>Resultado: {{bisection_solution}}</b>
        </p>
        <p>
            <b>Margen de error: {{solution_error_finish}}</b>
        </p>
        <p>
            <b>Número de operaciones: {{operations}}</b>
        </p>
        <span></span>
        <div :class="hide_Bisection" class="table-container">
            <table class="content-table">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>a</th>
                        <th>b</th>
                        <th>Xn</th>
                        <th>E(xn)</th>
                        <th>F(Xn)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, idx) in tasks" v-bind:key="idx">
                        <td>{{task.n}}</td>
                        <td>{{task.a}}</td>
                        <td>{{task.b}}</td>
                        <td>{{task.Xn}}</td>
                        <td>{{task.Exn}}</td>
                        <td>{{task.Fxn}}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div :class="hide_Newton" class="table-container">
            <table class="content-table">
                <thead>
                    <tr>
                        <th>n</th>
                        <th>F(Xn-1)</th>
                        <th>F¹(Xn-1)</th>
                        <th>Xn</th>
                        <th>Err(xn)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(task, idx) in tasks_newton_raphson_method" v-bind:key="idx">
                        <td>{{task.n}}</td>
                        <td>{{task.Fxn}}</td>
                        <td>{{task.F1xn}}</td>
                        <td>{{task.Xn}}</td>
                        <td>{{task.Exn}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import Swal from "sweetalert2";

const Toast = Swal.mixin();

export default {
    props: {
        metodo: {
            type: String,
            default: "Bisection"
        },
        metodo_Intro: {
            type: String,
            default: "No tiene Introducción"
        },
        metodo_Description: {
            type: String,
            default: "No tiene Descripción"
        }
    },
    data() {
        return {
            toast: Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: false
            }),
            ecuation: null,
            ecuation_solution: null,
            x_value: null,
            is_calculable: false,
            search_i_start_string: null,
            search_i_lenght_string: null,
            interval_start: null,
            interval_end: null,
            solution_error: 0.005,
            solution_error_finish: null,
            operations: null,
            bisection_solution: null,
            newtonr_slide_value: null,
            tasks: [],
            tasks_newton_raphson_method: [],
            new_task: {}
        };
    },
    methods: {
        calculate() {
            if (this.metodo == "Bisección") {
                if (
                    this.ecuation == null ||
                    this.ecuation == "" ||
                    this.interval_start == null ||
                    this.interval_end == null
                ) {
                    this.toast.fire({
                        icon: "error",
                        title: "Datos faltantes."
                    });
                } else {
                    try {
                        this.bisection(
                            this.evaluar,
                            parseFloat(this.interval_start),
                            parseFloat(this.interval_end),
                            parseFloat(this.solution_error),
                            130
                        );
                        this.toast.fire({
                            icon: "success",
                            title: "Calculado"
                        });
                    } catch (e) {
                        this.toast.fire({ icon: "error", title: e });
                        this.solution_error_finish = null;
                        this.bisection_solution = null;
                        this.operations = [];
                        this.new_task = {};
                        this.tasks = [];
                    }
                }
            } else {
                if (
                    this.ecuation == null ||
                    this.ecuation == "" ||
                    this.interval_start == null ||
                    this.interval_end == null
                ) {
                    this.toast.fire({
                        icon: "error",
                        title: "Datos faltantes."
                    });
                } else {
                    try {
                        this.newton_raphson_method(
                            this.evaluar,
                            parseFloat(this.newtonr_slide_value),
                            parseFloat(this.solution_error),
                            300
                        );
                        this.toast.fire({
                            icon: "success",
                            title: "Calculado"
                        });
                    } catch (e) {
                        this.toast.fire({ icon: "error", title: e });
                        this.solution_error_finish = null;
                        this.bisection_solution = null;
                        this.operations = null;
                        this.new_task = {};
                        this.tasks_newton_raphson_method = [];
                    }
                }
            }
        },
        bisection(f, x1, x2, err, li) {
            this.solution_error_finish = null;
            this.bisection_solution = null;
            this.operations = [];
            this.new_task = {};
            this.tasks = [];
            let c = 1,
                y1 = f(x1),
                xp = x1,
                x3,
                y3;
            while (true) {
                this.new_task = {
                    n: c,
                    a: x1,
                    b: x2,
                    Xn: (x1 + x2) / 2,
                    Exn: (x2 - x1) / 2,
                    Fxn: this.evaluar((x1 + x2) / 2)
                };
                this.tasks.push(this.new_task);
                x3 = (x1 + x2) / 2;
                if (Math.abs(xp / x3 - 1) < err) {
                    this.bisection_solution = x3;
                    this.solution_error_finish = Math.abs(xp / x3 - 1);
                    this.operations = c;
                    return x3;
                }
                y3 = f(x3);
                if (Math.abs(y3) < err) {
                    this.bisection_solution = x3;
                    this.solution_error_finish = Math.abs(y3);
                    this.operations = c;
                    return x3;
                }
                if (c++ == li) throw new Error("Limite de pasos exedido");
                if (y1 * y3 < 0) x2 = x3;
                else x1 = x3;
                xp = x3;
            }
        },
        newton_raphson_method(f, x1, err, li) {
            this.tasks_newton_raphson_method = [];
            let c = 0,
                y1,
                h,
                dy,
                x2;
            let previous = 0;
            while (true) {
                if (c == 0) {
                    this.new_task = {
                        n: c,
                        Fxn: "---",
                        F1xn: "---",
                        Xn: x1,
                        Exn: "---"
                    };
                    this.tasks_newton_raphson_method.push(this.new_task);
                } else {
                    this.new_task = {
                        n: c,
                        Fxn: y1,
                        F1xn: dy,
                        Xn: x1,
                        Exn: Math.abs(x1 - previous)
                    };
                    this.tasks_newton_raphson_method.push(this.new_task);
                }
                y1 = f(x1);
                if (Math.abs(y1) < err) {
                    this.bisection_solution = x1;
                    this.solution_error_finish = Math.abs(x1 - previous);
                    this.operations = c;
                    return y1;
                }
                h = x1 * 1e-6;
                dy = (f(x1 + h) - f(x1 - h)) / (2 * h);
                x2 = x1 - y1 / dy;
                if (Math.abs(x1 / x2 - 1) < err) {
                    this.bisection_solution = x1;
                    this.solution_error_finish = Math.abs(x1 - previous);
                    this.operations = c;
                    return x2;
                }
                if (c++ == li) {
                    throw new Error("Limite de operaciones excedido");
                }
                previous = x1;
                x1 = x2;
            }
        },
        calculate_interval() {
            if (this.is_calculable) {
                try {
                    let solution_array = this.increment(
                        this.eval_function,
                        this.search_i_start,
                        this.search_i_lenght,
                        130
                    );

                    this.interval_start = solution_array[0];
                    this.interval_end = solution_array[1];
                    this.newtonr_slide_value =
                        (solution_array[0] + solution_array[1]) / 2;
                    this.toast.fire({
                        icon: "success",
                        title:
                            "Calculado: " +
                            "[" +
                            solution_array[0] +
                            "," +
                            solution_array[1] +
                            "]"
                    });
                } catch (e) {
                    console.log(e);
                    this.toast.fire({
                        icon: "error",
                        title: e
                    });
                }
            } else {
                this.toast.fire({
                    icon: "error",
                    title: "Función Incorrecta."
                });
            }
        },
        eval_function(valor_x, calculable = true) {
            if (calculable) {
                try {
                    let x = parseFloat(valor_x);
                    return this.evaluar(x);
                } catch (e) {
                    throw new Error(e);
                }
            } else {
                throw new Error("La ecuación no es calculable.");
            }
        },
        increment(f, x, dx, li) {
            let c = 1,
                f1 = f(x),
                f2;
            while (true) {
                x += dx;
                f2 = f(x);
                if (f1 * f2 < 0) return [x - dx, x];
                if (c++ == li) throw new Error("Limite de operaciones exedido");
            }
        },
        sqr(x) {
            return x * x;
        },
        fact(x) {
            let solucion = 0;
            while (x > 0) {
                solucion += x--;
            }
            return solucion;
        },
        xroot(n, x) {
            return Math.pow(x, 1 / n);
        },
        evaluar(x) {
            let sin = Math.sin;
            let cos = Math.cos;
            let tan = Math.tan;
            let asin = Math.asin;
            let acos = Math.acos;
            let atan = Math.atan;
            let atan2 = Math.atan2;
            let log = Math.log;
            let exp = Math.exp;
            let sqrt = Math.sqrt;
            let pow = Math.pow;
            let abs = Math.abs;
            let ceil = Math.ceil;
            let floor = Math.floor;
            let random = Math.random;
            let sinh = Math.sinh;
            let cosh = Math.cosh;
            let tanh = Math.tanh;
            let asinh = Math.asinh;
            let acosh = Math.acosh;
            let atanh = Math.atanh;
            let E = Math.E;
            let LN2 = Math.LN2;
            let LOG2E = Math.LOG2E;
            let LOG10E = Math.LOG10E;
            let PI = Math.PI;
            let SQRT1_2 = Math.SQRT1_2;
            let SQRT2 = Math.SQRT2;
            let sign = Math.sign;
            let cbrt = Math.cbrt;
            let xroot = this.xroot;
            let sqr = this.sqr;
            let fact = this.fact;

            return eval(this.ecuation);
        }
    },
    computed: {
        hide_Newton() {
            if (this.metodo !== "Newton Raphson") {
                return "hidden";
            } else {
                return "";
            }
        },
        hide_Bisection() {
            if (this.metodo !== "Bisección") {
                return "hidden";
            } else {
                return "";
            }
        },
        evaluar_funcion() {
            try {
                let x = -0.1;
                if (!value) x = 0.1;
                let resultado;

                resultado = this.evaluar(x);
                console.log(!isNaN(resultado));

                return resultado;
            } catch (e) {
                return "alert";
            }
        },
        search_i_start() {
            return parseFloat(this.search_i_start_string);
        },
        search_i_lenght() {
            return parseFloat(this.search_i_lenght_string);
        },
        get_alert_ecuation() {
            try {
                this.is_calculable = false;
                let valor = this.evaluar(-0.1);
                if (
                    (isNaN(valor) ||
                        valor == Infinity ||
                        valor == Infinity * -1) &&
                    this.ecuation !== ""
                ) {
                    valor = this.evaluar(0.1);
                    if (
                        (isNaN(valor) ||
                            valor == Infinity ||
                            valor == Infinity * -1) &&
                        this.ecuation != ""
                    ) {
                        this.ecuation_solution = "No se puede calcular";
                        this.is_calculable = false;
                        return "alert";
                    }

                    this.ecuation_solution = "Solo para valores positivos";
                    this.is_calculable = true;
                    return "warning";
                } else if (this.ecuation == null) {
                    this.ecuation_solution = "";
                    this.is_calculable = false;
                    return "";
                } else {
                    this.ecuation_solution = "";
                    this.is_calculable = true;
                    return "";
                }
            } catch (e) {
                this.ecuation_solution = "No se puede calcular";
                this.is_calculable = false;
                return "alert";
            }
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
</style>
