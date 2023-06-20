// Your code here
function range(start, end){
    if (start === end){
        return [start];
    }
    return [start].concat(range(start + 1, end));
}

console.log(range(5,10));

function sumRec(arr){
    if (arr.length === 1){
        return arr[0];
    }
    return arr.pop() + sumRec(arr);
}

console.log(sumRec([1,2,3,12]));

function exponent(base, exp){
    if (exp === 1){
        return base;
    } else if (exp === 0){
        return 1;
    }

    return base * exponent(base, --exp);
}

console.log(exponent(5,0));
console.log(exponent(5,3));

function fibonacci(n){
    if (n === 0){
        return [0];
    } if (n === 1){
        return [0,1];
    }
    let fibby = fibonacci(n-1)
    return fibonacci(n-1).concat((fibby.pop() + fibby.pop()));
}

console.log(fibonacci(2));

function deepDup(arr){
    if (!Array.isArray(arr)){
        return arr;
    }
    return arr.map( function(el) {
        if (Array.isArray(el)){
            deepDup(el);
        }else{
            el;
        }
    });
};

console.log(deepDup([1,2,[3,4]]))
// let arr1 = [1,[1,2],3];
// let arr2 = deepDup(arr1);
// arr1[1] = [5,6];
// console.log(arr2);