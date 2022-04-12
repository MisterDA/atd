// Generated by atdts from type definitions in 'everything.atd'.
//
// Type-safe translations from/to JSON
//
// For each type 'Foo', there is a pair of functions:
// - 'writeFoo': convert a 'Foo' value into a JSON-compatible value
//   of type 'any'.
// - 'readFoo': convert a JSON-compatible value into a TypeScript value
//   of type 'Foo'.


export type DifferentKindsOfThings =
| { kind: 'Root' }
| { kind: 'Thing'; value: Int }
| { kind: 'WOW' /* JSON: "wow" */ }
| { kind: 'Amaze' /* JSON: "!!!" */; value: string[] }

export type This = Int

export type Root = {
  id: string;
  this_: This;
  items: Int[][];
  maybe?: Int;
  extras: Int[];
  answer: Int;
  aliased: Alias;
  point: [number, number];
  kinds: DifferentKindsOfThings[];
  assoc1: [number, Int][];
  options: Option<Int>[];
  nullables: Int[];
}

export type Alias = Int[]

export type Pair = [string, Int]

export function writeDifferentKindsOfThings(x: DifferentKindsOfThings, context: any = x): any {
  switch (x.kind) {
    case 'Root':
      return 'Root'
    case 'Thing':
      return ['Thing', _atd_write_int(x.value, x)]
    case 'WOW':
      return 'wow'
    case 'Amaze':
      return ['!!!', _atd_write_list(_atd_write_string)(x.value, x)]
  }
}

export function readDifferentKindsOfThings(x: any, context: any = x): DifferentKindsOfThings {
  if (typeof x === 'string') {
    switch (x) {
      case 'Root':
        return { kind: 'Root' }
      case 'wow':
        return { kind: 'WOW' }
      default:
        _atd_bad_json('DifferentKindsOfThings', x, context)
    }
  }
  else {
    _atd_check_json_tuple(2, x, context)
    switch (x[0]) {
      case 'Thing':
        return { kind: 'Thing', value: _atd_write_int(x[1], x) }
      case '!!!':
        return { kind: 'Amaze', value: _atd_write_list(_atd_write_string)(x[1], x) }
      default:
        _atd_bad_json('DifferentKindsOfThings', x, context)
    }
  }
}

export function writeThis(x: This, context: any = x): any {
  return _atd_write_int(x, context);
}

export function readThis(x: any, context: any = x): This {
  return _atd_read_int(x, context);
}

export function writeRoot(x: Root, context: any = x): any {
  return {
    'ID': _atd_write_required_field('Root', 'id', _atd_write_string, x.id, x),
    'this': _atd_write_required_field('Root', 'this', writeThis, x.this_, x),
    'items': _atd_write_required_field('Root', 'items', _atd_write_list(_atd_write_list(_atd_write_int)), x.items, x),
    'maybe': _atd_write_optional_field(_atd_write_int, x.maybe, x),
    'extras': _atd_write_field_with_default(_atd_write_list(_atd_write_int), [], x.extras, x),
    'answer': _atd_write_field_with_default(_atd_write_int, 42, x.answer, x),
    'aliased': _atd_write_required_field('Root', 'aliased', writeAlias, x.aliased, x),
    'point': _atd_write_required_field('Root', 'point', ((x, context) => [_atd_write_float(x[0], x), _atd_write_float(x[1], x)]), x.point, x),
    'kinds': _atd_write_required_field('Root', 'kinds', _atd_write_list(writeDifferentKindsOfThings), x.kinds, x),
    'assoc1': _atd_write_required_field('Root', 'assoc1', _atd_write_list(((x, context) => [_atd_write_float(x[0], x), _atd_write_int(x[1], x)])), x.assoc1, x),
    'options': _atd_write_field_with_default(_atd_write_list(_atd_write_option(_atd_write_int)), [], x.options, x),
    'nullables': _atd_write_field_with_default(_atd_write_list(_atd_write_int), [], x.nullables, x),
  };
}

export function readRoot(x: any, context: any = x): Root {
  return {
    id: _atd_read_required_field('Root', 'ID', _atd_read_string, x['ID'], x),
    this_: _atd_read_required_field('Root', 'this', readThis, x['this'], x),
    items: _atd_read_required_field('Root', 'items', _atd_read_list(_atd_read_list(_atd_read_int)), x['items'], x),
    maybe: _atd_read_optional_field(_atd_read_int, x['maybe'], x),
    extras: _atd_read_field_with_default(_atd_read_list(_atd_read_int), [], x['extras'], x),
    answer: _atd_read_field_with_default(_atd_read_int, 42, x['answer'], x),
    aliased: _atd_read_required_field('Root', 'aliased', readAlias, x['aliased'], x),
    point: _atd_read_required_field('Root', 'point', ((x, context): [number, number] => { _atd_check_json_tuple(2, x, context); return [_atd_read_float(x[0], x), _atd_read_float(x[1], x)] }), x['point'], x),
    kinds: _atd_read_required_field('Root', 'kinds', _atd_read_list(readDifferentKindsOfThings), x['kinds'], x),
    assoc1: _atd_read_required_field('Root', 'assoc1', _atd_read_list(((x, context): [number, Int] => { _atd_check_json_tuple(2, x, context); return [_atd_read_float(x[0], x), _atd_read_int(x[1], x)] })), x['assoc1'], x),
    options: _atd_read_field_with_default(_atd_read_list(_atd_read_option(_atd_read_int)), [], x['options'], x),
    nullables: _atd_read_field_with_default(_atd_read_list(_atd_read_nullable(_atd_read_int)), [], x['nullables'], x),
  };
}

export function writeAlias(x: Alias, context: any = x): any {
  return _atd_write_list(_atd_write_int)(x, context);
}

export function readAlias(x: any, context: any = x): Alias {
  return _atd_read_list(_atd_read_int)(x, context);
}

export function writePair(x: Pair, context: any = x): any {
  return ((x, context) => [_atd_write_string(x[0], x), _atd_write_int(x[1], x)])(x, context);
}

export function readPair(x: any, context: any = x): Pair {
  return ((x, context): [string, Int] => { _atd_check_json_tuple(2, x, context); return [_atd_read_string(x[0], x), _atd_read_int(x[1], x)] })(x, context);
}


/////////////////////////////////////////////////////////////////////
// Runtime library
/////////////////////////////////////////////////////////////////////

type Int = number

type Option<T> = null | { value: T }

function _atd_missing_json_field(type_name: string, json_field_name: string) {
    throw new Error(`missing field '${json_field_name}'` +
                    ` in JSON object of type '${type_name}'`)
}

function _atd_missing_ts_field(type_name: string, ts_field_name: string) {
    throw new Error(`missing field '${ts_field_name}'` +
                    ` in TypeScript object of type '${type_name}'`)
}

function _atd_bad_json(expected_type: string, json_value: any, context: any) {
  let value_str = JSON.stringify(json_value)
  if (value_str.length > 200)
    value_str = value_str.substring(0, 200) + '…';

  throw new Error(`incompatible JSON value where` +
                  ` type '${expected_type}' was expected: '${value_str}'.` +
                  ` Occurs in '${JSON.stringify(context)}'.`)
}

function _atd_bad_ts(expected_type: string, ts_value: any, context: any) {
  let value_str = JSON.stringify(ts_value)
  if (value_str.length > 200)
    value_str = value_str.substring(0, 200) + '…';

  throw new Error(`incompatible TypeScript value where` +
                  ` type '${expected_type}' was expected: '${value_str}'.` +
                  ` Occurs in '${JSON.stringify(context)}'.`)
}

function _atd_check_json_tuple(len: Int, x: any, context: any) {
  if (! Array.isArray(x) || x.length !== len)
    _atd_bad_json('tuple of length ' + len, x, context);
}

function _atd_read_unit(x: any, context: any) {
  if (x === null)
    return x
  else
    _atd_bad_json('null', x, context)
}

function _atd_read_bool(x: any, context: any): boolean {
  if (typeof x === 'boolean')
    return x
  else
    _atd_bad_json('boolean', x, context)
}

function _atd_read_int(x: any, context: any): Int {
  if (Number.isInteger(x))
    return x
  else
    _atd_bad_json('integer', x, context)
}

function _atd_read_float(x: any, context: any): number {
  if (isFinite(x))
    return x
  else
    _atd_bad_json('number', x, context)
}

function _atd_read_string(x: any, context: any): string {
  if (typeof x === 'string')
    return x
  else
    _atd_bad_json('str', x, context)
}

function _atd_read_required_field<T>(type_name: string,
                                     field_name: string,
                                     read_elt: (x: any, context: any) => T,
                                     x: any,
                                     context: any): T {
  if (x === undefined)
    _atd_missing_json_field(type_name, field_name)
  else
    return read_elt(x, context)
}

function _atd_read_optional_field<T>(read_elt: (x: any, context: any) => T,
                                     x: any,
                                     context: any): T {
  if (x === undefined || x === null)
    return x
  else
    return read_elt(x, context)
}

function _atd_read_field_with_default<T>(read_elt: (x: any, context: any) => T,
                                         default_: T,
                                         x: any,
                                         context: any): T {
  if (x === undefined || x === null)
    return default_
  else
    return read_elt(x, context)
}

function _atd_read_option<T>(read_elt: (x: any, context: any) => T):
  (x: any, context: any) => Option<T> {
  function read_option(x: any, context: any): Option<T> {
    if (x === 'None')
      return null
    else {
      _atd_check_json_tuple(2, x, context);
      switch (x[0]) {
        case 'Some':
          return { value: read_elt(x[1], context) }
        default:
           _atd_bad_json('option', x, context)
      }
    }
  }
  return read_option
}

function _atd_read_nullable<T>(read_elt: (x: any, context: any) => T):
  (x: any, context: any) => T {
  function read_nullable(x: any, context: any): T {
    if (x === null)
      return null
    else
      return read_elt(x, context)
  }
  return read_nullable
}

function _atd_read_list<T>(read_elt: (x: any, context: any) => T):
  (elts: any, context: any) => T[] {
  function read_list(elts: any, context: any): T[] {
    if (Array.isArray(elts))
      return elts.map((x) => read_elt(x, elts))
    else
      _atd_bad_json('array', elts, context)
  }
  return read_list
}

function _atd_write_unit(x: any, context: any) {
  if (x === null)
    return x
  else
    _atd_bad_ts('null', x, context)
}

function _atd_write_bool(x: any, context: any): boolean {
  if (typeof x === 'boolean')
    return x
  else
    _atd_bad_ts('boolean', x, context)
}

function _atd_write_int(x: any, context: any): Int {
  if (Number.isInteger(x))
    return x
  else
    _atd_bad_ts('integer', x, context)
}

function _atd_write_float(x: any, context: any): number {
  if (isFinite(x))
    return x
  else
    _atd_bad_ts('number', x, context)
}

function _atd_write_string(x: any, context: any): string {
  if (typeof x === 'string')
    return x
  else
    _atd_bad_ts('string', x, context)
}

function _atd_write_option<T>(write_elt: (x: T, context: any) => any):
   (elts: Option<T>, context: any) => any {
  function write_option(x: Option<T>, context: any): any {
    if (x === null)
      return 'None'
    else
      return ['Some', write_elt(x.value, context)]
  }
  return write_option
}

function _atd_write_nullable<T>(write_elt: (x: T, context: any) => any):
  (elts: T, context: any) => any {
  function write_option(x: T, context: any): any {
    if (x === null)
      return null
    else
      return write_elt(x, context)
  }
  return write_option
}

function _atd_write_list<T>(write_elt: (elt: T, context: any) => any):
  (elts: T[], context: any) => any {
  return ((elts: T[], context: any): any =>
    elts.map((x) => write_elt(x, elts))
  )
}

function _atd_write_required_field<T>(type_name: string,
                                      field_name: string,
                                      write_elt: (x: T, context: any) => any,
                                      x: T,
                                      context: any): any {
  if (x === undefined)
    _atd_missing_ts_field(type_name, field_name)
  else
    return write_elt(x, context)
}

function _atd_write_optional_field<T>(write_elt: (x: T, context: any) => any,
                                      x: T,
                                      context: any): any {
  if (x === undefined || x === null)
    return x
  else
    return write_elt(x, context)
}

function _atd_write_field_with_default<T>(
  write_elt: (x: T, context: any) => any,
  default_: T,
  x: T,
  context: any
): T {
  const value = (x === undefined || x === null) ? default_ : x
  return write_elt(value, context)
}

