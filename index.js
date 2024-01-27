
const myEach = (collection, callback) => {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i]);
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        if (collection.hasOwnProperty(key)) {
          callback(collection[key]);
        }
      }
    }
  
    return collection;
  };
  
  
  const myMap = (collection, callback) => {
    let result = [];
  
    myEach(collection, item => {
      result.push(callback(item));
    });
  
    return result;
  };
  
  
  const myReduce = (collection, callback, acc) => {
    let iterable = Array.isArray(collection) ? collection : Object.values(collection);
    let startIdx = 0;
  
    if (acc === undefined) {
      acc = iterable[0];
      startIdx = 1;
    }
  
    myEach(iterable.slice(startIdx), item => {
      acc = callback(acc, item);
    });
  
    return acc;
  };
  
  
  const myFind = (collection, predicate) => {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i])) {
        return collection[i];
      }
    }
  
    return undefined;
  };
  
  
  const myFilter = (collection, predicate) => {
    let result = [];
  
    myEach(collection, item => {
      if (predicate(item)) {
        result.push(item);
      }
    });
  
    return result;
  };
  
  
  const mySize = collection => {
    if (Array.isArray(collection) || typeof collection === 'string') {
      return collection.length;
    } else if (typeof collection === 'object') {
      return Object.keys(collection).length;
    }
  
    return 0;
  };
  
  const myFirst = (array, n) => {
    if (n === undefined) {
      return array[0];
    }
  
    return array.slice(0, n);
  };
  
  const myLast = (array, n) => {
    if (n === undefined) {
      return array[array.length - 1];
    }
  
    return array.slice(Math.max(array.length - n, 0));
  };
  
  const myKeys = object => Object.keys(object);
  
  const myValues = object => myMap(myKeys(object), key => object[key]);
  
  // Test cases
  console.log(myEach([1, 2, 3], alert));
  console.log(myEach({ one: 1, two: 2, three: 3 }, alert));
  
  console.log(myMap([1, 2, 3], num => num * 3));
  console.log(myMap({ one: 1, two: 2, three: 3 }, (num, key) => num * 3));
  
  console.log(myReduce([1, 2, 3], (acc, val) => acc + val, 10));
  console.log(myReduce({ one: 1, two: 2, three: 3 }, (acc, val) => acc + val));
  
  console.log(myFind([1, 2, 3, 4, 5, 6], num => num % 2 == 0));
  console.log(myFind({ one: 1, three: 3, four: 4, six: 6 }, num => num % 2 == 0));
  
  console.log(myFilter([1, 2, 3, 4, 5, 6], num => num % 2 == 0));
  console.log(myFilter({ one: 1, three: 3, five: 5 }, num => num % 2 == 0));
  
  console.log(mySize({ one: 1, two: 2, three: 3 }));
  console.log(mySize([]));
  
  console.log(myFirst([5, 4, 3, 2, 1]));
  console.log(myFirst([5, 4, 3, 2, 1], 3));
  
  console.log(myLast([5, 4, 3, 2, 1]));
  console.log(myLast([5, 4, 3, 2, 1], 3));
  
  console.log(myKeys({ one: 1, two: 2, three: 3 }));
  console.log(myValues({ one: 1, two: 2, three: 3 }));
  