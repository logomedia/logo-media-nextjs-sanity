import numeral from 'numeral';

export function fShortenNumber(number) {
  const format = number ? numeral(number).format('0.00a') : '';

  return result(format, '.00');
}

function result(format, key = '.00') {
  const isInteger = format.includes(key);

  return isInteger ? format.replace(key, '') : format;
}

export function fCurrency(number) {
  const format = number ? numeral(number).format('$0,0.00') : '';

  return result(format, '.00');
}
