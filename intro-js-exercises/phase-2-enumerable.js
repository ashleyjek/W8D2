// Your code here
const square = function(el) {
    console.log(el * el);
};


Array.prototype.myEach = function(callback) {
    // let index = 0

    // this.forEach(el => {
    //     this[index] = cb(el);
    //     index++;
    // });
    for (let i = 0; i < this.length; i++) {
        callback(this[i]);
    }
};

[1,2,3].myEach(square);

Array.prototype.myMap = function(callback) {
    const array = [];
    this.myEach( function(el) {
        array.push(callback(el));
    });
    return array;
};

// [1, 2, 3].map { |el| 2 * el }

console.log([1, 2, 3].myMap(function(el) {
    return 2 * el;
}));

Array.prototype.myReduce = function(callback, initialValue){
    let accum = 0;
    if (!initialValue){
        accum = this.shift();
    }
    else {
        accum = initialValue;
    }
    this.myEach( function(el) {
        accum = callback(accum, el);
    });
    console.log(accum);

};

// without initialValue
[1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
  }); // => 6
  
  // with initialValue
[1, 2, 3].myReduce(function(acc, el) {
    return acc + el;
}, 25); // => 31
