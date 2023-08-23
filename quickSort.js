
let array = [1, 3, 11, 4, 2, 5, 12, 6, 7, 10, 9, 8, 13]

function quickSort(arr) {
    if (arr.length < 2) {
        return arr;
    } else {
        const pivot = arr[Math.floor(arr.length / 2)];
        const arrLeft = [];
        const arrRight = [];

        for (let i = 0; i < arr.length; i++) {
            if (i === Math.floor(arr.length / 2)) {
                continue;
            }

            if (arr[i] < pivot) {
                arrLeft.push(arr[i]);
            } else {
                arrRight.push(arr[i]);
            }
        }

        return [...quickSort(arrLeft), pivot, ...quickSort(arrRight)];
    }
}

console.log(quickSort(array));