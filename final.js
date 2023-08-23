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

function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

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

function measureExecutionTime(func, arr) {
    const startTime = performance.now();
    func(arr);
    const endTime = performance.now();
    return endTime - startTime;
}


const length = [2, 3, 4, 5, 6, 7, 8, 9, 10];

function generateSortedArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(i);
    }
    return arr;
}

function generateBackwardArray(length) {
    return generateSortedArray(length).reverse();
}

function generateRandomArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}




// Results for Sorting Algorithm Performance Analysis
console.log(`SORTED ARRAY:
Array Length | QuickSort Time | BubbleSort Time | Merge Sort Time
---------------------------------------------------------------`)

for (let i = 0; i < length.length; i++) {
    const quickSortTimeSorted = measureExecutionTime(quickSort, generateSortedArray(length[i]));
    const bubbleSortTimeSorted = measureExecutionTime(bubbleSort, generateSortedArray(length[i]));
    const mergeSortTimeSorted = measureExecutionTime(mergeSort, generateSortedArray(length[i]));

    console.log(`${length[i]}            | ${quickSortTimeSorted.toFixed(3)} ms       | ${bubbleSortTimeSorted.toFixed(3)} ms       | ${mergeSortTimeSorted.toFixed(3)} ms`)
}

console.log(`BACKWARD ARRAY:
Array Length | QuickSort Time | BubbleSort Time | Merge Sort Time
---------------------------------------------------------------`)

for (let i = 0; i < length.length; i++) {
    const quickSortTimeSorted = measureExecutionTime(quickSort, generateBackwardArray(length[i]));
    const bubbleSortTimeSorted = measureExecutionTime(bubbleSort, generateBackwardArray(length[i]));
    const mergeSortTimeSorted = measureExecutionTime(mergeSort, generateBackwardArray(length[i]));

    console.log(`${length[i]}            | ${quickSortTimeSorted.toFixed(3)} ms       | ${bubbleSortTimeSorted.toFixed(3)} ms       | ${mergeSortTimeSorted.toFixed(3)} ms`)
}

console.log(`RANDOM ARRAY:
Array Length | QuickSort Time | BubbleSort Time | Merge Sort Time
---------------------------------------------------------------`)

for (let i = 0; i < length.length; i++) {
    const quickSortTimeSorted = measureExecutionTime(quickSort, generateRandomArray(length[i]));
    const bubbleSortTimeSorted = measureExecutionTime(bubbleSort, generateRandomArray(length[i]));
    const mergeSortTimeSorted = measureExecutionTime(mergeSort, generateRandomArray(length[i]));

    console.log(`${length[i]}            | ${quickSortTimeSorted.toFixed(3)} ms       | ${bubbleSortTimeSorted.toFixed(3)} ms       | ${mergeSortTimeSorted.toFixed(3)} ms`)

}