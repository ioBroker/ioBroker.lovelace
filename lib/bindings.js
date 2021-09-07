'use strict';

function formatValue(value, decimals, _format) {
    if (typeof decimals !== 'number') {
        decimals = 2;
        _format = decimals;
    }

    //format = (_format === undefined) ? (that.isFloatComma) ? ".," : ",." : _format;
    // does not work...
    // using default german...
    const format = _format === undefined || _format === null ? '.,' : _format;

    if (typeof value !== 'number') {
        value = parseFloat(value);
    }
    return isNaN(value) ? '' : value.toFixed(decimals || 0).replace(format[0], format[1]).replace(/\B(?=(\d{3})+(?!\d))/g, format[0]);
}

function formatDate(dateObj, isDuration, _format) {
    // copied from js-controller/lib/adapter.js
    if ((typeof isDuration === 'string' && isDuration.toLowerCase() === 'duration') || isDuration === true) {
        isDuration = true;
    }
    if (typeof isDuration !== 'boolean') {
        _format = isDuration;
        isDuration = false;
    }

    if (!dateObj) {
        return '';
    }
    const type = typeof dateObj;
    if (type === 'string') dateObj = new Date(dateObj);

    if (type !== 'object') {
        const j = parseInt(dateObj, 10);
        if (j == dateObj) {
            // may this is interval
            if (j < 946681200) {
                isDuration = true;
                dateObj = new Date(dateObj);
            } else {
                // if less 2000.01.01 00:00:00
                dateObj = (j < 946681200000) ? new Date(j * 1000) : new Date(j);
            }
        } else {
            dateObj = new Date(dateObj);
        }
    }
    const format = _format || /*this.dateFormat || */'DD.MM.YYYY';

    if (isDuration) dateObj.setMilliseconds(dateObj.getMilliseconds() + dateObj.getTimezoneOffset() * 60 * 1000);

    const validFormatChars = 'YJГMМDTДhSчmмsс';
    let s = '';
    let result = '';

    function put(s) {
        let v = '';

        switch (s) {
            case 'YYYY':
            case 'JJJJ':
            case 'ГГГГ':
            case 'YY':
            case 'JJ':
            case 'ГГ':
                v = dateObj.getFullYear();
                if (s.length === 2) v %= 100;
                break;
            case 'MM':
            case 'M':
            case 'ММ':
            case 'М':
                v = dateObj.getMonth() + 1;
                if ((v < 10) && (s.length === 2)) v = '0' + v;
                break;
            case 'DD':
            case 'TT':
            case 'D':
            case 'T':
            case 'ДД':
            case 'Д':
                v = dateObj.getDate();
                if ((v < 10) && (s.length === 2)) v = '0' + v;
                break;
            case 'hh':
            case 'SS':
            case 'h':
            case 'S':
            case 'чч':
            case 'ч':
                v = dateObj.getHours();
                if ((v < 10) && (s.length === 2)) v = '0' + v;
                break;
            case 'mm':
            case 'm':
            case 'мм':
            case 'м':
                v = dateObj.getMinutes();
                if ((v < 10) && (s.length === 2)) v = '0' + v;
                break;
            case 'ss':
            case 's':
            case 'cc':
            case 'c':
                v = dateObj.getSeconds();
                if ((v < 10) && (s.length === 2)) v = '0' + v;
                v = v.toString();
                break;
            case 'sss':
            case 'ссс':
                v = dateObj.getMilliseconds();
                if (v < 10) {
                    v = '00' + v;
                } else if (v < 100) {
                    v = '0' + v;
                }
                v = v.toString();
        }
        return result += v;
    }

    for (let i = 0; i < format.length; i++) {
        if (validFormatChars.indexOf(format[i]) >= 0)
            s += format[i];
        else {
            put(s);
            s = '';
            result += format[i];
        }
    }
    put(s);
    return result;
}

function getSpecialValues(visOid, systemOid, state) {
    let member = 'val';
    if (visOid && systemOid !== visOid) {
        member = visOid.replace(systemOid + '.', '') || 'val';
    }
    return state[member];
}

function formatBinding(format, states, dateFormat) {
    const oids = extractBinding(format);

    if (!oids) {
        return format;
    }

    for (let t = 0; t < oids.length; t++) {
        let value;
        if (oids[t].systemOid) {
            value = getSpecialValues(oids[t].visOid, oids[t].systemOid, states[oids[t].systemOid]);
            if (value === undefined || value === null) {
                value = states[oids[t].systemOid] ? states[oids[t].systemOid].val : '';
            }
        }
        if (oids[t].operations) {
            for (let k = 0; k < oids[t].operations.length; k++) {
                let string = ''; // '(function() {';
                switch (oids[t].operations[k].op) {
                    case 'eval':
                        for (let a = 0; a < oids[t].operations[k].arg.length; a++) {
                            if (!oids[t].operations[k].arg[a].name) continue;
                            value = getSpecialValues(oids[t].operations[k].arg[a].visOid, oids[t].operations[k].arg[a].systemOid, states[oids[t].operations[k].arg[a].systemOid]);
                            if (value === undefined || value === null) {
                                value = states[oids[t].operations[k].arg[a].systemOid] ? states[oids[t].operations[k].arg[a].systemOid].val : '';
                            }
                            string += 'const ' + oids[t].operations[k].arg[a].name + ' = "' + value + '";';
                        }
                        /*const formula = oids[t].operations[k].formula;
                        if (formula && formula.indexOf('widget.') !== -1) {
                            string += 'const widget = ' + JSON.stringify(widget) + ';';
                        }*/
                        string += 'return ' + oids[t].operations[k].formula + ';';
                        //string += '}())';
                        try {
                            value = new Function(string)();
                        } catch (e) {
                            console.error('Error in eval[value]     : ' + format);
                            console.error('Error in eval[script]: ' + string);
                            console.error('Error in eval[error] : ' + e);
                            value = 0;
                        }
                        break;
                    case '*':
                        if (oids[t].operations[k].arg !== undefined && oids[t].operations[k].arg !== null) {
                            value = parseFloat(value) * oids[t].operations[k].arg;
                        }
                        break;
                    case '/':
                        if (oids[t].operations[k].arg !== undefined && oids[t].operations[k].arg !== null) {
                            value = parseFloat(value) / oids[t].operations[k].arg;
                        }
                        break;
                    case '+':
                        if (oids[t].operations[k].arg !== undefined && oids[t].operations[k].arg !== null) {
                            value = parseFloat(value) + oids[t].operations[k].arg;
                        }
                        break;
                    case '-':
                        if (oids[t].operations[k].arg !== undefined && oids[t].operations[k].arg !== null) {
                            value = parseFloat(value) - oids[t].operations[k].arg;
                        }
                        break;
                    case '%':
                        if (oids[t].operations[k].arg !== undefined && oids[t].operations[k].arg !== null) {
                            value = parseFloat(value) % oids[t].operations[k].arg;
                        }
                        break;
                    case 'round':
                        if (oids[t].operations[k].arg === undefined && oids[t].operations[k].arg !== null) {
                            value = Math.round(parseFloat(value));
                        } else {
                            value = parseFloat(value).toFixed(oids[t].operations[k].arg);
                        }
                        break;
                    case 'pow':
                        if (oids[t].operations[k].arg === undefined && oids[t].operations[k].arg !== null) {
                            value = Math.pow(parseFloat(value), 2);
                        } else {
                            value = Math.pow(parseFloat(value), oids[t].operations[k].arg);
                        }
                        break;
                    case 'sqrt':
                        value = Math.sqrt(parseFloat(value));
                        break;
                    case 'hex':
                        value = Math.round(parseFloat(value)).toString(16);
                        break;
                    case 'hex2':
                        value = Math.round(parseFloat(value)).toString(16);
                        if (value.length < 2) value = '0' + value;
                        break;
                    case 'HEX':
                        value = Math.round(parseFloat(value)).toString(16).toUpperCase();
                        break;
                    case 'HEX2':
                        value = Math.round(parseFloat(value)).toString(16).toUpperCase();
                        if (value.length < 2) value = '0' + value;
                        break;
                    case 'value':
                        value = formatValue(value, parseInt(oids[t].operations[k].arg, 10));
                        break;
                    case 'array':
                        value = oids[t].operations[k].arg [~~value];
                        break;
                    case 'date':
                        value = formatDate(value, oids[t].operations[k].arg, dateFormat);
                        break;
                    case 'min':
                        value = parseFloat(value);
                        value = (value < oids[t].operations[k].arg) ? oids[t].operations[k].arg : value;
                        break;
                    case 'max':
                        value = parseFloat(value);
                        value = (value > oids[t].operations[k].arg) ? oids[t].operations[k].arg : value;
                        break;
                    case 'random':
                        if (oids[t].operations[k].arg === undefined && oids[t].operations[k].arg !== null) {
                            value = Math.random();
                        } else {
                            value = Math.random() * oids[t].operations[k].arg;
                        }
                        break;
                    case 'floor':
                        value = Math.floor(parseFloat(value));
                        break;
                    case 'ceil':
                        value = Math.ceil(parseFloat(value));
                        break;
                } //switch
            }
        } //if for
        format = format.replace(oids[t].token, value);
    }//for
    format = format.replace(/{{/g, '{').replace(/}}/g, '}');
    return format;
}

function extractBinding(format) {
    const oid = format.match(/{(.+?)}/g);
    let result = null;
    if (oid) {
        if (oid.length > 50) {
            console.warn('Too many bindings in one widget: ' + oid.length + '[max = 50]');
        }
        for (let p = 0; p < oid.length && p < 50; p++) {
            const _oid = oid[p].substring(1, oid[p].length - 1);
            if (_oid[0] === '{') {
                continue;
            }
            // If first symbol '"' => it is JSON
            if (_oid && _oid[0] === '"') {
                continue;
            }
            const parts = _oid.split(';');
            result = result || [];
            let systemOid = parts[0].trim();
            let visOid = systemOid;

            let test1 = visOid.substring(visOid.length - 4);
            let test2 = visOid.substring(visOid.length - 3);

            if (visOid && test1 !== '.val' && test2 !== '.ts' && test2 !== '.lc' && test1 !== '.ack') {
                visOid = visOid + '.val';
            }

            const isSeconds = (test2 === '.ts' || test2 === '.lc');

            test1 = systemOid.substring(systemOid.length - 4);
            test2 = systemOid.substring(systemOid.length - 3);

            if (test1 === '.val' || test1 === '.ack') {
                systemOid = systemOid.substring(0, systemOid.length - 4);
            } else if (test2 === '.lc' || test2 === '.ts') {
                systemOid = systemOid.substring(0, systemOid.length - 3);
            }
            let operations = null;
            const isEval = visOid.match(/[\d\w_.]+:\s?[-\d\w_.]+/) || (!visOid.length && parts.length > 0);//(visOid.indexOf(':') !== -1) && (visOid.indexOf('::') === -1);

            if (isEval) {
                const xx = visOid.split(':', 2);
                const yy = systemOid.split(':', 2);
                visOid = xx[1];
                systemOid = yy[1];
                operations = [];
                operations.push({
                    op: 'eval',
                    arg: [{
                        name: xx[0],
                        visOid: visOid,
                        systemOid: systemOid
                    }]
                });
            }

            for (let u = 1; u < parts.length; u++) {
                // eval construction
                if (isEval) {
                    if (parts[u].trim().match(/^[\d\w_.]+:\s?[-.\d\w_]+$/)) {//parts[u].indexOf(':') !== -1 && parts[u].indexOf('::') === -1) {
                        let _systemOid = parts[u].trim();
                        let _visOid = _systemOid;

                        test1 = _visOid.substring(_visOid.length - 4);
                        test2 = _visOid.substring(_visOid.length - 3);

                        if (test1 !== '.val' && test2 !== '.ts' && test2 !== '.lc' && test1 !== '.ack') {
                            _visOid = _visOid + '.val';
                        }

                        test1 = systemOid.substring(_systemOid.length - 4);
                        test2 = systemOid.substring(_systemOid.length - 3);

                        if (test1 === '.val' || test1 === '.ack') {
                            _systemOid = _systemOid.substring(0, _systemOid.length - 4);
                        } else if (test2 === '.lc' || test2 === '.ts') {
                            _systemOid = _systemOid.substring(0, _systemOid.length - 3);
                        }
                        const x1 = _visOid.split(':', 2);
                        const y1 = _systemOid.split(':', 2);

                        operations[0].arg.push({
                            name:      x1[0],
                            visOid:    x1[1],
                            systemOid: y1[1]
                        });
                    } else {
                        operations = operations || [];
                        parts[u] = parts[u].replace(/::/g, ':');
                        if (operations[0].formula) {
                            const n = JSON.parse(JSON.stringify(operations[0]));
                            n.formula = parts[u];
                            operations.push(n);
                        } else {
                            operations[0].formula = parts[u];
                        }
                    }
                } else {
                    const parse = parts[u].match(/([\w\s/+*-]+)(\(.+\))?/);
                    if (parse && parse[1]) {
                        parse[1] = parse[1].trim();
                        // operators requires parameter
                        if (parse[1] === '*' ||
                            parse[1] === '+' ||
                            parse[1] === '-' ||
                            parse[1] === '/' ||
                            parse[1] === '%' ||
                            parse[1] === 'min' ||
                            parse[1] === 'max') {
                            if (parse[2] === undefined) {
                                console.log('Invalid format of format string: ' + format);
                                parse[2] = null;
                            } else {
                                parse[2] = (parse[2] || '').trim().replace(',', '.');
                                parse[2] = parse[2].substring(1, parse[2].length - 1);
                                parse[2] = parseFloat(parse[2].trim());

                                if (parse[2].toString() === 'NaN') {
                                    console.log('Invalid format of format string: ' + format);
                                    parse[2] = null;
                                } else {
                                    operations = operations || [];
                                    operations.push({op: parse[1], arg: parse[2]});
                                }
                            }
                        } else
                        // date formatting
                        if (parse[1] === 'date') {
                            operations = operations || [];
                            parse[2] = (parse[2] || '').trim();
                            parse[2] = parse[2].substring(1, parse[2].length - 1);
                            operations.push({op: parse[1], arg: parse[2]});
                        } else
                        // returns array[value]. e.g.: {id.ack;array(ack is false,ack is true)}
                        if (parse[1] === 'array') {
                            operations = operations || [];
                            let param = (parse[2] || '').trim();
                            param = param.substring(1, param.length - 1);
                            param = param.split(',');
                            if (Array.isArray(param)) {
                                operations.push ({op: parse[1], arg: param}); //xxx
                            }
                        } else
                        // value formatting
                        if (parse[1] === 'value') {
                            operations = operations || [];
                            let param = (parse[2] === undefined) ? '(2)' : (parse[2] || '');
                            param = param.trim();
                            param = param.substring(1, param.length - 1);
                            operations.push({op: parse[1], arg: param});
                        } else
                        // operators have optional parameter
                        if (parse[1] === 'pow' || parse[1] === 'round' || parse[1] === 'random') {
                            if (parse[2] === undefined) {
                                operations = operations || [];
                                operations.push({op: parse[1]});
                            } else {
                                parse[2] = (parse[2] || '').trim().replace(',', '.');
                                parse[2] = parse[2].substring(1, parse[2].length - 1);
                                parse[2] = parseFloat(parse[2].trim());

                                if (parse[2].toString() === 'NaN') {
                                    console.log('Invalid format of format string: ' + format);
                                    parse[2] = null;
                                } else {
                                    operations = operations || [];
                                    operations.push({op: parse[1], arg: parse[2]});
                                }
                            }
                        }
                        // operators without parameter
                        else {
                            operations = operations || [];
                            operations.push({op: parse[1]});
                        }
                    } else {
                        console.log('Invalid format ' + format);
                    }
                }
            }

            result.push({
                visOid,
                systemOid,
                token: oid[p],
                operations: operations ? operations : undefined,
                format,
                isSeconds
            });
        }
    }
    return result;
}

module.exports = {
    extractBinding,
    formatBinding
};
