
let array = [1, 3, 11, 4, 10];

function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    const middle = Math.floor(arr.length / 2);
    const arrLeft = arr.slice(0, middle);
    const arrRight = arr.slice(middle);

    return merge(mergeSort(arrLeft), mergeSort(arrRight));

}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return [...result, ...left.slice(i), ...right.slice(j)]
}


console.log(mergeSort(array));

function measureExecutionTime(func) {
    const startTime = performance.now(); // Засекаем начальное время
    func(); // Выполняем функцию
    const endTime = performance.now(); // Засекаем конечное время
    return endTime - startTime; // Возвращаем время выполнения в миллисекундах
}

const mergeSortTime = measureExecutionTime(() => {
    const sortedArr = mergeSort(array);
    console.log(sortedArr);
});

console.log(`Время выполнения сортировки слиянием: ${mergeSortTime} мс`);
