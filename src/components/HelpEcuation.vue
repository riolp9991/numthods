<template>
  <div class="container content-box">
    <span></span>
    <h1>Como escribir ecuaciónes</h1>
    <span></span>
    <p>
      Para permitir al usuario escribir la ecuación que desee la aplicación analiza el texto introducido por el
      <b>Usuario</b> en busca de la
      <b>x</b> como variable y metodos de la libreria
      <b>Math</b> de
      <b>JavaScript</b>.
      <br />
      <br />A continuación te dejamos los
      <b>operadores</b> y
      <b>palabras claves</b> que puedes usar,
      así como su respectiva funcionalidad.
    </p>
    <span></span>
    <h1>Operadores</h1>
    <span></span>
    <div class="table-container">
      <table class="content-table">
        <thead>
          <tr>
            <th>Operador</th>
            <th>Funcion</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>+</td>
            <td>Suma</td>
          </tr>
          <tr>
            <td>-</td>
            <td>Resta</td>
          </tr>
          <tr>
            <td>*</td>
            <td>Multiplicación</td>
          </tr>
          <tr>
            <td>/</td>
            <td>División</td>
          </tr>
          <tr>
            <td>%</td>
            <td>Residuo de la division</td>
          </tr>
          <tr>
            <td>**</td>
            <td>Potencia</td>
          </tr>
        </tbody>
      </table>
    </div>

    <span></span>
    <h1>Metodos</h1>
    <span></span>
    <div class="table-container">
      <table class="content-table">
        <thead>
          <tr>
            <th>Metodo</th>
            <th>Función</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>sin(x)</td>
            <td>Seno de en ángulo en raduabes "x"</td>
          </tr>
          <tr>
            <td>cos(x)</td>
            <td>Coseno de en ángulo en radianes "x"</td>
          </tr>
          <tr>
            <td>tan(x)</td>
            <td>Tangente del ángulo en radianes</td>
          </tr>
          <tr>
            <td>asin(x)</td>
            <td>Arco seno de "x" en radianes</td>
          </tr>
          <tr>
            <td>acos(x)</td>
            <td>Arco coseno de "x" en radianes</td>
          </tr>
          <tr>
            <td>atan2(x,y)</td>
            <td>Arco tangente del cociente de "x" y "y"</td>
          </tr>
          <tr>
            <td>log(x)</td>
            <td>Logaritmo natural de "x"</td>
          </tr>
          <tr>
            <td>exp(x)</td>
            <td>Exponente base "e" de "x"</td>
          </tr>
          <tr>
            <td>sqrt(x)</td>
            <td>Raíz cuadrada de "x"</td>
          </tr>
          <tr>
            <td>pow(x,y)</td>
            <td>Resultado de elevar "x" a "y"</td>
          </tr>
          <tr>
            <td>abs(x)</td>
            <td>Valor absoluto de "x"</td>
          </tr>
          <tr>
            <td>round(x)</td>
            <td>Valor de "x" redondeado al entero más cercano</td>
          </tr>
          <tr>
            <td>ceil(x)</td>
            <td>Valor de "x" redondeado al entero mayor inmediato</td>
          </tr>
          <tr>
            <td>floor(x)</td>
            <td>Valor de "x" redondeado al entero menor inmediato</td>
          </tr>
          <tr>
            <td>random()</td>
            <td>Número real aleatorio comprendido entre 0 y 1</td>
          </tr>
          <tr>
            <td>sinh(x)</td>
            <td>Seno hiperbolico de "x"</td>
          </tr>
          <tr>
            <td>cosh(x)</td>
            <td>Coseno hiperbolico de "x"</td>
          </tr>
          <tr>
            <td>tanh(x)</td>
            <td>Tangente hiperbolico de "x"</td>
          </tr>
          <tr>
            <td>asinh(x)</td>
            <td>Arco Seno hiperbolico de "x"</td>
          </tr>
          <tr>
            <td>acosh(x)</td>
            <td>Arco coseno hiperbolico de "x"</td>
          </tr>
          <tr>
            <td>atanh(x)</td>
            <td>Arco tangente hiperbolico de "x"</td>
          </tr>
          <tr>
            <td>sqr(x)</td>
            <td>Raíz cuadrada de "x"</td>
          </tr>
          <tr>
            <td>fact(x)</td>
            <td>"Factorial de "x"</td>
          </tr>
          <tr>
            <td>xroot(n,x)</td>
            <td>Raíz enesima de "x"</td>
          </tr>
        </tbody>
      </table>
    </div>
    <span></span>
    <h1>Variables</h1>
    <span></span>
    <div class="table-container">
      <table class="content-table">
        <thead>
          <tr>
            <th>Variable</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>E</td>
            <td>Número de Euler</td>
          </tr>
          <tr>
            <td>LN2</td>
            <td>Logaritmo natural de 2</td>
          </tr>
          <tr>
            <td>LN10</td>
            <td>Logaritmo natural de 10</td>
          </tr>
          <tr>
            <td>LOG2E</td>
            <td>Logaritmo del Número de Euler en base 2</td>
          </tr>
          <tr>
            <td>LOG10E</td>
            <td>Logaritmo del Número de Euler en base 10</td>
          </tr>
          <tr>
            <td>PI</td>
            <td>Número pi</td>
          </tr>
          <tr>
            <td>SQRT1_2</td>
            <td>Raíz cuadrada de 1/2</td>
          </tr>
          <tr>
            <td>SQRT2</td>
            <td>Raíz cuadrada de 2</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
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

.content-box h1 {
  /* color: #fff;
  padding: 15px 20px;
  background: #2c3e50; */
  text-align: left;
  font-size: 30px;
}

.content-box p {
  text-align: justify;
  font-size: 16px;
  line-height: 20px;
}

.content-box span {
  display: block;
  width: 100%;
  background: #d2d6da;
  margin: 30px auto;
  box-sizing: border-box;
  height: 1px;
}
</style>