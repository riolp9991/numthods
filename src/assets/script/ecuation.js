let evaluar = (x, f) => {
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

  let sqr = this.sqr;
  let fact = this.fact;
  return this.eval(f);
};

export default {
  eval: evaluar
};
