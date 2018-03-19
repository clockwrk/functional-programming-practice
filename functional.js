function identityf(x) {
  return function() {
    return x;
  }
}

function add(first, second) {
  return first + second;
}

function sub(first, second) {
  return first - second;
}

function mul(first, second) {
  return first * second;
}

function addf(first) {
  return function(second) {
    return add(first, second);
  }
}

function liftf(func) {
  return function(first) {
    return function(second) {
      return func(first, second);
    }
  }
}

function curry(func, first) {
  return function(second){
    return func(first, second);
  }
}

function inc() {
  return addf(1);
}

function twice(func) {
  return function(first){
    return funct(first, first);
  }
}

function reverse(func) {
  return function(first, second){
    return func(second, first);
  }
}

function composeu(f, g) {
  return function(a) {
    return g(f(a));
  }
}

function composeb(funcOne, funcTwo) {
  return function (first, second, third) {
    return funcTwo(funcOne(first, second),third);
  }
}

function limit(func, times) {
  return function(a, b) {
    if(times > 0) {
        time -= 1;
        return func(a, b);
    }
    return undefined;
  };
}

function from(num) {
  return function () {
    var next  =  num;
    num += 1;
    return next;
  }
}

function to(gen, num ) {
  return function () {
    var value = gen();
    if(value < num) {
      return value;
    }
    return undefined;
  }
}

function fromTo(start, end) {
  return to(from(start), end);
}

function element(array, gen) {
  var gen = gen? gen : fromTo(0, array.length);

  return function() {
    var index = gen();
    if (index !== undefined) {
        return array[index];
    }
  }
}
