Array.prototype.uniq = function() {
    const array = [];
    this.forEach(num => {
        if (!array.includes(num)) {
            array.push(num);
        }
    });
    return array;
};

console.log([1,2,2,3,3,3].uniq()); // => [1,2,3]

Array.prototype.twoSum = function() {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i+1; j < this.length; j++) {
            if (this[i] + this[j] === 0) {
                array.push([i, j]);
            }

        }
    }
    return array;

}

console.log([-1, 0, 2, -2, 1].twoSum()); // => [[0,4] [2,3]]

Array.prototype.transpose = function() {
    const array = [];
    for (let i = 0; i < this.length; i++) {
        const subArr = [];
        for (let j = 0; j < this[0].length; j++) {
            subArr.push(this[j][i]);
        }
        array.push(subArr);
    }
    return array;
}

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].transpose()); // => [[0,3,6], [1,4,7], [2,5,8]]