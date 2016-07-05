/*jshint eqnull:true, expr:true*/

var _ = { };

(function() {

  /**
   * COLLECTIONS
   * ===========
   *
   * In this section, we'll have a look at functions that operate on collections
   * of values; in JavaScript, a 'collection' is something that can contain a
   * number of values--either an array or an object.
   */

  // Return an array of the first n elements of an array. If n is undefined,
  // return just the first element.
  _.first = function(array, n) {
      if(!(n)) return array[0];
      return array.slice(0, n);
  };

  // Like first, but for the last elements. If n is undefined, return just the
  // last element.
  _.last = function(array, n) {
    if (n === undefined){
      return array[array.length - 1];
    } else if (n > array.length) {
    	return array;
    } else {
      array = array.slice(array.length - n, array.length);
      return array;
    }
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  _.each = function(collection, iterator) {
    if (typeof collection === "object") {
      for (var key in collection) {
        // if (collection.hasOwnValue(key)) {
          iterator(collection[key], key, collection);
        // }
      }
    }
    else {
      for (var i = 0; i < collection.length; i++){
        iterator(collection[i], i, collection);
      }
    }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){ for(var i = 0; i < array.length; i++) if(array[i] === target) return i; return -1;};

  // Return all elements of an array that pass a truth test ('iterator' function argument)
  _.filter = function(collection, iterator) {
    var array = [];
    for (var i = 0; i < collection.length; i++) {
      if(iterator(collection[i])) {
        array.push(collection[i]);
      }
    }
    return array;
  };

  // Return all elements of an array that don't pass a truth test (the 'iterator' function argument)
  _.reject = function(collection, iterator) {
    var array = [];
    for (var i = 0; i < collection.length; i++){
      if(iterator(collection[i]) !== true){
        array.push(collection[i]);
      }
    }
    return array;
  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    var arr = [array[0]];
    // arr[0] = array[0];
    for (var i = 0; i < array.length; i++) {
      for (var j = 0; j < arr.length; j++) {
        if(array[i] === array[j]) {
          break;
        } else if (j === (arr.length - 1) && array[i] !== arr[j]) {
          arr.push(array[i]);
        }
      }
    }
    return arr;
  };


  // Return the results of applying an iterator to each element.
  _.map = function(array, iterator) {
    var arr = [];
    for(var i = 0; i < array.length; i++) {
      arr[i] = iterator(array[i]);
    }
    return arr;
  };

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(array, propertyName) {
    var arr = [];
	for (var i = 0; i < array.length; i++){
		var obj = array[i];
		for (var key in obj){
    		if (key === propertyName) {
    			arr.push(obj[key]);
    		}
		}
	}
    return arr;
  };

  // Calls the method named by methodName on each value in the list.
  _.invoke = function(list, methodName, args) {
    if (typeof methodName === "string") {
       for (var i = 0; i < list.length; i++) {
          list[i][methodName]();
       }
         return list;
      }
     for (var j = 0; j < list.length; j++) {
      methodName.call(list[j]);
     }
       return list;
   };


  // Reduces an array or object to a single value by repetitively calling
  // iterator(previousValue, item) for each item. previousValue should be
  // the return value of the previous iterator call.
  _.reduce = function(collection, iterator, initialValue) {
    if (initialValue === undefined) {
      initialValue = 0;
    }
    for (var i = 0; i < collection.length; i++) {
      initialValue = iterator(initialValue, collection[i]);    }
	return initialValue;
};
  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
      for (var key in collection) {
        if (target === collection[key]) {
          return true;
        }
      }
        return false;
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
      if (typeof iterator === "undefined") {
        return true;
      }

    // Why does this not work?
    // if (typeof iterator === "undefined") {
    //   honesty(collection);
    // }
    //
    // function honesty(arr) {
    //   for (var key in arr) {
    //     if (arr[key]){
    //     } else {
    //       return false;
    //     }
    //   }
    //   return true;
    // }

    for (var key in collection) {
      if(iterator(collection[key]) == true) { //Why does this not work with ""==="" ?
      } else {
        return false;
      }
    }
    return true;
  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    if (typeof iterator === "undefined"){
      for (var key in collection) {
        if (collection[key]) {
          return true;
        }
      }
        return false;
    }

    for (var key in collection) {
      if (iterator(collection[key])) {
        return true;
      }
    }
      return false;
  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a couple of helpers for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  _.extend = function(obj) {
    for (var i = 1; i <= arguments.length; i++){
      for (var prop in arguments[i]) {
        obj[prop] = arguments[i][prop];
      }
    }
    return obj;
  };

  // Like extend, but doesn't ever overwrite a key that already
  // exists in obj
_.defaults = function(obj) {
  for (var i = 1; i <= arguments.length; i++){
    for (var prop in arguments[i]) {
      if(obj.hasOwnProperty(prop)){
      }
      else {
        obj[prop] = arguments[i][prop];
    }
    }
  }
  return obj;
};



  /**
   * FUNCTIONS
   * =========
   */

  // Return a function that can be called at most one time. Subsequent calls
  // should return the previously returned value.
  _.once = function(func) {
  };

  // Memoize an expensive function by storing its results. You may assume
  // that the function takes only one argument and that it is a primitive.
  //
  // Memoize should return a function that when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.
  _.memoize = function(func) {
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  //
  // The arguments for the original function are passed after the wait
  // parameter. For example _.delay(someFunction, 500, 'a', 'b') will
  // call someFunction('a', 'b') after 500ms
  _.delay = function(func, wait) {
  };



  // Shuffle an array.
  _.shuffle = function(array) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

}).call(this);
