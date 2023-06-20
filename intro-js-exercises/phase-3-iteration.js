// Your code here

Array.prototype.bubbleSort = function() {
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                sorted = false;
            }
        }
    }
   return this;
}

console.log([8,4,3,6,1,0].bubbleSort());

String.prototype.substrings = function() {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j <= this.length; j++) {
            array.push(this.slice(i, j));
        }
    }
    return array;
}

console.log("hello world".substrings());