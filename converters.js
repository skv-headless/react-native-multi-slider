// Find closest index for a given value
const closest = (array, n) => {
  return array.findIndex((elem, index) => {
    if (n < elem) {
      return true;
    }

    return false;
  })
};

export function valueToPosition(value, valuesArray, sliderLength) {
  const index = closest(valuesArray, value);

  const arrLength = valuesArray.length - 1;
  const validIndex = index === -1 ? arrLength : index;

  return sliderLength * validIndex / arrLength;
}

export function positionToValue(position, valuesArray, sliderLength) {
  var arrLength;
  var index;

  if (position < 0 || sliderLength < position) {
    return null;
  } else {
    arrLength = valuesArray.length - 1;
    index = arrLength * position / sliderLength;
    return valuesArray[Math.round(index)];
  }
}

export function createArray(start, end, step) {
  const direction = start - end > 0 ? -1 : 1;
  if (!step) {
    return [];
  } else {
    const length = Math.abs((start - end) / step) + 1;

    return [...Array(Math.ceil(length)).keys()].reduce((acc, i) => {
      console.log('v: ', start, i, step, direction);
      return [
        ...acc,
        start + i * Math.abs(step) * direction,
      ];
    }, []);
  }
}
