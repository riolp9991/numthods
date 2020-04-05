import Vue from "vue";
import Router from "vue-router";

import Home from "@/components/Home";
import RootFind from "@/components/RootFind";
import Ecuaciones from "@/components/HelpEcuation";
import LinearEcuations from "@/components/Linear";
import Component404 from "@/components/404";

Vue.use(Router);

export default new Router({
  mode: "history",
  // * Main Page
  routes: [
    {
      path: "*",
      component: Component404,
    },
    {
      path: "/",
      name: "HelloWorld",
      component: Home,
    },

    // * Bisection Root Finder Method

    {
      path: "/Metodos/Biseccion",
      name: "Bisection",
      component: RootFind,
      props: {
        metodo: "Bisección",
        metodo_Intro:
          "En matemáticas, el método de bisección es un algoritmo de búsqueda de raíces que trabaja dividiendo el intervalo a la mitad y seleccionando el subintervalo que tiene la raíz.",
        metodo_Description:
          "Este es uno de los métodos más sencillos y de fácil intuición para resolver ecuaciones en una variable, también conocido como Método de Intervalo Medio.[1] Se basa en el teorema del valor intermedio (TVI), el cual establece que toda función continua f en un intervalo cerrado [a,b] toma todos los valores que se hallan entre f(a) y f(b). Esto es que todo valor entre f(a) y f(b) es la imagen de al menos un valor en el intervalo [a,b]. En caso de que f(a) y f(b) tengan signos opuestos, el valor cero sería un valor intermedio entre f(j) y f(e), por lo que con certeza existe un p en [a,b] que cumple f(p)=0. De esta forma, se asegura la existencia de al menos una solución de la ecuación f(a)=0.",
      },
    },
    // * Newton Raphson Root Finder Method
    {
      path: "/Metodos/Newton_Raphson",
      name: "Newton_Raphson",
      component: RootFind,
      props: {
        metodo: "Newton Raphson",
        metodo_Intro:
          "En análisis numérico, el método de Newton (conocido también como el método de Newton-Raphson o el método de Newton-Fourier) es un algoritmo para encontrar aproximaciones de los ceros o raíces de una función real. También puede ser usado para encontrar el máximo o mínimo de una función, encontrando los ceros de su primera derivada.",
        metodo_Description:
          "El método de Newton-Raphson es un método abierto, en el sentido de que no está garantizada su convergencia global. La única manera de alcanzar la convergencia es seleccionar un valor inicial lo suficientemente cercano a la raíz buscada. Así, se ha de comenzar la iteración con un valor razonablemente cercano al cero (denominado punto de arranque o valor supuesto). La relativa cercanía del punto inicial a la raíz depende mucho de la naturaleza de la propia función; si ésta presenta múltiples puntos de inflexión o pendientes grandes en el entorno de la raíz, entonces las probabilidades de que el algoritmo diverja aumentan, lo cual exige seleccionar un valor puesto cercano a la raíz. Una vez que se ha hecho esto, el método linealiza la función por la recta tangente en ese valor supuesto. La abscisa en el origen de dicha recta será, según el método, una mejor aproximación de la raíz que el valor anterior. Se realizarán sucesivas iteraciones hasta que el método haya convergido lo suficiente.",
      },
    },
    {
      path: "/Ayuda/Ecuaciones",
      name: "Escrbir Ecuaciones",
      component: Ecuaciones,
    },
    {
      path: "/Metodos/Jacobi",
      name: "Metodo Jacobi",
      component: LinearEcuations,
      props: {
        method: "Jacobi",
        method_introduction:
          "En análisis numérico el método de Jacobi es un método iterativo, usado para resolver sistemas de ecuaciones lineales. El algoritmo toma su nombre del matemático alemán Carl Gustav Jakob Jacobi. El método de Jacobi consiste en usar fórmulas como iteración de punto fijo.",

        method_description:
          "La base del método consiste en construir una sucesión convergente definida iterativamente. El límite de esta sucesión es precisamente la solución del sistema. A efectos prácticos si el algoritmo se detiene después de un número finito de pasos se llega a una aproximación al valor de x de la solución del sistema.",
      },
    },
    {
      path: "/Metodos/Gauss_Seidel",
      name: "Metodo Gauss Seidel",
      component: LinearEcuations,
      props: {
        method: "Gauss Seidel",
        method_introduction:
          "En análisis numérico el método de Gauss-Seidel es un método iterativo utilizado para resolver sistemas de ecuaciones lineales. El método se llama así en honor a los matemáticos alemanes Carl Friedrich Gauss y Philipp Ludwig von Seidel y es similar al método de Jacobi.",

        method_description:
          "Es un método iterativo, lo que significa que se parte de una aproximación inicial y se repite el proceso hasta llegar a una solución con un margen de error tan pequeño como se quiera. Buscamos la solución a un sistema de ecuaciones lineales, en notación matricial.",
      },
    },
  ],
});
