/*
create an array asynchronous if execute too long
arguments:
baseElement: array's every element will be created base on it
length: arrar's length
specificer: an optional function make each element specific from each other, it will be passed current element, current index and array
callback: callback function which will be called when all elements have be handled
*/
function initArrAsync (baseElement, length, specificer, callback) {
  var MAX_EXECUTE_TIME = 30, DELAY = 15;

  var arr = [];

  callback || (callback = specificer);

  function init () {
    var start = Date.now(), elem;
    while (Date.now() - start < MAX_EXECUTE_TIME && arr.length < length) {
      arr.push(deepCloneJSON(baseElement));
      elem = arr[arr.length - 1];
      specificer(elem, arr.length - 1, arr);
    }
    if (arr.length < length) {
      setTimeout(init, DELAY);
    } else {
      callback(arr);
    }
  }
  init();
}


function deepCloneJSON (origin) {
  var basicTypeConstructor, result, prop;

  if (!origin) {
    return origin;
  }

  [Number, String, Boolean].some(function (basicTypeConstructor) {
    if (origin instanceof basicTypeConstructor) {
      result = basicTypeConstructor(origin);
      return true;
    }
  });
  if (result) {
    return result;
  }

  if (Object.prototype.toString.call(origin) === '[object Array]') {
    result = [];
    origin.forEach(function (item, i) {
      result[i] = deepCloneJSON(item);
    });
  } else if (typeof origin === 'object') {
    result = {};
    for (prop in origin) {
      if (origin.hasOwnProperty(prop)) {
        result[prop] = deepCloneJSON(origin[prop]);
      }
    }
  } else {
    result = origin;
  }

  return result;
}

exports.initArrAsync = initArrAsync;
exports.deepCloneJSON = deepCloneJSON;
