(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-alarm-panel-card-editor~hui-entities-card-editor~hui-entity-button-card-editor~hui-gauge~e96c28c1"],{

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
/**
 * Define a struct error.
 *
 * @type {StructError}
 */
class StructError extends TypeError {
  static format(attrs) {
    const {
      type,
      path,
      value
    } = attrs;
    const message = `Expected a value of type \`${type}\`${path.length ? ` for \`${path.join('.')}\`` : ''} but received \`${JSON.stringify(value)}\`.`;
    return message;
  }

  constructor(attrs) {
    const message = StructError.format(attrs);
    super(message);
    const {
      data,
      path,
      value,
      reason,
      type,
      errors = []
    } = attrs;
    this.data = data;
    this.path = path;
    this.value = value;
    this.reason = reason;
    this.type = type;
    this.errors = errors;

    if (!errors.length) {
      errors.push(this);
    }

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error().stack;
    }
  }

}

var toString = Object.prototype.toString;

var kindOf = function kindOf(val) {
  if (val === void 0) return 'undefined';
  if (val === null) return 'null';
  var type = typeof val;
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
  return typeof val.throw === 'function' && typeof val.return === 'function' && typeof val.next === 'function';
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


const IS_STRUCT = '@@__STRUCT__@@';
/**
 * A private string to refer to a struct's kind.
 *
 * @type {String}
 */

const KIND = '@@__KIND__@@';
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


class Kind {
  constructor(name, type, validate) {
    this.name = name;
    this.type = type;
    this.validate = validate;
  }

}
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
        let required = true;
        let type;

        if (schema.endsWith('?')) {
          required = false;
          schema = schema.slice(0, -1);
        }

        if (schema.includes('|')) {
          const scalars = schema.split(/\s*\|\s*/g);
          type = union(scalars, defaults$$1, options);
        } else if (schema.includes('&')) {
          const scalars = schema.split(/\s*&\s*/g);
          type = intersection(scalars, defaults$$1, options);
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
    throw new Error(`A schema definition must be an object, array, string or function, but you passed: ${schema}`);
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
      throw new Error(`Dict structs must be defined as an array with two elements, but you passed: ${schema}`);
    } else {}
  }

  const obj = scalar('object', undefined, options);
  const keys = any(schema[0], undefined, options);
  const values = any(schema[1], undefined, options);
  const name = 'dict';
  const type = `dict<${keys.type},${values.type}>`;

  const validate = value => {
    const resolved = resolveDefaults(defaults$$1);
    value = resolved ? _extends({}, resolved, value) : value;
    const [error] = obj.validate(value);

    if (error) {
      error.type = type;
      return [error];
    }

    const ret = {};
    const errors = [];

    for (let k in value) {
      const v = value[k];
      const [e, r] = keys.validate(k);

      if (e) {
        const allE = e.errors || [e];
        allE.forEach(singleE => {
          singleE.path = [k].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        continue;
      }

      k = r;
      const [e2, r2] = values.validate(v);

      if (e2) {
        const allE2 = e2.errors || [e2];
        allE2.forEach(singleE => {
          singleE.path = [k].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        continue;
      }

      ret[k] = r2;
    }

    if (errors.length) {
      const first = errors[0];
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
      throw new Error(`Enum structs must be defined as an array, but you passed: ${schema}`);
    } else {}
  }

  const name = 'enum';
  const type = schema.map(s => {
    try {
      return JSON.stringify(s);
    } catch (e) {
      return String(s);
    }
  }).join(' | ');

  const validate = (value = resolveDefaults(defaults$$1)) => {
    return schema.includes(value) ? [undefined, value] : [{
      data: value,
      path: [],
      value,
      type
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
  const e = en(schema, undefined, options);
  const l = list([e], defaults$$1, options);
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
      throw new Error(`Function structs must be defined as a function, but you passed: ${schema}`);
    } else {}
  }

  const name = 'function';
  const type = '<function>';

  const validate = (value = resolveDefaults(defaults$$1), data) => {
    const result = schema(value, data);
    let failure = {
      path: [],
      reason: null
    };
    let isValid;

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
            throw new Error(`Validator functions must return a boolean, an error reason string or an error reason object, but you passed: ${schema}`);
          } else {}
        }
    }

    return isValid ? [undefined, value] : [_extends({
      type,
      value,
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
  const name = 'instance';
  const type = `instance<${schema.name}>`;

  const validate = (value = resolveDefaults(defaults$$1)) => {
    return value instanceof schema ? [undefined, value] : [{
      data: value,
      path: [],
      value,
      type
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
      throw new Error(`Interface structs must be defined as an object, but you passed: ${schema}`);
    } else {}
  }

  const ks = [];
  const properties = {};

  for (const key in schema) {
    ks.push(key);
    const s = schema[key];
    const kind = any(s, undefined, options);
    properties[key] = kind;
  }

  const name = 'interface';
  const type = `{${ks.join()}}`;

  const validate = value => {
    const resolved = resolveDefaults(defaults$$1);
    value = resolved ? _extends({}, resolved, value) : value;
    const errors = [];
    const ret = value;

    for (const key in properties) {
      let v = value[key];
      const kind = properties[key];

      if (v === undefined) {
        const d = defaults$$1 && defaults$$1[key];
        v = resolveDefaults(d, value);
      }

      const [e, r] = kind.validate(v, value);

      if (e) {
        const allE = e.errors || [e];
        allE.forEach(singleE => {
          singleE.path = [key].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        continue;
      }

      if (key in value || r !== undefined) {
        ret[key] = r;
      }
    }

    if (errors.length) {
      const first = errors[0];
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
      throw new Error(`Lazy structs must be defined as an function that returns a schema, but you passed: ${schema}`);
    } else {}
  }

  let kind;
  let struct;
  const name = 'lazy';
  const type = `lazy...`;

  const compile = value => {
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
      throw new Error(`Dynamic structs must be defined as a function, but you passed: ${createSchema}`);
    } else {}
  }

  const name = 'dynamic';
  const type = 'dynamic...';

  const validate = (value = resolveDefaults(defaults$$1), data) => {
    const schema = createSchema(value, data);

    if (kindOf(schema) !== 'function') {
      if (true) {
        throw new Error(`Dynamic structs must return a schema, but you passed: ${schema}`);
      } else {}
    }

    const [error, result] = schema.validate(value);

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
      throw new Error(`List structs must be defined as an array with a single element, but you passed: ${schema}`);
    } else {}
  }

  const array = scalar('array', undefined, options);
  const element = any(schema[0], undefined, options);
  const name = 'list';
  const type = `[${element.type}]`;

  const validate = (value = resolveDefaults(defaults$$1)) => {
    const [error, result] = array.validate(value);

    if (error) {
      error.type = type;
      return [error];
    }

    value = result;
    const errors = [];
    const ret = [];

    for (let i = 0; i < value.length; i++) {
      const v = value[i];
      const [e, r] = element.validate(v);

      if (e) {
        const allE = e.errors || [e];
        allE.forEach(singleE => {
          singleE.path = [i].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        continue;
      }

      ret[i] = r;
    }

    if (errors.length) {
      const first = errors[0];
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
  const name = 'literal';
  const type = `literal: ${JSON.stringify(schema)}`;

  const validate = (value = resolveDefaults(defaults$$1)) => {
    return value === schema ? [undefined, value] : [{
      data: value,
      path: [],
      value,
      type
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
      throw new Error(`Object structs must be defined as an object, but you passed: ${schema}`);
    } else {}
  }

  const obj = scalar('object', undefined, options);
  const ks = [];
  const properties = {};

  for (const key in schema) {
    ks.push(key);
    const s = schema[key];
    const kind = any(s, undefined, options);
    properties[key] = kind;
  }

  const name = 'object';
  const type = `{${ks.join()}}`;

  const validate = (value = resolveDefaults(defaults$$1)) => {
    const [error] = obj.validate(value);

    if (error) {
      error.type = type;
      return [error];
    }

    const errors = [];
    const ret = {};
    const valueKeys = Object.keys(value);
    const propertiesKeys = Object.keys(properties);
    const keys = new Set(valueKeys.concat(propertiesKeys));
    keys.forEach(key => {
      let v = value[key];
      const kind = properties[key];

      if (v === undefined) {
        const d = defaults$$1 && defaults$$1[key];
        v = resolveDefaults(d, value);
      }

      if (!kind) {
        const e = {
          data: value,
          path: [key],
          value: v
        };
        errors.push(e);
        return;
      }

      const [e, r] = kind.validate(v, value);

      if (e) {
        const allE = e.errors || [e];
        allE.forEach(singleE => {
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
      const first = errors[0];
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
      throw new Error(`Partial structs must be defined as an object, but you passed: ${schema}`);
    } else {}
  }

  const obj = scalar('object', undefined, options);
  const ks = [];
  const properties = {};

  for (const key in schema) {
    ks.push(key);
    const s = schema[key];
    const kind = any(s, undefined, options);
    properties[key] = kind;
  }

  const name = 'partial';
  const type = `{${ks.join()},...}`;

  const validate = (value = resolveDefaults(defaults$$1)) => {
    const [error] = obj.validate(value);

    if (error) {
      error.type = type;
      return [error];
    }

    const errors = [];
    const ret = {};

    for (const key in properties) {
      let v = value[key];
      const kind = properties[key];

      if (v === undefined) {
        const d = defaults$$1 && defaults$$1[key];
        v = resolveDefaults(d, value);
      }

      const [e, r] = kind.validate(v, value);

      if (e) {
        const allE = e.errors || [e];
        allE.forEach(singleE => {
          singleE.path = [key].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        continue;
      }

      if (key in value || r !== undefined) {
        ret[key] = r;
      }
    }

    if (errors.length) {
      const first = errors[0];
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
      throw new Error(`Scalar structs must be defined as a string, but you passed: ${schema}`);
    } else {}
  }

  const {
    types
  } = options;
  const fn = types[schema];

  if (kindOf(fn) !== 'function') {
    if (true) {
      throw new Error(`No struct validator function found for type "${schema}".`);
    } else {}
  }

  const kind = func(fn, defaults$$1, options);
  const name = 'scalar';
  const type = schema;

  const validate = value => {
    const [error, result] = kind.validate(value);

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
      throw new Error(`Tuple structs must be defined as an array, but you passed: ${schema}`);
    } else {}
  }

  const kinds = schema.map(s => any(s, undefined, options));
  const array = scalar('array', undefined, options);
  const name = 'tuple';
  const type = `[${kinds.map(k => k.type).join()}]`;

  const validate = (value = resolveDefaults(defaults$$1)) => {
    const [error] = array.validate(value);

    if (error) {
      error.type = type;
      return [error];
    }

    const ret = [];
    const errors = [];
    const length = Math.max(value.length, kinds.length);

    for (let i = 0; i < length; i++) {
      const kind = kinds[i];
      const v = value[i];

      if (!kind) {
        const e = {
          data: value,
          path: [i],
          value: v
        };
        errors.push(e);
        continue;
      }

      const [e, r] = kind.validate(v);

      if (e) {
        const allE = e.errors || [e];
        allE.forEach(singleE => {
          singleE.path = [i].concat(singleE.path);
          singleE.data = value;
          errors.push(singleE);
        });
        continue;
      }

      ret[i] = r;
    }

    if (errors.length) {
      const first = errors[0];
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
      throw new Error(`Union structs must be defined as an array, but you passed: ${schema}`);
    } else {}
  }

  const kinds = schema.map(s => any(s, undefined, options));
  const name = 'union';
  const type = kinds.map(k => k.type).join(' | ');

  const validate = (value = resolveDefaults(defaults$$1)) => {
    const errors = [];

    for (const k of kinds) {
      const [e, r] = k.validate(value);

      if (!e) {
        return [undefined, r];
      }

      errors.push(e);
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
      throw new Error(`Intersection structs must be defined as an array, but you passed: ${schema}`);
    } else {}
  }

  const types = schema.map(s => any(s, undefined, options));
  const name = 'intersection';
  const type = types.map(t => t.type).join(' & ');

  const validate = (value = resolveDefaults(defaults$$1)) => {
    let v = value;

    for (const t of types) {
      const [e, r] = t.validate(v);

      if (e) {
        e.type = type;
        return [e];
      }

      v = r;
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


const Kinds = {
  any,
  dict,
  enum: en,
  enums,
  function: func,
  instance,
  interface: inter,
  lazy,
  list,
  literal,
  object,
  optional,
  partial,
  scalar,
  tuple,
  union,
  intersection,
  dynamic
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

const TYPES = ['arguments', 'array', 'boolean', 'buffer', 'error', 'float32array', 'float64array', 'function', 'generatorfunction', 'int16array', 'int32array', 'int8array', 'map', 'null', 'number', 'object', 'promise', 'regexp', 'set', 'string', 'symbol', 'uint16array', 'uint32array', 'uint8array', 'uint8clampedarray', 'undefined', 'weakmap', 'weakset'];
/**
 * The default types that Superstruct ships with.
 *
 * @type {Object}
 */

const Types = {
  any: value => value !== undefined
};
TYPES.forEach(type => {
  Types[type] = value => kindOf(value) === type;
});
/**
 * Handle the 'date' case specially, to throw out invalid `Date` objects.
 *
 * @param {Mixed} value
 * @return {Boolean}
 */

Types.date = value => kindOf(value) === 'date' && !isNaN(value);
/**
 * Create a struct factory with a `config`.
 *
 * @param {Object} config
 * @return {Function}
 */


function superstruct(config = {}) {
  const types = _extends({}, Types, config.types || {});
  /**
   * Create a `kind` struct with `schema`, `defaults` and `options`.
   *
   * @param {Any} schema
   * @param {Any} defaults
   * @param {Object} options
   * @return {Function}
   */


  function struct(schema, defaults$$1, options = {}) {
    if (isStruct(schema)) {
      schema = schema.schema;
    }

    const kind = Kinds.any(schema, defaults$$1, _extends({}, options, {
      types
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

    Struct.assert = value => {
      const [error, result] = kind.validate(value);

      if (error) {
        throw new StructError(error);
      }

      return result;
    };

    Struct.test = value => {
      const [error] = kind.validate(value);
      return !error;
    };

    Struct.validate = value => {
      const [error, result] = kind.validate(value);

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


  Object.keys(Kinds).forEach(name => {
    const kind = Kinds[name];

    struct[name] = (schema, defaults$$1, options) => {
      const type = kind(schema, defaults$$1, _extends({}, options, {
        types
      }));
      const s = struct(type, defaults$$1, options);
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


const struct = superstruct();


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktYWxhcm0tcGFuZWwtY2FyZC1lZGl0b3J+aHVpLWVudGl0aWVzLWNhcmQtZWRpdG9yfmh1aS1lbnRpdHktYnV0dG9uLWNhcmQtZWRpdG9yfmh1aS1nYXVnZX5lOTZjMjhjMS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9zcmMvZXJyb3IuanMiLCJ3ZWJwYWNrOi8vLy4uL25vZGVfbW9kdWxlcy9raW5kLW9mL2luZGV4LmpzIiwid2VicGFjazovLy8uLi9zcmMvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9raW5kcy5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL3R5cGVzLmpzIiwid2VicGFjazovLy8uLi9zcmMvc3VwZXJzdHJ1Y3QuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIERlZmluZSBhIHN0cnVjdCBlcnJvci5cbiAqXG4gKiBAdHlwZSB7U3RydWN0RXJyb3J9XG4gKi9cblxuY2xhc3MgU3RydWN0RXJyb3IgZXh0ZW5kcyBUeXBlRXJyb3Ige1xuICBzdGF0aWMgZm9ybWF0KGF0dHJzKSB7XG4gICAgY29uc3QgeyB0eXBlLCBwYXRoLCB2YWx1ZSB9ID0gYXR0cnNcbiAgICBjb25zdCBtZXNzYWdlID0gYEV4cGVjdGVkIGEgdmFsdWUgb2YgdHlwZSBcXGAke3R5cGV9XFxgJHtcbiAgICAgIHBhdGgubGVuZ3RoID8gYCBmb3IgXFxgJHtwYXRoLmpvaW4oJy4nKX1cXGBgIDogJydcbiAgICB9IGJ1dCByZWNlaXZlZCBcXGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1cXGAuYFxuICAgIHJldHVybiBtZXNzYWdlXG4gIH1cblxuICBjb25zdHJ1Y3RvcihhdHRycykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBTdHJ1Y3RFcnJvci5mb3JtYXQoYXR0cnMpXG4gICAgc3VwZXIobWVzc2FnZSlcblxuICAgIGNvbnN0IHsgZGF0YSwgcGF0aCwgdmFsdWUsIHJlYXNvbiwgdHlwZSwgZXJyb3JzID0gW10gfSA9IGF0dHJzXG4gICAgdGhpcy5kYXRhID0gZGF0YVxuICAgIHRoaXMucGF0aCA9IHBhdGhcbiAgICB0aGlzLnZhbHVlID0gdmFsdWVcbiAgICB0aGlzLnJlYXNvbiA9IHJlYXNvblxuICAgIHRoaXMudHlwZSA9IHR5cGVcbiAgICB0aGlzLmVycm9ycyA9IGVycm9yc1xuXG4gICAgaWYgKCFlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBlcnJvcnMucHVzaCh0aGlzKVxuICAgIH1cblxuICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgRXJyb3IuY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgdGhpcy5jb25zdHJ1Y3RvcilcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrXG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhwb3J0LlxuICpcbiAqIEB0eXBlIHtTdHJ1Y3RFcnJvcn1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBTdHJ1Y3RFcnJvclxuIiwidmFyIHRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBraW5kT2YodmFsKSB7XG4gIGlmICh2YWwgPT09IHZvaWQgMCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuXG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbDtcbiAgaWYgKHR5cGUgPT09ICdib29sZWFuJykgcmV0dXJuICdib29sZWFuJztcbiAgaWYgKHR5cGUgPT09ICdzdHJpbmcnKSByZXR1cm4gJ3N0cmluZyc7XG4gIGlmICh0eXBlID09PSAnbnVtYmVyJykgcmV0dXJuICdudW1iZXInO1xuICBpZiAodHlwZSA9PT0gJ3N5bWJvbCcpIHJldHVybiAnc3ltYm9sJztcbiAgaWYgKHR5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaXNHZW5lcmF0b3JGbih2YWwpID8gJ2dlbmVyYXRvcmZ1bmN0aW9uJyA6ICdmdW5jdGlvbic7XG4gIH1cblxuICBpZiAoaXNBcnJheSh2YWwpKSByZXR1cm4gJ2FycmF5JztcbiAgaWYgKGlzQnVmZmVyKHZhbCkpIHJldHVybiAnYnVmZmVyJztcbiAgaWYgKGlzQXJndW1lbnRzKHZhbCkpIHJldHVybiAnYXJndW1lbnRzJztcbiAgaWYgKGlzRGF0ZSh2YWwpKSByZXR1cm4gJ2RhdGUnO1xuICBpZiAoaXNFcnJvcih2YWwpKSByZXR1cm4gJ2Vycm9yJztcbiAgaWYgKGlzUmVnZXhwKHZhbCkpIHJldHVybiAncmVnZXhwJztcblxuICBzd2l0Y2ggKGN0b3JOYW1lKHZhbCkpIHtcbiAgICBjYXNlICdTeW1ib2wnOiByZXR1cm4gJ3N5bWJvbCc7XG4gICAgY2FzZSAnUHJvbWlzZSc6IHJldHVybiAncHJvbWlzZSc7XG5cbiAgICAvLyBTZXQsIE1hcCwgV2Vha1NldCwgV2Vha01hcFxuICAgIGNhc2UgJ1dlYWtNYXAnOiByZXR1cm4gJ3dlYWttYXAnO1xuICAgIGNhc2UgJ1dlYWtTZXQnOiByZXR1cm4gJ3dlYWtzZXQnO1xuICAgIGNhc2UgJ01hcCc6IHJldHVybiAnbWFwJztcbiAgICBjYXNlICdTZXQnOiByZXR1cm4gJ3NldCc7XG5cbiAgICAvLyA4LWJpdCB0eXBlZCBhcnJheXNcbiAgICBjYXNlICdJbnQ4QXJyYXknOiByZXR1cm4gJ2ludDhhcnJheSc7XG4gICAgY2FzZSAnVWludDhBcnJheSc6IHJldHVybiAndWludDhhcnJheSc7XG4gICAgY2FzZSAnVWludDhDbGFtcGVkQXJyYXknOiByZXR1cm4gJ3VpbnQ4Y2xhbXBlZGFycmF5JztcblxuICAgIC8vIDE2LWJpdCB0eXBlZCBhcnJheXNcbiAgICBjYXNlICdJbnQxNkFycmF5JzogcmV0dXJuICdpbnQxNmFycmF5JztcbiAgICBjYXNlICdVaW50MTZBcnJheSc6IHJldHVybiAndWludDE2YXJyYXknO1xuXG4gICAgLy8gMzItYml0IHR5cGVkIGFycmF5c1xuICAgIGNhc2UgJ0ludDMyQXJyYXknOiByZXR1cm4gJ2ludDMyYXJyYXknO1xuICAgIGNhc2UgJ1VpbnQzMkFycmF5JzogcmV0dXJuICd1aW50MzJhcnJheSc7XG4gICAgY2FzZSAnRmxvYXQzMkFycmF5JzogcmV0dXJuICdmbG9hdDMyYXJyYXknO1xuICAgIGNhc2UgJ0Zsb2F0NjRBcnJheSc6IHJldHVybiAnZmxvYXQ2NGFycmF5JztcbiAgfVxuXG4gIGlmIChpc0dlbmVyYXRvck9iaih2YWwpKSB7XG4gICAgcmV0dXJuICdnZW5lcmF0b3InO1xuICB9XG5cbiAgLy8gTm9uLXBsYWluIG9iamVjdHNcbiAgdHlwZSA9IHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzogcmV0dXJuICdvYmplY3QnO1xuICAgIC8vIGl0ZXJhdG9yc1xuICAgIGNhc2UgJ1tvYmplY3QgTWFwIEl0ZXJhdG9yXSc6IHJldHVybiAnbWFwaXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgU2V0IEl0ZXJhdG9yXSc6IHJldHVybiAnc2V0aXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nIEl0ZXJhdG9yXSc6IHJldHVybiAnc3RyaW5naXRlcmF0b3InO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXkgSXRlcmF0b3JdJzogcmV0dXJuICdhcnJheWl0ZXJhdG9yJztcbiAgfVxuXG4gIC8vIG90aGVyXG4gIHJldHVybiB0eXBlLnNsaWNlKDgsIC0xKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccy9nLCAnJyk7XG59O1xuXG5mdW5jdGlvbiBjdG9yTmFtZSh2YWwpIHtcbiAgcmV0dXJuIHZhbC5jb25zdHJ1Y3RvciA/IHZhbC5jb25zdHJ1Y3Rvci5uYW1lIDogbnVsbDtcbn1cblxuZnVuY3Rpb24gaXNBcnJheSh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkpIHJldHVybiBBcnJheS5pc0FycmF5KHZhbCk7XG4gIHJldHVybiB2YWwgaW5zdGFuY2VvZiBBcnJheTtcbn1cblxuZnVuY3Rpb24gaXNFcnJvcih2YWwpIHtcbiAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIEVycm9yIHx8ICh0eXBlb2YgdmFsLm1lc3NhZ2UgPT09ICdzdHJpbmcnICYmIHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLnN0YWNrVHJhY2VMaW1pdCA9PT0gJ251bWJlcicpO1xufVxuXG5mdW5jdGlvbiBpc0RhdGUodmFsKSB7XG4gIGlmICh2YWwgaW5zdGFuY2VvZiBEYXRlKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHR5cGVvZiB2YWwudG9EYXRlU3RyaW5nID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5nZXREYXRlID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5zZXREYXRlID09PSAnZnVuY3Rpb24nO1xufVxuXG5mdW5jdGlvbiBpc1JlZ2V4cCh2YWwpIHtcbiAgaWYgKHZhbCBpbnN0YW5jZW9mIFJlZ0V4cCkgcmV0dXJuIHRydWU7XG4gIHJldHVybiB0eXBlb2YgdmFsLmZsYWdzID09PSAnc3RyaW5nJ1xuICAgICYmIHR5cGVvZiB2YWwuaWdub3JlQ2FzZSA9PT0gJ2Jvb2xlYW4nXG4gICAgJiYgdHlwZW9mIHZhbC5tdWx0aWxpbmUgPT09ICdib29sZWFuJ1xuICAgICYmIHR5cGVvZiB2YWwuZ2xvYmFsID09PSAnYm9vbGVhbic7XG59XG5cbmZ1bmN0aW9uIGlzR2VuZXJhdG9yRm4obmFtZSwgdmFsKSB7XG4gIHJldHVybiBjdG9yTmFtZShuYW1lKSA9PT0gJ0dlbmVyYXRvckZ1bmN0aW9uJztcbn1cblxuZnVuY3Rpb24gaXNHZW5lcmF0b3JPYmoodmFsKSB7XG4gIHJldHVybiB0eXBlb2YgdmFsLnRocm93ID09PSAnZnVuY3Rpb24nXG4gICAgJiYgdHlwZW9mIHZhbC5yZXR1cm4gPT09ICdmdW5jdGlvbidcbiAgICAmJiB0eXBlb2YgdmFsLm5leHQgPT09ICdmdW5jdGlvbic7XG59XG5cbmZ1bmN0aW9uIGlzQXJndW1lbnRzKHZhbCkge1xuICB0cnkge1xuICAgIGlmICh0eXBlb2YgdmFsLmxlbmd0aCA9PT0gJ251bWJlcicgJiYgdHlwZW9mIHZhbC5jYWxsZWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NhbGxlZScpICE9PSAtMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBJZiB5b3UgbmVlZCB0byBzdXBwb3J0IFNhZmFyaSA1LTcgKDgtMTAgeXItb2xkIGJyb3dzZXIpLFxuICogdGFrZSBhIGxvb2sgYXQgaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pcy1idWZmZXJcbiAqL1xuXG5mdW5jdGlvbiBpc0J1ZmZlcih2YWwpIHtcbiAgaWYgKHZhbC5jb25zdHJ1Y3RvciAmJiB0eXBlb2YgdmFsLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHZhbC5jb25zdHJ1Y3Rvci5pc0J1ZmZlcih2YWwpO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cbiIsIi8qKlxuICogQSBwcml2YXRlIHN0cmluZyB0byBpZGVudGlmeSBzdHJ1Y3RzIGJ5LlxuICpcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgSVNfU1RSVUNUID0gJ0BAX19TVFJVQ1RfX0BAJ1xuXG4vKipcbiAqIEEgcHJpdmF0ZSBzdHJpbmcgdG8gcmVmZXIgdG8gYSBzdHJ1Y3QncyBraW5kLlxuICpcbiAqIEB0eXBlIHtTdHJpbmd9XG4gKi9cblxuY29uc3QgS0lORCA9ICdAQF9fS0lORF9fQEAnXG5cbi8qKlxuICogRXhwb3J0LlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxuZXhwb3J0IHsgSVNfU1RSVUNULCBLSU5EIH1cbiIsImltcG9ydCB7IElTX1NUUlVDVCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuXG4vKipcbiAqIENoZWNrIGlmIGEgYHZhbHVlYCBpcyBhIHN0cnVjdC5cbiAqXG4gKiBAcGFyYW0ge0FueX0gdmFsdWVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU3RydWN0KHZhbHVlKSB7XG4gIHJldHVybiAhISh2YWx1ZSAmJiB2YWx1ZVtJU19TVFJVQ1RdKVxufVxuXG4vKipcbiAqIFJlc29sdmUgYGRlZmF1bHRzYCwgZm9yIGFuIG9wdGlvbmFsIGB2YWx1ZWAuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbnxBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge0FueX0gdmFsdWVcbiAqIEByZXR1cm4ge0FueX1cbiAqL1xuXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzLCB2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIGRlZmF1bHRzID09PSAnZnVuY3Rpb24nID8gZGVmYXVsdHModmFsdWUpIDogZGVmYXVsdHNcbn1cbiIsImltcG9ydCBraW5kT2YgZnJvbSAna2luZC1vZidcblxuaW1wb3J0IHsgS0lORCB9IGZyb20gJy4vY29uc3RhbnRzJ1xuaW1wb3J0IHsgaXNTdHJ1Y3QsIHJlc29sdmVEZWZhdWx0cyB9IGZyb20gJy4vdXRpbHMnXG5cbi8qKlxuICogS2luZC5cbiAqXG4gKiBAdHlwZSB7S2luZH1cbiAqL1xuXG5jbGFzcyBLaW5kIHtcbiAgY29uc3RydWN0b3IobmFtZSwgdHlwZSwgdmFsaWRhdGUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lXG4gICAgdGhpcy50eXBlID0gdHlwZVxuICAgIHRoaXMudmFsaWRhdGUgPSB2YWxpZGF0ZVxuICB9XG59XG5cbi8qKlxuICogQW55LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl8RnVuY3Rpb258T2JqZWN0fFN0cmluZ30gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gYW55KHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgaWYgKGlzU3RydWN0KHNjaGVtYSkpIHtcbiAgICByZXR1cm4gc2NoZW1hW0tJTkRdXG4gIH1cblxuICBpZiAoc2NoZW1hIGluc3RhbmNlb2YgS2luZCkge1xuICAgIHJldHVybiBzY2hlbWFcbiAgfVxuXG4gIHN3aXRjaCAoa2luZE9mKHNjaGVtYSkpIHtcbiAgICBjYXNlICdhcnJheSc6IHtcbiAgICAgIHJldHVybiBzY2hlbWEubGVuZ3RoID4gMVxuICAgICAgICA/IHR1cGxlKHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpXG4gICAgICAgIDogbGlzdChzY2hlbWEsIGRlZmF1bHRzLCBvcHRpb25zKVxuICAgIH1cblxuICAgIGNhc2UgJ2Z1bmN0aW9uJzoge1xuICAgICAgcmV0dXJuIGZ1bmMoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucylcbiAgICB9XG5cbiAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICByZXR1cm4gb2JqZWN0KHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpXG4gICAgfVxuXG4gICAgY2FzZSAnc3RyaW5nJzoge1xuICAgICAgbGV0IHJlcXVpcmVkID0gdHJ1ZVxuICAgICAgbGV0IHR5cGVcblxuICAgICAgaWYgKHNjaGVtYS5lbmRzV2l0aCgnPycpKSB7XG4gICAgICAgIHJlcXVpcmVkID0gZmFsc2VcbiAgICAgICAgc2NoZW1hID0gc2NoZW1hLnNsaWNlKDAsIC0xKVxuICAgICAgfVxuXG4gICAgICBpZiAoc2NoZW1hLmluY2x1ZGVzKCd8JykpIHtcbiAgICAgICAgY29uc3Qgc2NhbGFycyA9IHNjaGVtYS5zcGxpdCgvXFxzKlxcfFxccyovZylcbiAgICAgICAgdHlwZSA9IHVuaW9uKHNjYWxhcnMsIGRlZmF1bHRzLCBvcHRpb25zKVxuICAgICAgfSBlbHNlIGlmIChzY2hlbWEuaW5jbHVkZXMoJyYnKSkge1xuICAgICAgICBjb25zdCBzY2FsYXJzID0gc2NoZW1hLnNwbGl0KC9cXHMqJlxccyovZylcbiAgICAgICAgdHlwZSA9IGludGVyc2VjdGlvbihzY2FsYXJzLCBkZWZhdWx0cywgb3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHR5cGUgPSBzY2FsYXIoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucylcbiAgICAgIH1cblxuICAgICAgaWYgKCFyZXF1aXJlZCkge1xuICAgICAgICB0eXBlID0gb3B0aW9uYWwodHlwZSwgdW5kZWZpbmVkLCBvcHRpb25zKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdHlwZVxuICAgIH1cbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYEEgc2NoZW1hIGRlZmluaXRpb24gbXVzdCBiZSBhbiBvYmplY3QsIGFycmF5LCBzdHJpbmcgb3IgZnVuY3Rpb24sIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gXG4gICAgKVxuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApXG4gIH1cbn1cblxuLyoqXG4gKiBEaWN0LlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNjaGVtYVxuICogQHBhcmFtIHtPYmplY3R9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGRpY3Qoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdhcnJheScgfHwgc2NoZW1hLmxlbmd0aCAhPT0gMikge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBEaWN0IHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IHdpdGggdHdvIGVsZW1lbnRzLCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IG9iaiA9IHNjYWxhcignb2JqZWN0JywgdW5kZWZpbmVkLCBvcHRpb25zKVxuICBjb25zdCBrZXlzID0gYW55KHNjaGVtYVswXSwgdW5kZWZpbmVkLCBvcHRpb25zKVxuICBjb25zdCB2YWx1ZXMgPSBhbnkoc2NoZW1hWzFdLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gIGNvbnN0IG5hbWUgPSAnZGljdCdcbiAgY29uc3QgdHlwZSA9IGBkaWN0PCR7a2V5cy50eXBlfSwke3ZhbHVlcy50eXBlfT5gXG4gIGNvbnN0IHZhbGlkYXRlID0gdmFsdWUgPT4ge1xuICAgIGNvbnN0IHJlc29sdmVkID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzKVxuICAgIHZhbHVlID0gcmVzb2x2ZWQgPyB7IC4uLnJlc29sdmVkLCAuLi52YWx1ZSB9IDogdmFsdWVcbiAgICBjb25zdCBbZXJyb3JdID0gb2JqLnZhbGlkYXRlKHZhbHVlKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBlcnJvci50eXBlID0gdHlwZVxuICAgICAgcmV0dXJuIFtlcnJvcl1cbiAgICB9XG5cbiAgICBjb25zdCByZXQgPSB7fVxuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBmb3IgKGxldCBrIGluIHZhbHVlKSB7XG4gICAgICBjb25zdCB2ID0gdmFsdWVba11cbiAgICAgIGNvbnN0IFtlLCByXSA9IGtleXMudmFsaWRhdGUoaylcblxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgYWxsRSA9IGUuZXJyb3JzIHx8IFtlXVxuICAgICAgICBhbGxFLmZvckVhY2goc2luZ2xlRSA9PiB7XG4gICAgICAgICAgc2luZ2xlRS5wYXRoID0gW2tdLmNvbmNhdChzaW5nbGVFLnBhdGgpXG4gICAgICAgICAgc2luZ2xlRS5kYXRhID0gdmFsdWVcbiAgICAgICAgICBlcnJvcnMucHVzaChzaW5nbGVFKVxuICAgICAgICB9KVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBrID0gclxuICAgICAgY29uc3QgW2UyLCByMl0gPSB2YWx1ZXMudmFsaWRhdGUodilcblxuICAgICAgaWYgKGUyKSB7XG4gICAgICAgIGNvbnN0IGFsbEUyID0gZTIuZXJyb3JzIHx8IFtlMl1cbiAgICAgICAgYWxsRTIuZm9yRWFjaChzaW5nbGVFID0+IHtcbiAgICAgICAgICBzaW5nbGVFLnBhdGggPSBba10uY29uY2F0KHNpbmdsZUUucGF0aClcbiAgICAgICAgICBzaW5nbGVFLmRhdGEgPSB2YWx1ZVxuICAgICAgICAgIGVycm9ycy5wdXNoKHNpbmdsZUUpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIHJldFtrXSA9IHIyXG4gICAgfVxuXG4gICAgaWYgKGVycm9ycy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGZpcnN0ID0gZXJyb3JzWzBdXG4gICAgICBmaXJzdC5lcnJvcnMgPSBlcnJvcnNcbiAgICAgIHJldHVybiBbZmlyc3RdXG4gICAgfVxuXG4gICAgcmV0dXJuIFt1bmRlZmluZWQsIHJldF1cbiAgfVxuXG4gIHJldHVybiBuZXcgS2luZChuYW1lLCB0eXBlLCB2YWxpZGF0ZSlcbn1cblxuLyoqXG4gKiBFbnVtLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGVuKHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgaWYgKGtpbmRPZihzY2hlbWEpICE9PSAnYXJyYXknKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEVudW0gc3RydWN0cyBtdXN0IGJlIGRlZmluZWQgYXMgYW4gYXJyYXksIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZSA9ICdlbnVtJ1xuICBjb25zdCB0eXBlID0gc2NoZW1hXG4gICAgLm1hcChzID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShzKVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gU3RyaW5nKHMpXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignIHwgJylcblxuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZSA9IHJlc29sdmVEZWZhdWx0cyhkZWZhdWx0cykpID0+IHtcbiAgICByZXR1cm4gc2NoZW1hLmluY2x1ZGVzKHZhbHVlKVxuICAgICAgPyBbdW5kZWZpbmVkLCB2YWx1ZV1cbiAgICAgIDogW3sgZGF0YTogdmFsdWUsIHBhdGg6IFtdLCB2YWx1ZSwgdHlwZSB9XVxuICB9XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKVxufVxuXG4vKipcbiAqIEVudW1zLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGVudW1zKHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgY29uc3QgZSA9IGVuKHNjaGVtYSwgdW5kZWZpbmVkLCBvcHRpb25zKVxuICBjb25zdCBsID0gbGlzdChbZV0sIGRlZmF1bHRzLCBvcHRpb25zKVxuICByZXR1cm4gbFxufVxuXG4vKipcbiAqIEZ1bmN0aW9uLlxuICpcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGZ1bmMoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdmdW5jdGlvbicpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgRnVuY3Rpb24gc3RydWN0cyBtdXN0IGJlIGRlZmluZWQgYXMgYSBmdW5jdGlvbiwgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YClcbiAgICB9XG4gIH1cblxuICBjb25zdCBuYW1lID0gJ2Z1bmN0aW9uJ1xuICBjb25zdCB0eXBlID0gJzxmdW5jdGlvbj4nXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzKSwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IHNjaGVtYSh2YWx1ZSwgZGF0YSlcbiAgICBsZXQgZmFpbHVyZSA9IHsgcGF0aDogW10sIHJlYXNvbjogbnVsbCB9XG4gICAgbGV0IGlzVmFsaWRcblxuICAgIHN3aXRjaCAoa2luZE9mKHJlc3VsdCkpIHtcbiAgICAgIGNhc2UgJ2Jvb2xlYW4nOiB7XG4gICAgICAgIGlzVmFsaWQgPSByZXN1bHRcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cbiAgICAgIGNhc2UgJ3N0cmluZyc6IHtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlXG4gICAgICAgIGZhaWx1cmUucmVhc29uID0gcmVzdWx0XG4gICAgICAgIGJyZWFrXG4gICAgICB9XG4gICAgICBjYXNlICdvYmplY3QnOiB7XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZVxuICAgICAgICBmYWlsdXJlID0geyAuLi5mYWlsdXJlLCAuLi5yZXN1bHQgfVxuICAgICAgICBicmVha1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBWYWxpZGF0b3IgZnVuY3Rpb25zIG11c3QgcmV0dXJuIGEgYm9vbGVhbiwgYW4gZXJyb3IgcmVhc29uIHN0cmluZyBvciBhbiBlcnJvciByZWFzb24gb2JqZWN0LCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YFxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH1gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlzVmFsaWRcbiAgICAgID8gW3VuZGVmaW5lZCwgdmFsdWVdXG4gICAgICA6IFt7IHR5cGUsIHZhbHVlLCBkYXRhOiB2YWx1ZSwgLi4uZmFpbHVyZSB9XVxuICB9XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKVxufVxuXG4vKipcbiAqIEluc3RhbmNlLlxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGluc3RhbmNlKHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgY29uc3QgbmFtZSA9ICdpbnN0YW5jZSdcbiAgY29uc3QgdHlwZSA9IGBpbnN0YW5jZTwke3NjaGVtYS5uYW1lfT5gXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzKSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIHNjaGVtYVxuICAgICAgPyBbdW5kZWZpbmVkLCB2YWx1ZV1cbiAgICAgIDogW3sgZGF0YTogdmFsdWUsIHBhdGg6IFtdLCB2YWx1ZSwgdHlwZSB9XVxuICB9XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKVxufVxuXG4vKipcbiAqIEludGVyZmFjZS5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gaW50ZXIoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEludGVyZmFjZSBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBvYmplY3QsIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApXG4gICAgfVxuICB9XG5cbiAgY29uc3Qga3MgPSBbXVxuICBjb25zdCBwcm9wZXJ0aWVzID0ge31cblxuICBmb3IgKGNvbnN0IGtleSBpbiBzY2hlbWEpIHtcbiAgICBrcy5wdXNoKGtleSlcbiAgICBjb25zdCBzID0gc2NoZW1hW2tleV1cbiAgICBjb25zdCBraW5kID0gYW55KHMsIHVuZGVmaW5lZCwgb3B0aW9ucylcbiAgICBwcm9wZXJ0aWVzW2tleV0gPSBraW5kXG4gIH1cblxuICBjb25zdCBuYW1lID0gJ2ludGVyZmFjZSdcbiAgY29uc3QgdHlwZSA9IGB7JHtrcy5qb2luKCl9fWBcbiAgY29uc3QgdmFsaWRhdGUgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgcmVzb2x2ZWQgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMpXG4gICAgdmFsdWUgPSByZXNvbHZlZCA/IHsgLi4ucmVzb2x2ZWQsIC4uLnZhbHVlIH0gOiB2YWx1ZVxuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgY29uc3QgcmV0ID0gdmFsdWVcblxuICAgIGZvciAoY29uc3Qga2V5IGluIHByb3BlcnRpZXMpIHtcbiAgICAgIGxldCB2ID0gdmFsdWVba2V5XVxuICAgICAgY29uc3Qga2luZCA9IHByb3BlcnRpZXNba2V5XVxuXG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkZWZhdWx0cyAmJiBkZWZhdWx0c1trZXldXG4gICAgICAgIHYgPSByZXNvbHZlRGVmYXVsdHMoZCwgdmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtlLCByXSA9IGtpbmQudmFsaWRhdGUodiwgdmFsdWUpXG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IGFsbEUgPSBlLmVycm9ycyB8fCBbZV1cbiAgICAgICAgYWxsRS5mb3JFYWNoKHNpbmdsZUUgPT4ge1xuICAgICAgICAgIHNpbmdsZUUucGF0aCA9IFtrZXldLmNvbmNhdChzaW5nbGVFLnBhdGgpXG4gICAgICAgICAgc2luZ2xlRS5kYXRhID0gdmFsdWVcbiAgICAgICAgICBlcnJvcnMucHVzaChzaW5nbGVFKVxuICAgICAgICB9KVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBpZiAoa2V5IGluIHZhbHVlIHx8IHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXRba2V5XSA9IHJcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZmlyc3QgPSBlcnJvcnNbMF1cbiAgICAgIGZpcnN0LmVycm9ycyA9IGVycm9yc1xuICAgICAgcmV0dXJuIFtmaXJzdF1cbiAgICB9XG5cbiAgICByZXR1cm4gW3VuZGVmaW5lZCwgcmV0XVxuICB9XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKVxufVxuXG4vKipcbiAqIExhenkuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gbGF6eShzY2hlbWEsIGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBMYXp5IHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHNjaGVtYSwgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YClcbiAgICB9XG4gIH1cblxuICBsZXQga2luZFxuICBsZXQgc3RydWN0XG4gIGNvbnN0IG5hbWUgPSAnbGF6eSdcbiAgY29uc3QgdHlwZSA9IGBsYXp5Li4uYFxuICBjb25zdCBjb21waWxlID0gdmFsdWUgPT4ge1xuICAgIHN0cnVjdCA9IHNjaGVtYSgpXG4gICAga2luZC5uYW1lID0gc3RydWN0LmtpbmRcbiAgICBraW5kLnR5cGUgPSBzdHJ1Y3QudHlwZVxuICAgIGtpbmQudmFsaWRhdGUgPSBzdHJ1Y3QudmFsaWRhdGVcbiAgICByZXR1cm4ga2luZC52YWxpZGF0ZSh2YWx1ZSlcbiAgfVxuXG4gIGtpbmQgPSBuZXcgS2luZChuYW1lLCB0eXBlLCBjb21waWxlKVxuICByZXR1cm4ga2luZFxufVxuXG4vKipcbiAqIER5bmFtaWMuXG4gKlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY3JlYXRlU2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gZHluYW1pYyhjcmVhdGVTY2hlbWEsIGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2YoY3JlYXRlU2NoZW1hKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBEeW5hbWljIHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGEgZnVuY3Rpb24sIGJ1dCB5b3UgcGFzc2VkOiAke2NyZWF0ZVNjaGVtYX1gXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7Y3JlYXRlU2NoZW1hfWApXG4gICAgfVxuICB9XG5cbiAgY29uc3QgbmFtZSA9ICdkeW5hbWljJ1xuICBjb25zdCB0eXBlID0gJ2R5bmFtaWMuLi4nXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzKSwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHNjaGVtYSA9IGNyZWF0ZVNjaGVtYSh2YWx1ZSwgZGF0YSlcblxuICAgIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgIGBEeW5hbWljIHN0cnVjdHMgbXVzdCByZXR1cm4gYSBzY2hlbWEsIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gXG4gICAgICAgIClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgW2Vycm9yLCByZXN1bHRdID0gc2NoZW1hLnZhbGlkYXRlKHZhbHVlKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICByZXR1cm4gW2Vycm9yXVxuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXN1bHRdXG4gIH1cblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpXG59XG5cbi8qKlxuICogTGlzdC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzY2hlbWFcbiAqIEBwYXJhbSB7QXJyYXl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIGxpc3Qoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdhcnJheScgfHwgc2NoZW1hLmxlbmd0aCAhPT0gMSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBMaXN0IHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIGFycmF5IHdpdGggYSBzaW5nbGUgZWxlbWVudCwgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YClcbiAgICB9XG4gIH1cblxuICBjb25zdCBhcnJheSA9IHNjYWxhcignYXJyYXknLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gIGNvbnN0IGVsZW1lbnQgPSBhbnkoc2NoZW1hWzBdLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gIGNvbnN0IG5hbWUgPSAnbGlzdCdcbiAgY29uc3QgdHlwZSA9IGBbJHtlbGVtZW50LnR5cGV9XWBcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMpKSA9PiB7XG4gICAgY29uc3QgW2Vycm9yLCByZXN1bHRdID0gYXJyYXkudmFsaWRhdGUodmFsdWUpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGVycm9yLnR5cGUgPSB0eXBlXG4gICAgICByZXR1cm4gW2Vycm9yXVxuICAgIH1cblxuICAgIHZhbHVlID0gcmVzdWx0XG4gICAgY29uc3QgZXJyb3JzID0gW11cbiAgICBjb25zdCByZXQgPSBbXVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YWx1ZS5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgdiA9IHZhbHVlW2ldXG4gICAgICBjb25zdCBbZSwgcl0gPSBlbGVtZW50LnZhbGlkYXRlKHYpXG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IGFsbEUgPSBlLmVycm9ycyB8fCBbZV1cbiAgICAgICAgYWxsRS5mb3JFYWNoKHNpbmdsZUUgPT4ge1xuICAgICAgICAgIHNpbmdsZUUucGF0aCA9IFtpXS5jb25jYXQoc2luZ2xlRS5wYXRoKVxuICAgICAgICAgIHNpbmdsZUUuZGF0YSA9IHZhbHVlXG4gICAgICAgICAgZXJyb3JzLnB1c2goc2luZ2xlRSlcbiAgICAgICAgfSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcmV0W2ldID0gclxuICAgIH1cblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdCA9IGVycm9yc1swXVxuICAgICAgZmlyc3QuZXJyb3JzID0gZXJyb3JzXG4gICAgICByZXR1cm4gW2ZpcnN0XVxuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXRdXG4gIH1cblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpXG59XG5cbi8qKlxuICogTGl0ZXJhbC5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzY2hlbWFcbiAqIEBwYXJhbSB7QW55fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBsaXRlcmFsKHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgY29uc3QgbmFtZSA9ICdsaXRlcmFsJ1xuICBjb25zdCB0eXBlID0gYGxpdGVyYWw6ICR7SlNPTi5zdHJpbmdpZnkoc2NoZW1hKX1gXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzKSkgPT4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gc2NoZW1hXG4gICAgICA/IFt1bmRlZmluZWQsIHZhbHVlXVxuICAgICAgOiBbeyBkYXRhOiB2YWx1ZSwgcGF0aDogW10sIHZhbHVlLCB0eXBlIH1dXG4gIH1cblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpXG59XG5cbi8qKlxuICogT2JqZWN0LlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBzY2hlbWFcbiAqIEBwYXJhbSB7T2JqZWN0fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBvYmplY3Qoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdvYmplY3QnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE9iamVjdCBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBvYmplY3QsIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb2JqID0gc2NhbGFyKCdvYmplY3QnLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gIGNvbnN0IGtzID0gW11cbiAgY29uc3QgcHJvcGVydGllcyA9IHt9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hKSB7XG4gICAga3MucHVzaChrZXkpXG4gICAgY29uc3QgcyA9IHNjaGVtYVtrZXldXG4gICAgY29uc3Qga2luZCA9IGFueShzLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgcHJvcGVydGllc1trZXldID0ga2luZFxuICB9XG5cbiAgY29uc3QgbmFtZSA9ICdvYmplY3QnXG4gIGNvbnN0IHR5cGUgPSBgeyR7a3Muam9pbigpfX1gXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzKSkgPT4ge1xuICAgIGNvbnN0IFtlcnJvcl0gPSBvYmoudmFsaWRhdGUodmFsdWUpXG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIGVycm9yLnR5cGUgPSB0eXBlXG4gICAgICByZXR1cm4gW2Vycm9yXVxuICAgIH1cblxuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgY29uc3QgcmV0ID0ge31cbiAgICBjb25zdCB2YWx1ZUtleXMgPSBPYmplY3Qua2V5cyh2YWx1ZSlcbiAgICBjb25zdCBwcm9wZXJ0aWVzS2V5cyA9IE9iamVjdC5rZXlzKHByb3BlcnRpZXMpXG4gICAgY29uc3Qga2V5cyA9IG5ldyBTZXQodmFsdWVLZXlzLmNvbmNhdChwcm9wZXJ0aWVzS2V5cykpXG5cbiAgICBrZXlzLmZvckVhY2goa2V5ID0+IHtcbiAgICAgIGxldCB2ID0gdmFsdWVba2V5XVxuICAgICAgY29uc3Qga2luZCA9IHByb3BlcnRpZXNba2V5XVxuXG4gICAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGQgPSBkZWZhdWx0cyAmJiBkZWZhdWx0c1trZXldXG4gICAgICAgIHYgPSByZXNvbHZlRGVmYXVsdHMoZCwgdmFsdWUpXG4gICAgICB9XG5cbiAgICAgIGlmICgha2luZCkge1xuICAgICAgICBjb25zdCBlID0geyBkYXRhOiB2YWx1ZSwgcGF0aDogW2tleV0sIHZhbHVlOiB2IH1cbiAgICAgICAgZXJyb3JzLnB1c2goZSlcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IFtlLCByXSA9IGtpbmQudmFsaWRhdGUodiwgdmFsdWUpXG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IGFsbEUgPSBlLmVycm9ycyB8fCBbZV1cbiAgICAgICAgYWxsRS5mb3JFYWNoKHNpbmdsZUUgPT4ge1xuICAgICAgICAgIHNpbmdsZUUucGF0aCA9IFtrZXldLmNvbmNhdChzaW5nbGVFLnBhdGgpXG4gICAgICAgICAgc2luZ2xlRS5kYXRhID0gdmFsdWVcbiAgICAgICAgICBlcnJvcnMucHVzaChzaW5nbGVFKVxuICAgICAgICB9KVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKGtleSBpbiB2YWx1ZSB8fCByICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0W2tleV0gPSByXG4gICAgICB9XG4gICAgfSlcblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdCA9IGVycm9yc1swXVxuICAgICAgZmlyc3QuZXJyb3JzID0gZXJyb3JzXG4gICAgICByZXR1cm4gW2ZpcnN0XVxuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXRdXG4gIH1cblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpXG59XG5cbi8qKlxuICogT3B0aW9uYWwuXG4gKlxuICogQHBhcmFtIHtBbnl9IHNjaGVtYVxuICogQHBhcmFtIHtBbnl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIG9wdGlvbmFsKHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIHVuaW9uKFtzY2hlbWEsICd1bmRlZmluZWQnXSwgZGVmYXVsdHMsIG9wdGlvbnMpXG59XG5cbi8qKlxuICogUGFydGlhbC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gc2NoZW1hXG4gKiBAcGFyYW0ge09iamVjdH0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gcGFydGlhbChzY2hlbWEsIGRlZmF1bHRzLCBvcHRpb25zKSB7XG4gIGlmIChraW5kT2Yoc2NoZW1hKSAhPT0gJ29iamVjdCcpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgUGFydGlhbCBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhbiBvYmplY3QsIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb2JqID0gc2NhbGFyKCdvYmplY3QnLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gIGNvbnN0IGtzID0gW11cbiAgY29uc3QgcHJvcGVydGllcyA9IHt9XG5cbiAgZm9yIChjb25zdCBrZXkgaW4gc2NoZW1hKSB7XG4gICAga3MucHVzaChrZXkpXG4gICAgY29uc3QgcyA9IHNjaGVtYVtrZXldXG4gICAgY29uc3Qga2luZCA9IGFueShzLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gICAgcHJvcGVydGllc1trZXldID0ga2luZFxuICB9XG5cbiAgY29uc3QgbmFtZSA9ICdwYXJ0aWFsJ1xuICBjb25zdCB0eXBlID0gYHske2tzLmpvaW4oKX0sLi4ufWBcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMpKSA9PiB7XG4gICAgY29uc3QgW2Vycm9yXSA9IG9iai52YWxpZGF0ZSh2YWx1ZSlcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IudHlwZSA9IHR5cGVcbiAgICAgIHJldHVybiBbZXJyb3JdXG4gICAgfVxuXG4gICAgY29uc3QgZXJyb3JzID0gW11cbiAgICBjb25zdCByZXQgPSB7fVxuXG4gICAgZm9yIChjb25zdCBrZXkgaW4gcHJvcGVydGllcykge1xuICAgICAgbGV0IHYgPSB2YWx1ZVtrZXldXG4gICAgICBjb25zdCBraW5kID0gcHJvcGVydGllc1trZXldXG5cbiAgICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc3QgZCA9IGRlZmF1bHRzICYmIGRlZmF1bHRzW2tleV1cbiAgICAgICAgdiA9IHJlc29sdmVEZWZhdWx0cyhkLCB2YWx1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgW2UsIHJdID0ga2luZC52YWxpZGF0ZSh2LCB2YWx1ZSlcblxuICAgICAgaWYgKGUpIHtcbiAgICAgICAgY29uc3QgYWxsRSA9IGUuZXJyb3JzIHx8IFtlXVxuICAgICAgICBhbGxFLmZvckVhY2goc2luZ2xlRSA9PiB7XG4gICAgICAgICAgc2luZ2xlRS5wYXRoID0gW2tleV0uY29uY2F0KHNpbmdsZUUucGF0aClcbiAgICAgICAgICBzaW5nbGVFLmRhdGEgPSB2YWx1ZVxuICAgICAgICAgIGVycm9ycy5wdXNoKHNpbmdsZUUpXG4gICAgICAgIH0pXG4gICAgICAgIGNvbnRpbnVlXG4gICAgICB9XG5cbiAgICAgIGlmIChrZXkgaW4gdmFsdWUgfHwgciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldFtrZXldID0gclxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdCA9IGVycm9yc1swXVxuICAgICAgZmlyc3QuZXJyb3JzID0gZXJyb3JzXG4gICAgICByZXR1cm4gW2ZpcnN0XVxuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXRdXG4gIH1cblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpXG59XG5cbi8qKlxuICogU2NhbGFyLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzY2hlbWFcbiAqIEBwYXJhbSB7QW55fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBzY2FsYXIoc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFNjYWxhciBzdHJ1Y3RzIG11c3QgYmUgZGVmaW5lZCBhcyBhIHN0cmluZywgYnV0IHlvdSBwYXNzZWQ6ICR7c2NoZW1hfWBcbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIHNjaGVtYTogJHtzY2hlbWF9YClcbiAgICB9XG4gIH1cblxuICBjb25zdCB7IHR5cGVzIH0gPSBvcHRpb25zXG4gIGNvbnN0IGZuID0gdHlwZXNbc2NoZW1hXVxuXG4gIGlmIChraW5kT2YoZm4pICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYE5vIHN0cnVjdCB2YWxpZGF0b3IgZnVuY3Rpb24gZm91bmQgZm9yIHR5cGUgXCIke3NjaGVtYX1cIi5gXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCB0eXBlOiAke3NjaGVtYX1gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGtpbmQgPSBmdW5jKGZuLCBkZWZhdWx0cywgb3B0aW9ucylcbiAgY29uc3QgbmFtZSA9ICdzY2FsYXInXG4gIGNvbnN0IHR5cGUgPSBzY2hlbWFcbiAgY29uc3QgdmFsaWRhdGUgPSB2YWx1ZSA9PiB7XG4gICAgY29uc3QgW2Vycm9yLCByZXN1bHRdID0ga2luZC52YWxpZGF0ZSh2YWx1ZSlcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgZXJyb3IudHlwZSA9IHR5cGVcbiAgICAgIHJldHVybiBbZXJyb3JdXG4gICAgfVxuXG4gICAgcmV0dXJuIFt1bmRlZmluZWQsIHJlc3VsdF1cbiAgfVxuXG4gIHJldHVybiBuZXcgS2luZChuYW1lLCB0eXBlLCB2YWxpZGF0ZSlcbn1cblxuLyoqXG4gKiBUdXBsZS5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzY2hlbWFcbiAqIEBwYXJhbSB7QXJyYXl9IGRlZmF1bHRzXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5cbmZ1bmN0aW9uIHR1cGxlKHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMpIHtcbiAgaWYgKGtpbmRPZihzY2hlbWEpICE9PSAnYXJyYXknKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFR1cGxlIHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIGFycmF5LCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGtpbmRzID0gc2NoZW1hLm1hcChzID0+IGFueShzLCB1bmRlZmluZWQsIG9wdGlvbnMpKVxuICBjb25zdCBhcnJheSA9IHNjYWxhcignYXJyYXknLCB1bmRlZmluZWQsIG9wdGlvbnMpXG4gIGNvbnN0IG5hbWUgPSAndHVwbGUnXG4gIGNvbnN0IHR5cGUgPSBgWyR7a2luZHMubWFwKGsgPT4gay50eXBlKS5qb2luKCl9XWBcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMpKSA9PiB7XG4gICAgY29uc3QgW2Vycm9yXSA9IGFycmF5LnZhbGlkYXRlKHZhbHVlKVxuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBlcnJvci50eXBlID0gdHlwZVxuICAgICAgcmV0dXJuIFtlcnJvcl1cbiAgICB9XG5cbiAgICBjb25zdCByZXQgPSBbXVxuICAgIGNvbnN0IGVycm9ycyA9IFtdXG4gICAgY29uc3QgbGVuZ3RoID0gTWF0aC5tYXgodmFsdWUubGVuZ3RoLCBraW5kcy5sZW5ndGgpXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBraW5kID0ga2luZHNbaV1cbiAgICAgIGNvbnN0IHYgPSB2YWx1ZVtpXVxuXG4gICAgICBpZiAoIWtpbmQpIHtcbiAgICAgICAgY29uc3QgZSA9IHsgZGF0YTogdmFsdWUsIHBhdGg6IFtpXSwgdmFsdWU6IHYgfVxuICAgICAgICBlcnJvcnMucHVzaChlKVxuICAgICAgICBjb250aW51ZVxuICAgICAgfVxuXG4gICAgICBjb25zdCBbZSwgcl0gPSBraW5kLnZhbGlkYXRlKHYpXG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGNvbnN0IGFsbEUgPSBlLmVycm9ycyB8fCBbZV1cbiAgICAgICAgYWxsRS5mb3JFYWNoKHNpbmdsZUUgPT4ge1xuICAgICAgICAgIHNpbmdsZUUucGF0aCA9IFtpXS5jb25jYXQoc2luZ2xlRS5wYXRoKVxuICAgICAgICAgIHNpbmdsZUUuZGF0YSA9IHZhbHVlXG4gICAgICAgICAgZXJyb3JzLnB1c2goc2luZ2xlRSlcbiAgICAgICAgfSlcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgcmV0W2ldID0gclxuICAgIH1cblxuICAgIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgICBjb25zdCBmaXJzdCA9IGVycm9yc1swXVxuICAgICAgZmlyc3QuZXJyb3JzID0gZXJyb3JzXG4gICAgICByZXR1cm4gW2ZpcnN0XVxuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCByZXRdXG4gIH1cblxuICByZXR1cm4gbmV3IEtpbmQobmFtZSwgdHlwZSwgdmFsaWRhdGUpXG59XG5cbi8qKlxuICogVW5pb24uXG4gKlxuICogQHBhcmFtIHtBcnJheX0gc2NoZW1hXG4gKiBAcGFyYW0ge0FueX0gZGVmYXVsdHNcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKi9cblxuZnVuY3Rpb24gdW5pb24oc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdhcnJheScpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVW5pb24gc3RydWN0cyBtdXN0IGJlIGRlZmluZWQgYXMgYW4gYXJyYXksIGJ1dCB5b3UgcGFzc2VkOiAke3NjaGVtYX1gXG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBzY2hlbWE6ICR7c2NoZW1hfWApXG4gICAgfVxuICB9XG5cbiAgY29uc3Qga2luZHMgPSBzY2hlbWEubWFwKHMgPT4gYW55KHMsIHVuZGVmaW5lZCwgb3B0aW9ucykpXG4gIGNvbnN0IG5hbWUgPSAndW5pb24nXG4gIGNvbnN0IHR5cGUgPSBraW5kcy5tYXAoayA9PiBrLnR5cGUpLmpvaW4oJyB8ICcpXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlID0gcmVzb2x2ZURlZmF1bHRzKGRlZmF1bHRzKSkgPT4ge1xuICAgIGNvbnN0IGVycm9ycyA9IFtdXG5cbiAgICBmb3IgKGNvbnN0IGsgb2Yga2luZHMpIHtcbiAgICAgIGNvbnN0IFtlLCByXSA9IGsudmFsaWRhdGUodmFsdWUpXG5cbiAgICAgIGlmICghZSkge1xuICAgICAgICByZXR1cm4gW3VuZGVmaW5lZCwgcl1cbiAgICAgIH1cblxuICAgICAgZXJyb3JzLnB1c2goZSlcbiAgICB9XG4gICAgZXJyb3JzWzBdLnR5cGUgPSB0eXBlXG4gICAgcmV0dXJuIGVycm9yc1xuICB9XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKVxufVxuXG4vKipcbiAqIEludGVyc2VjdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0FycmF5fSBzY2hlbWFcbiAqIEBwYXJhbSB7QW55fSBkZWZhdWx0c1xuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqL1xuXG5mdW5jdGlvbiBpbnRlcnNlY3Rpb24oc2NoZW1hLCBkZWZhdWx0cywgb3B0aW9ucykge1xuICBpZiAoa2luZE9mKHNjaGVtYSkgIT09ICdhcnJheScpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgSW50ZXJzZWN0aW9uIHN0cnVjdHMgbXVzdCBiZSBkZWZpbmVkIGFzIGFuIGFycmF5LCBidXQgeW91IHBhc3NlZDogJHtzY2hlbWF9YFxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgc2NoZW1hOiAke3NjaGVtYX1gKVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHR5cGVzID0gc2NoZW1hLm1hcChzID0+IGFueShzLCB1bmRlZmluZWQsIG9wdGlvbnMpKVxuICBjb25zdCBuYW1lID0gJ2ludGVyc2VjdGlvbidcbiAgY29uc3QgdHlwZSA9IHR5cGVzLm1hcCh0ID0+IHQudHlwZSkuam9pbignICYgJylcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWUgPSByZXNvbHZlRGVmYXVsdHMoZGVmYXVsdHMpKSA9PiB7XG4gICAgbGV0IHYgPSB2YWx1ZVxuXG4gICAgZm9yIChjb25zdCB0IG9mIHR5cGVzKSB7XG4gICAgICBjb25zdCBbZSwgcl0gPSB0LnZhbGlkYXRlKHYpXG5cbiAgICAgIGlmIChlKSB7XG4gICAgICAgIGUudHlwZSA9IHR5cGVcbiAgICAgICAgcmV0dXJuIFtlXVxuICAgICAgfVxuXG4gICAgICB2ID0gclxuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCB2XVxuICB9XG5cbiAgcmV0dXJuIG5ldyBLaW5kKG5hbWUsIHR5cGUsIHZhbGlkYXRlKVxufVxuXG4vKipcbiAqIEtpbmRzLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxuY29uc3QgS2luZHMgPSB7XG4gIGFueSxcbiAgZGljdCxcbiAgZW51bTogZW4sXG4gIGVudW1zLFxuICBmdW5jdGlvbjogZnVuYyxcbiAgaW5zdGFuY2UsXG4gIGludGVyZmFjZTogaW50ZXIsXG4gIGxhenksXG4gIGxpc3QsXG4gIGxpdGVyYWwsXG4gIG9iamVjdCxcbiAgb3B0aW9uYWwsXG4gIHBhcnRpYWwsXG4gIHNjYWxhcixcbiAgdHVwbGUsXG4gIHVuaW9uLFxuICBpbnRlcnNlY3Rpb24sXG4gIGR5bmFtaWMsXG59XG5cbi8qKlxuICogRXhwb3J0LlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgS2luZHNcbiIsImltcG9ydCBraW5kT2YgZnJvbSAna2luZC1vZidcblxuLyoqXG4gKiBUaGUgdHlwZXMgdGhhdCBga2luZC1vZmAgc3VwcG9ydHMuXG4gKlxuICogQHR5cGUge0FycmF5fVxuICovXG5cbmNvbnN0IFRZUEVTID0gW1xuICAnYXJndW1lbnRzJyxcbiAgJ2FycmF5JyxcbiAgJ2Jvb2xlYW4nLFxuICAnYnVmZmVyJyxcbiAgJ2Vycm9yJyxcbiAgJ2Zsb2F0MzJhcnJheScsXG4gICdmbG9hdDY0YXJyYXknLFxuICAnZnVuY3Rpb24nLFxuICAnZ2VuZXJhdG9yZnVuY3Rpb24nLFxuICAnaW50MTZhcnJheScsXG4gICdpbnQzMmFycmF5JyxcbiAgJ2ludDhhcnJheScsXG4gICdtYXAnLFxuICAnbnVsbCcsXG4gICdudW1iZXInLFxuICAnb2JqZWN0JyxcbiAgJ3Byb21pc2UnLFxuICAncmVnZXhwJyxcbiAgJ3NldCcsXG4gICdzdHJpbmcnLFxuICAnc3ltYm9sJyxcbiAgJ3VpbnQxNmFycmF5JyxcbiAgJ3VpbnQzMmFycmF5JyxcbiAgJ3VpbnQ4YXJyYXknLFxuICAndWludDhjbGFtcGVkYXJyYXknLFxuICAndW5kZWZpbmVkJyxcbiAgJ3dlYWttYXAnLFxuICAnd2Vha3NldCcsXG5dXG5cbi8qKlxuICogVGhlIGRlZmF1bHQgdHlwZXMgdGhhdCBTdXBlcnN0cnVjdCBzaGlwcyB3aXRoLlxuICpcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxuY29uc3QgVHlwZXMgPSB7XG4gIGFueTogdmFsdWUgPT4gdmFsdWUgIT09IHVuZGVmaW5lZCxcbn1cblxuVFlQRVMuZm9yRWFjaCh0eXBlID0+IHtcbiAgVHlwZXNbdHlwZV0gPSB2YWx1ZSA9PiBraW5kT2YodmFsdWUpID09PSB0eXBlXG59KVxuXG4vKipcbiAqIEhhbmRsZSB0aGUgJ2RhdGUnIGNhc2Ugc3BlY2lhbGx5LCB0byB0aHJvdyBvdXQgaW52YWxpZCBgRGF0ZWAgb2JqZWN0cy5cbiAqXG4gKiBAcGFyYW0ge01peGVkfSB2YWx1ZVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuXG5UeXBlcy5kYXRlID0gdmFsdWUgPT4ga2luZE9mKHZhbHVlKSA9PT0gJ2RhdGUnICYmICFpc05hTih2YWx1ZSlcblxuLyoqXG4gKiBFeHBvcnQuXG4gKlxuICogQHR5cGUge09iamVjdH1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBUeXBlc1xuIiwiaW1wb3J0IEtpbmRzIGZyb20gJy4va2luZHMnXG5pbXBvcnQgU3RydWN0RXJyb3IgZnJvbSAnLi9lcnJvcidcbmltcG9ydCBUeXBlcyBmcm9tICcuL3R5cGVzJ1xuaW1wb3J0IHsgaXNTdHJ1Y3QgfSBmcm9tICcuL3V0aWxzJ1xuaW1wb3J0IHsgSVNfU1RSVUNULCBLSU5EIH0gZnJvbSAnLi9jb25zdGFudHMnXG5cbi8qKlxuICogQ3JlYXRlIGEgc3RydWN0IGZhY3Rvcnkgd2l0aCBhIGBjb25maWdgLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICovXG5cbmZ1bmN0aW9uIHN1cGVyc3RydWN0KGNvbmZpZyA9IHt9KSB7XG4gIGNvbnN0IHR5cGVzID0ge1xuICAgIC4uLlR5cGVzLFxuICAgIC4uLihjb25maWcudHlwZXMgfHwge30pLFxuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZSBhIGBraW5kYCBzdHJ1Y3Qgd2l0aCBgc2NoZW1hYCwgYGRlZmF1bHRzYCBhbmQgYG9wdGlvbnNgLlxuICAgKlxuICAgKiBAcGFyYW0ge0FueX0gc2NoZW1hXG4gICAqIEBwYXJhbSB7QW55fSBkZWZhdWx0c1xuICAgKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICAgKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAgICovXG5cbiAgZnVuY3Rpb24gc3RydWN0KHNjaGVtYSwgZGVmYXVsdHMsIG9wdGlvbnMgPSB7fSkge1xuICAgIGlmIChpc1N0cnVjdChzY2hlbWEpKSB7XG4gICAgICBzY2hlbWEgPSBzY2hlbWEuc2NoZW1hXG4gICAgfVxuXG4gICAgY29uc3Qga2luZCA9IEtpbmRzLmFueShzY2hlbWEsIGRlZmF1bHRzLCB7IC4uLm9wdGlvbnMsIHR5cGVzIH0pXG5cbiAgICBmdW5jdGlvbiBTdHJ1Y3QoZGF0YSkge1xuICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBTdHJ1Y3QpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAnVGhlIGBTdHJ1Y3RgIGNyZWF0aW9uIGZ1bmN0aW9uIHNob3VsZCBub3QgYmUgdXNlZCB3aXRoIHRoZSBgbmV3YCBrZXl3b3JkLidcbiAgICAgICAgICApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkIGBuZXdgIGtleXdvcmQhJylcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gU3RydWN0LmFzc2VydChkYXRhKVxuICAgIH1cblxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJ1Y3QsIElTX1NUUlVDVCwgeyB2YWx1ZTogdHJ1ZSB9KVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShTdHJ1Y3QsIEtJTkQsIHsgdmFsdWU6IGtpbmQgfSlcblxuICAgIFN0cnVjdC5raW5kID0ga2luZC5uYW1lXG4gICAgU3RydWN0LnR5cGUgPSBraW5kLnR5cGVcbiAgICBTdHJ1Y3Quc2NoZW1hID0gc2NoZW1hXG4gICAgU3RydWN0LmRlZmF1bHRzID0gZGVmYXVsdHNcbiAgICBTdHJ1Y3Qub3B0aW9ucyA9IG9wdGlvbnNcblxuICAgIFN0cnVjdC5hc3NlcnQgPSB2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBbZXJyb3IsIHJlc3VsdF0gPSBraW5kLnZhbGlkYXRlKHZhbHVlKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IFN0cnVjdEVycm9yKGVycm9yKVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuXG4gICAgU3RydWN0LnRlc3QgPSB2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBbZXJyb3JdID0ga2luZC52YWxpZGF0ZSh2YWx1ZSlcbiAgICAgIHJldHVybiAhZXJyb3JcbiAgICB9XG5cbiAgICBTdHJ1Y3QudmFsaWRhdGUgPSB2YWx1ZSA9PiB7XG4gICAgICBjb25zdCBbZXJyb3IsIHJlc3VsdF0gPSBraW5kLnZhbGlkYXRlKHZhbHVlKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIFtuZXcgU3RydWN0RXJyb3IoZXJyb3IpXVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gW3VuZGVmaW5lZCwgcmVzdWx0XVxuICAgIH1cblxuICAgIHJldHVybiBTdHJ1Y3RcbiAgfVxuXG4gIC8qKlxuICAgKiBNaXggaW4gYSBmYWN0b3J5IGZvciBlYWNoIHNwZWNpZmljIGtpbmQgb2Ygc3RydWN0LlxuICAgKi9cblxuICBPYmplY3Qua2V5cyhLaW5kcykuZm9yRWFjaChuYW1lID0+IHtcbiAgICBjb25zdCBraW5kID0gS2luZHNbbmFtZV1cblxuICAgIHN0cnVjdFtuYW1lXSA9IChzY2hlbWEsIGRlZmF1bHRzLCBvcHRpb25zKSA9PiB7XG4gICAgICBjb25zdCB0eXBlID0ga2luZChzY2hlbWEsIGRlZmF1bHRzLCB7IC4uLm9wdGlvbnMsIHR5cGVzIH0pXG4gICAgICBjb25zdCBzID0gc3RydWN0KHR5cGUsIGRlZmF1bHRzLCBvcHRpb25zKVxuICAgICAgcmV0dXJuIHNcbiAgICB9XG4gIH0pXG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgc3RydWN0IGZhY3RvcnkuXG4gICAqL1xuXG4gIHJldHVybiBzdHJ1Y3Rcbn1cblxuLyoqXG4gKiBFeHBvcnQuXG4gKlxuICogQHR5cGUge0Z1bmN0aW9ufVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHN1cGVyc3RydWN0XG4iLCJpbXBvcnQgU3RydWN0RXJyb3IgZnJvbSAnLi9lcnJvcidcbmltcG9ydCBzdXBlcnN0cnVjdCBmcm9tICcuL3N1cGVyc3RydWN0J1xuaW1wb3J0IHsgaXNTdHJ1Y3QgfSBmcm9tICcuL3V0aWxzJ1xuXG4vKipcbiAqIENyZWF0ZSBhIGNvbnZlbmllbmNlIGBzdHJ1Y3RgIGZhY3RvcnkgZm9yIHRoZSBkZWZhdWx0IHR5cGVzLlxuICpcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuXG5jb25zdCBzdHJ1Y3QgPSBzdXBlcnN0cnVjdCgpXG5cbi8qKlxuICogRXhwb3J0LlxuICpcbiAqIEB0eXBlIHtGdW5jdGlvbn1cbiAqL1xuXG5leHBvcnQgeyBzdHJ1Y3QsIHN1cGVyc3RydWN0LCBpc1N0cnVjdCwgU3RydWN0RXJyb3IgfVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBO0FBR0E7Ozs7QUE1QkE7QUFDQTtBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBdkJBO0FBQ0E7QUF5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFOQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUNoSUE7Ozs7Ozs7QUFNQTs7Ozs7OztBQVFBO0FDWkE7Ozs7Ozs7QUFPQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFKQTs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBQ0E7OztBQUtBOztBQUNBOzs7QUFHQTs7QUFDQTs7O0FBR0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFGQTtBQUlBOzs7QUFHQTtBQUNBOzs7QUFHQTs7OztBQUlBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7O0FBUUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQWpEQTtBQUNBO0FBbURBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFHQTs7QUFMQTtBQUNBO0FBU0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBRUE7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E7Ozs7QUFHQTs7QUFDQTtBQUNBOzs7O0FBR0E7O0FBQ0E7QUFDQTs7Ozs7O0FBSUE7QUFDQTtBQURBOzs7O0FBVUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQWpDQTtBQUNBO0FBbUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUZBO0FBRUE7QUFIQTtBQUNBO0FBS0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBQVFBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUF0Q0E7QUFDQTtBQXdDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7O0FBU0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQW5CQTtBQUNBO0FBcUJBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBQVFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFuQ0E7QUFDQTtBQXFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFGQTtBQUVBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7O0FBUUE7QUFDQTs7QUE1QkE7QUFDQTtBQStCQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFwREE7QUFDQTtBQXNEQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBOzs7O0FBUUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQTNDQTtBQUNBO0FBNkNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBUkE7QUFDQTtBQVVBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTs7OztBQVFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUEzQ0E7QUFDQTtBQTZDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFFQTtBQUNBO0FBYkE7QUFDQTtBQWVBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFkQTtBQUNBO0FBZ0JBOzs7Ozs7Ozs7QUFTQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7O0FBQUE7QUNsNkJBOzs7Ozs7QUFNQTs7Ozs7OztBQXFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7Ozs7Ozs7O0FBV0E7QUN0REE7Ozs7Ozs7O0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7QUFjQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7O0FBU0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBUEE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQVBBO0FBQ0E7QUFTQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBSEE7Ozs7O0FBY0E7O0FDcEdBOzs7Ozs7O0FBTUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=