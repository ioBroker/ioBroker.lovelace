(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~ad2d78d9"],{

/***/ "./node_modules/superstruct/lib/index.es.js":
/*!**************************************************!*\
  !*** ./node_modules/superstruct/lib/index.es.js ***!
  \**************************************************/
/*! exports provided: struct, superstruct, isStruct, StructError */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superstruct", function() { return superstruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isStruct", function() { return isStruct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StructError", function() { return StructError; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
 * Define a struct error.
 *
 * @type {StructError}
 */
var StructError =
/*#__PURE__*/
function (_TypeError) {
  _inherits(StructError, _TypeError);

  _createClass(StructError, null, [{
    key: "format",
    value: function format(attrs) {
      var type = attrs.type,
          path = attrs.path,
          value = attrs.value;
      var message = "Expected a value of type `".concat(type, "`").concat(path.length ? " for `".concat(path.join('.'), "`") : '', " but received `").concat(JSON.stringify(value), "`.");
      return message;
    }
  }]);

  function StructError(attrs) {
    var _this;

    _classCallCheck(this, StructError);

    var message = StructError.format(attrs);
    _this = _possibleConstructorReturn(this, _getPrototypeOf(StructError).call(this, message));
    var data = attrs.data,
        path = attrs.path,
        value = attrs.value,
        reason = attrs.reason,
        type = attrs.type,
        _attrs$errors = attrs.errors,
        errors = _attrs$errors === void 0 ? [] : _attrs$errors;
    _this.data = data;
    _this.path = path;
    _this.value = value;
    _this.reason = reason;
    _this.type = type;
    _this.errors = errors;

    if (!errors.length) {
      errors.push(_assertThisInitialized(_this));
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), _this.constructor);
    } else {
      _this.stack = new Error().stack;
    }

    return _this;
  }

  return StructError;
}(_wrapNativeSuper(TypeError));

var toString = Object.prototype.toString;

var kindOf = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';

  var type = _typeof(val);

  if (type === 'boolean') return 'boolean';
  if (type === 'string') return 'string';
  if (type === 'number') return 'number';
  if (type === 'symbol') return 'symbol';

  if (type === 'function') {
    return isGeneratorFn(val) ? 'generatorfunction' : 'function';
  }

  if (isArray(val)) return 'array';
  if (isBuffer(val)) return 'buffer';
  if (isArguments(val)) return 'arguments';
  if (isDate(val)) return 'date';
  if (isError(val)) return 'error';
  if (isRegexp(val)) return 'regexp';

  switch (ctorName(val)) {
    case 'Symbol':
      return 'symbol';

    case 'Promise':
      return 'promise';
    // Set, Map, WeakSet, WeakMap

    case 'WeakMap':
      return 'weakmap';

    case 'WeakSet':
      return 'weakset';

    case 'Map':
      return 'map';

    case 'Set':
      return 'set';
    // 8-bit typed arrays

    case 'Int8Array':
      return 'int8array';

    case 'Uint8Array':
      return 'uint8array';

    case 'Uint8ClampedArray':
      return 'uint8clampedarray';
    // 16-bit typed arrays

    case 'Int16Array':
      return 'int16array';

    case 'Uint16Array':
      return 'uint16array';
    // 32-bit typed arrays

    case 'Int32Array':
      return 'int32array';

    case 'Uint32Array':
      return 'uint32array';

    case 'Float32Array':
      return 'float32array';

    case 'Float64Array':
      return 'float64array';
  }

  if (isGeneratorObj(val)) {
    return 'generator';
  } // Non-plain objects


  type = toString.call(val);

  switch (type) {
    case '[object Object]':
      return 'object';
    // iterators

    case '[object Map Iterator]':
      return 'mapiterator';

    case '[object Set Iterator]':
      return 'setiterator';

    case '[object String Iterator]':
      return 'stringiterator';

    case '[object Array Iterator]':
      return 'arrayiterator';
  } // other


  return type.slice(8, -1).toLowerCase().replace(/\s/g, '');
};

function ctorName(val) {
  return val.constructor ? val.constructor.name : null;
}

function isArray(val) {
  if (Array.isArray) return Array.isArray(val);
  return val instanceof Array;
}

function isError(val) {
  return val instanceof Error || typeof val.message === 'string' && val.constructor && typeof val.constructor.stackTraceLimit === 'number';
}

function isDate(val) {
  if (val instanceof Date) return true;
  return typeof val.toDateString === 'function' && typeof val.getDate === 'function' && typeof val.setDate === 'function';
}

function isRegexp(val) {
  if (val instanceof RegExp) return true;
  return typeof val.flags === 'string' && typeof val.ignoreCase === 'boolean' && typeof val.multiline === 'boolean' && typeof val.global === 'boolean';
}

function isGeneratorFn(name, val) {
  return ctorName(name) === 'GeneratorFunction';
}

function isGeneratorObj(val) {
  return typeof val["throw"] === 'function' && typeof val["return"] === 'function' && typeof val.next === 'function';
}

function isArguments(val) {
  try {
    if (typeof val.length === 'number' && typeof val.callee === 'function') {
      return true;
    }
  } catch (err) {
    if (err.message.indexOf('callee') !== -1) {
      return true;
    }
  }

  return false;
}
/**
 * If you need to support Safari 5-7 (8-10 yr-old browser),
 * take a look at https://github.com/feross/is-buffer
 */


function isBuffer(val) {
  if (val.constructor && typeof val.constructor.isBuffer === 'function') {
    return val.constructor.isBuffer(val);
  }

  return false;
}
/**
 * A private string to identify structs by.
 *
 * @type {String}
 */


var IS_STRUCT = '@@__STRUCT__@@';
/**
 * A private string to refer to a struct's kind.
 *
 * @type {String}
 */

var KIND = '@@__KIND__@@';
/**
 * Check if a `value` is a struct.
 *
 * @param {Any} value
 * @return {Boolean}
 */

function isStruct(value) {
  return !!(value && value[IS_STRUCT]);
}
/**
 * Resolve `defaults`, for an optional `value`.
 *
 * @param {Function|Any} defaults
 * @param {Any} value
 * @return {Any}
 */


function resolveDefaults(defaults, value) {
  return typeof defaults === 'function' ? defaults(value) : defaults;
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};
/**
 * Kind.
 *
 * @type {Kind}
 */


var Kind = function Kind(name, type, validate) {
  _classCallCheck(this, Kind);

  this.name = name;
  this.type = type;
  this.validate = validate;
};
/**
 * Any.
 *
 * @param {Array|Function|Object|String} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function any(schema, defaults$$1, options) {
  if (isStruct(schema)) {
    return schema[KIND];
  }

  if (schema instanceof Kind) {
    return schema;
  }

  switch (kindOf(schema)) {
    case 'array':
      {
        return schema.length > 1 ? tuple(schema, defaults$$1, options) : list(schema, defaults$$1, options);
      }

    case 'function':
      {
        return func(schema, defaults$$1, options);
      }

    case 'object':
      {
        return object(schema, defaults$$1, options);
      }

    case 'string':
      {
        var required = true;
        var type;

        if (schema.endsWith('?')) {
          required = false;
          schema = schema.slice(0, -1);
        }

        if (schema.includes('|')) {
          var scalars = schema.split(/\s*\|\s*/g);
          type = union(scalars, defaults$$1, options);
        } else if (schema.includes('&')) {
          var _scalars = schema.split(/\s*&\s*/g);

          type = intersection(_scalars, defaults$$1, options);
        } else {
          type = scalar(schema, defaults$$1, options);
        }

        if (!required) {
          type = optional(type, undefined, options);
        }

        return type;
      }
  }

  if (true) {
    throw new Error("A schema definition must be an object, array, string or function, but you passed: ".concat(schema));
  } else {}
}
/**
 * Dict.
 *
 * @param {Array} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function dict(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array' || schema.length !== 2) {
    if (true) {
      throw new Error("Dict structs must be defined as an array with two elements, but you passed: ".concat(schema));
    } else {}
  }

  var obj = scalar('object', undefined, options);
  var keys = any(schema[0], undefined, options);
  var values = any(schema[1], undefined, options);
  var name = 'dict';
  var type = "dict<".concat(keys.type, ",").concat(values.type, ">");

  var validate = function validate(value) {
    var resolved = resolveDefaults(defaults$$1);
    value = resolved ? _extends({}, resolved, value) : value;

    var _obj$validate = obj.validate(value),
        _obj$validate2 = _slicedToArray(_obj$validate, 1),
        error = _obj$validate2[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var ret = {};
    var errors = [];

    var _loop = function _loop(_k) {
      var v = value[_k];

      var _keys$validate = keys.validate(_k),
          _keys$validate2 = _slicedToArray(_keys$validate, 2),
          e = _keys$validate2[0],
          r = _keys$validate2[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [_k].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        k = _k;
        return "continue";
      }

      _k = r;

      var _values$validate = values.validate(v),
          _values$validate2 = _slicedToArray(_values$validate, 2),
          e2 = _values$validate2[0],
          r2 = _values$validate2[1];

      if (e2) {
        var allE2 = e2.errors || [e2];
        allE2.forEach(function (singleE) {
          singleE.path = [_k].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        k = _k;
        return "continue";
      }

      ret[_k] = r2;
      k = _k;
    };

    for (var k in value) {
      var _ret = _loop(k);

      if (_ret === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Enum.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function en(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Enum structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var name = 'enum';
  var type = schema.map(function (s) {
    try {
      return JSON.stringify(s);
    } catch (e) {
      return String(s);
    }
  }).join(' | ');

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    return schema.includes(value) ? [undefined, value] : [{
      data: value,
      path: [],
      value: value,
      type: type
    }];
  };

  return new Kind(name, type, validate);
}
/**
 * Enums.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function enums(schema, defaults$$1, options) {
  var e = en(schema, undefined, options);
  var l = list([e], defaults$$1, options);
  return l;
}
/**
 * Function.
 *
 * @param {Function} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function func(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'function') {
    if (true) {
      throw new Error("Function structs must be defined as a function, but you passed: ".concat(schema));
    } else {}
  }

  var name = 'function';
  var type = '<function>';

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var data = arguments.length > 1 ? arguments[1] : undefined;
    var result = schema(value, data);
    var failure = {
      path: [],
      reason: null
    };
    var isValid;

    switch (kindOf(result)) {
      case 'boolean':
        {
          isValid = result;
          break;
        }

      case 'string':
        {
          isValid = false;
          failure.reason = result;
          break;
        }

      case 'object':
        {
          isValid = false;
          failure = _extends({}, failure, result);
          break;
        }

      default:
        {
          if (true) {
            throw new Error("Validator functions must return a boolean, an error reason string or an error reason object, but you passed: ".concat(schema));
          } else {}
        }
    }

    return isValid ? [undefined, value] : [_extends({
      type: type,
      value: value,
      data: value
    }, failure)];
  };

  return new Kind(name, type, validate);
}
/**
 * Instance.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function instance(schema, defaults$$1, options) {
  var name = 'instance';
  var type = "instance<".concat(schema.name, ">");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    return value instanceof schema ? [undefined, value] : [{
      data: value,
      path: [],
      value: value,
      type: type
    }];
  };

  return new Kind(name, type, validate);
}
/**
 * Interface.
 *
 * @param {Object} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function inter(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'object') {
    if (true) {
      throw new Error("Interface structs must be defined as an object, but you passed: ".concat(schema));
    } else {}
  }

  var ks = [];
  var properties = {};

  for (var key in schema) {
    ks.push(key);
    var s = schema[key];
    var kind = any(s, undefined, options);
    properties[key] = kind;
  }

  var name = 'interface';
  var type = "{".concat(ks.join(), "}");

  var validate = function validate(value) {
    var resolved = resolveDefaults(defaults$$1);
    value = resolved ? _extends({}, resolved, value) : value;
    var errors = [];
    var ret = value;

    var _loop2 = function _loop2(_key) {
      var v = value[_key];
      var kind = properties[_key];

      if (v === undefined) {
        var d = defaults$$1 && defaults$$1[_key];
        v = resolveDefaults(d, value);
      }

      var _kind$validate = kind.validate(v, value),
          _kind$validate2 = _slicedToArray(_kind$validate, 2),
          e = _kind$validate2[0],
          r = _kind$validate2[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [_key].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      if (_key in value || r !== undefined) {
        ret[_key] = r;
      }
    };

    for (var _key in properties) {
      var _ret2 = _loop2(_key);

      if (_ret2 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Lazy.
 *
 * @param {Function} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function lazy(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'function') {
    if (true) {
      throw new Error("Lazy structs must be defined as an function that returns a schema, but you passed: ".concat(schema));
    } else {}
  }

  var kind;
  var struct;
  var name = 'lazy';
  var type = "lazy...";

  var compile = function compile(value) {
    struct = schema();
    kind.name = struct.kind;
    kind.type = struct.type;
    kind.validate = struct.validate;
    return kind.validate(value);
  };

  kind = new Kind(name, type, compile);
  return kind;
}
/**
 * Dynamic.
 *
 * @param {Function} createSchema
 * @param {Any} defaults
 * @param {Object} options
 */


function dynamic(createSchema, defaults$$1, options) {
  if (kindOf(createSchema) !== 'function') {
    if (true) {
      throw new Error("Dynamic structs must be defined as a function, but you passed: ".concat(createSchema));
    } else {}
  }

  var name = 'dynamic';
  var type = 'dynamic...';

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var data = arguments.length > 1 ? arguments[1] : undefined;
    var schema = createSchema(value, data);

    if (kindOf(schema) !== 'function') {
      if (true) {
        throw new Error("Dynamic structs must return a schema, but you passed: ".concat(schema));
      } else {}
    }

    var _schema$validate = schema.validate(value),
        _schema$validate2 = _slicedToArray(_schema$validate, 2),
        error = _schema$validate2[0],
        result = _schema$validate2[1];

    if (error) {
      return [error];
    }

    return [undefined, result];
  };

  return new Kind(name, type, validate);
}
/**
 * List.
 *
 * @param {Array} schema
 * @param {Array} defaults
 * @param {Object} options
 */


function list(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array' || schema.length !== 1) {
    if (true) {
      throw new Error("List structs must be defined as an array with a single element, but you passed: ".concat(schema));
    } else {}
  }

  var array = scalar('array', undefined, options);
  var element = any(schema[0], undefined, options);
  var name = 'list';
  var type = "[".concat(element.type, "]");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _array$validate = array.validate(value),
        _array$validate2 = _slicedToArray(_array$validate, 2),
        error = _array$validate2[0],
        result = _array$validate2[1];

    if (error) {
      error.type = type;
      return [error];
    }

    value = result;
    var errors = [];
    var ret = [];

    var _loop3 = function _loop3(i) {
      var v = value[i];

      var _element$validate = element.validate(v),
          _element$validate2 = _slicedToArray(_element$validate, 2),
          e = _element$validate2[0],
          r = _element$validate2[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [i].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      ret[i] = r;
    };

    for (var i = 0; i < value.length; i++) {
      var _ret3 = _loop3(i);

      if (_ret3 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Literal.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function literal(schema, defaults$$1, options) {
  var name = 'literal';
  var type = "literal: ".concat(JSON.stringify(schema));

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    return value === schema ? [undefined, value] : [{
      data: value,
      path: [],
      value: value,
      type: type
    }];
  };

  return new Kind(name, type, validate);
}
/**
 * Object.
 *
 * @param {Object} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function object(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'object') {
    if (true) {
      throw new Error("Object structs must be defined as an object, but you passed: ".concat(schema));
    } else {}
  }

  var obj = scalar('object', undefined, options);
  var ks = [];
  var properties = {};

  for (var key in schema) {
    ks.push(key);
    var s = schema[key];
    var kind = any(s, undefined, options);
    properties[key] = kind;
  }

  var name = 'object';
  var type = "{".concat(ks.join(), "}");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _obj$validate3 = obj.validate(value),
        _obj$validate4 = _slicedToArray(_obj$validate3, 1),
        error = _obj$validate4[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var errors = [];
    var ret = {};
    var valueKeys = Object.keys(value);
    var propertiesKeys = Object.keys(properties);
    var keys = new Set(valueKeys.concat(propertiesKeys));
    keys.forEach(function (key) {
      var v = value[key];
      var kind = properties[key];

      if (v === undefined) {
        var d = defaults$$1 && defaults$$1[key];
        v = resolveDefaults(d, value);
      }

      if (!kind) {
        var _e2 = {
          data: value,
          path: [key],
          value: v
        };
        errors.push(_e2);
        return;
      }

      var _kind$validate3 = kind.validate(v, value),
          _kind$validate4 = _slicedToArray(_kind$validate3, 2),
          e = _kind$validate4[0],
          r = _kind$validate4[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [key].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return;
      }

      if (key in value || r !== undefined) {
        ret[key] = r;
      }
    });

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Optional.
 *
 * @param {Any} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function optional(schema, defaults$$1, options) {
  return union([schema, 'undefined'], defaults$$1, options);
}
/**
 * Partial.
 *
 * @param {Object} schema
 * @param {Object} defaults
 * @param {Object} options
 */


function partial(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'object') {
    if (true) {
      throw new Error("Partial structs must be defined as an object, but you passed: ".concat(schema));
    } else {}
  }

  var obj = scalar('object', undefined, options);
  var ks = [];
  var properties = {};

  for (var key in schema) {
    ks.push(key);
    var s = schema[key];
    var kind = any(s, undefined, options);
    properties[key] = kind;
  }

  var name = 'partial';
  var type = "{".concat(ks.join(), ",...}");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _obj$validate5 = obj.validate(value),
        _obj$validate6 = _slicedToArray(_obj$validate5, 1),
        error = _obj$validate6[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var errors = [];
    var ret = {};

    var _loop4 = function _loop4(_key2) {
      var v = value[_key2];
      var kind = properties[_key2];

      if (v === undefined) {
        var d = defaults$$1 && defaults$$1[_key2];
        v = resolveDefaults(d, value);
      }

      var _kind$validate5 = kind.validate(v, value),
          _kind$validate6 = _slicedToArray(_kind$validate5, 2),
          e = _kind$validate6[0],
          r = _kind$validate6[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [_key2].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      if (_key2 in value || r !== undefined) {
        ret[_key2] = r;
      }
    };

    for (var _key2 in properties) {
      var _ret4 = _loop4(_key2);

      if (_ret4 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Scalar.
 *
 * @param {String} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function scalar(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'string') {
    if (true) {
      throw new Error("Scalar structs must be defined as a string, but you passed: ".concat(schema));
    } else {}
  }

  var types = options.types;
  var fn = types[schema];

  if (kindOf(fn) !== 'function') {
    if (true) {
      throw new Error("No struct validator function found for type \"".concat(schema, "\"."));
    } else {}
  }

  var kind = func(fn, defaults$$1, options);
  var name = 'scalar';
  var type = schema;

  var validate = function validate(value) {
    var _kind$validate7 = kind.validate(value),
        _kind$validate8 = _slicedToArray(_kind$validate7, 2),
        error = _kind$validate8[0],
        result = _kind$validate8[1];

    if (error) {
      error.type = type;
      return [error];
    }

    return [undefined, result];
  };

  return new Kind(name, type, validate);
}
/**
 * Tuple.
 *
 * @param {Array} schema
 * @param {Array} defaults
 * @param {Object} options
 */


function tuple(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Tuple structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var kinds = schema.map(function (s) {
    return any(s, undefined, options);
  });
  var array = scalar('array', undefined, options);
  var name = 'tuple';
  var type = "[".concat(kinds.map(function (k) {
    return k.type;
  }).join(), "]");

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);

    var _array$validate3 = array.validate(value),
        _array$validate4 = _slicedToArray(_array$validate3, 1),
        error = _array$validate4[0];

    if (error) {
      error.type = type;
      return [error];
    }

    var ret = [];
    var errors = [];
    var length = Math.max(value.length, kinds.length);

    var _loop5 = function _loop5(i) {
      var kind = kinds[i];
      var v = value[i];

      if (!kind) {
        var _e3 = {
          data: value,
          path: [i],
          value: v
        };
        errors.push(_e3);
        return "continue";
      }

      var _kind$validate9 = kind.validate(v),
          _kind$validate10 = _slicedToArray(_kind$validate9, 2),
          e = _kind$validate10[0],
          r = _kind$validate10[1];

      if (e) {
        var allE = e.errors || [e];
        allE.forEach(function (singleE) {
          singleE.path = [i].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        return "continue";
      }

      ret[i] = r;
    };

    for (var i = 0; i < length; i++) {
      var _ret5 = _loop5(i);

      if (_ret5 === "continue") continue;
    }

    if (errors.length) {
      var first = errors[0];
      first.errors = errors;
      return [first];
    }

    return [undefined, ret];
  };

  return new Kind(name, type, validate);
}
/**
 * Union.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function union(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Union structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var kinds = schema.map(function (s) {
    return any(s, undefined, options);
  });
  var name = 'union';
  var type = kinds.map(function (k) {
    return k.type;
  }).join(' | ');

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var errors = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = kinds[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _k2 = _step.value;

        var _k2$validate = _k2.validate(value),
            _k2$validate2 = _slicedToArray(_k2$validate, 2),
            e = _k2$validate2[0],
            r = _k2$validate2[1];

        if (!e) {
          return [undefined, r];
        }

        errors.push(e);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    errors[0].type = type;
    return errors;
  };

  return new Kind(name, type, validate);
}
/**
 * Intersection.
 *
 * @param {Array} schema
 * @param {Any} defaults
 * @param {Object} options
 */


function intersection(schema, defaults$$1, options) {
  if (kindOf(schema) !== 'array') {
    if (true) {
      throw new Error("Intersection structs must be defined as an array, but you passed: ".concat(schema));
    } else {}
  }

  var types = schema.map(function (s) {
    return any(s, undefined, options);
  });
  var name = 'intersection';
  var type = types.map(function (t) {
    return t.type;
  }).join(' & ');

  var validate = function validate() {
    var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : resolveDefaults(defaults$$1);
    var v = value;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = types[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var t = _step2.value;

        var _t$validate = t.validate(v),
            _t$validate2 = _slicedToArray(_t$validate, 2),
            e = _t$validate2[0],
            r = _t$validate2[1];

        if (e) {
          e.type = type;
          return [e];
        }

        v = r;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    return [undefined, v];
  };

  return new Kind(name, type, validate);
}
/**
 * Kinds.
 *
 * @type {Object}
 */


var Kinds = {
  any: any,
  dict: dict,
  "enum": en,
  enums: enums,
  "function": func,
  instance: instance,
  "interface": inter,
  lazy: lazy,
  list: list,
  literal: literal,
  object: object,
  optional: optional,
  partial: partial,
  scalar: scalar,
  tuple: tuple,
  union: union,
  intersection: intersection,
  dynamic: dynamic
  /**
   * Export.
   *
   * @type {Object}
   */

};
/**
 * The types that `kind-of` supports.
 *
 * @type {Array}
 */

var TYPES = ['arguments', 'array', 'boolean', 'buffer', 'error', 'float32array', 'float64array', 'function', 'generatorfunction', 'int16array', 'int32array', 'int8array', 'map', 'null', 'number', 'object', 'promise', 'regexp', 'set', 'string', 'symbol', 'uint16array', 'uint32array', 'uint8array', 'uint8clampedarray', 'undefined', 'weakmap', 'weakset'];
/**
 * The default types that Superstruct ships with.
 *
 * @type {Object}
 */

var Types = {
  any: function any(value) {
    return value !== undefined;
  }
};
TYPES.forEach(function (type) {
  Types[type] = function (value) {
    return kindOf(value) === type;
  };
});
/**
 * Handle the 'date' case specially, to throw out invalid `Date` objects.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

Types.date = function (value) {
  return kindOf(value) === 'date' && !isNaN(value);
};
/**
 * Create a struct factory with a `config`.
 *
 * @param {Object} config
 * @return {Function}
 */


function superstruct() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  var types = _extends({}, Types, config.types || {});
  /**
   * Create a `kind` struct with `schema`, `defaults` and `options`.
   *
   * @param {Any} schema
   * @param {Any} defaults
   * @param {Object} options
   * @return {Function}
   */


  function struct(schema, defaults$$1) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (isStruct(schema)) {
      schema = schema.schema;
    }

    var kind = Kinds.any(schema, defaults$$1, _extends({}, options, {
      types: types
    }));

    function Struct(data) {
      if (this instanceof Struct) {
        if (true) {
          throw new Error('The `Struct` creation function should not be used with the `new` keyword.');
        } else {}
      }

      return Struct.assert(data);
    }

    Object.defineProperty(Struct, IS_STRUCT, {
      value: true
    });
    Object.defineProperty(Struct, KIND, {
      value: kind
    });
    Struct.kind = kind.name;
    Struct.type = kind.type;
    Struct.schema = schema;
    Struct.defaults = defaults$$1;
    Struct.options = options;

    Struct.assert = function (value) {
      var _kind$validate11 = kind.validate(value),
          _kind$validate12 = _slicedToArray(_kind$validate11, 2),
          error = _kind$validate12[0],
          result = _kind$validate12[1];

      if (error) {
        throw new StructError(error);
      }

      return result;
    };

    Struct.test = function (value) {
      var _kind$validate13 = kind.validate(value),
          _kind$validate14 = _slicedToArray(_kind$validate13, 1),
          error = _kind$validate14[0];

      return !error;
    };

    Struct.validate = function (value) {
      var _kind$validate15 = kind.validate(value),
          _kind$validate16 = _slicedToArray(_kind$validate15, 2),
          error = _kind$validate16[0],
          result = _kind$validate16[1];

      if (error) {
        return [new StructError(error)];
      }

      return [undefined, result];
    };

    return Struct;
  }
  /**
   * Mix in a factory for each specific kind of struct.
   */


  Object.keys(Kinds).forEach(function (name) {
    var kind = Kinds[name];

    struct[name] = function (schema, defaults$$1, options) {
      var type = kind(schema, defaults$$1, _extends({}, options, {
        types: types
      }));
      var s = struct(type, defaults$$1, options);
      return s;
    };
  });
  /**
   * Return the struct factory.
   */

  return struct;
}
/**
 * Create a convenience `struct` factory for the default types.
 *
 * @type {Function}
 */


var struct = superstruct();


/***/ })

}]);
//# sourceMappingURL=vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~ad2d78d9.chunk.js.map