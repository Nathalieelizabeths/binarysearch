let num = [45,12,6,89,2,5]
  let target = 6;
let firstIndex = 0;
let lastIndex = num.length-1;
let middleIndex = Math.floor((firstIndex+lastIndex)/2);
while(num[middleIndex]!==firstIndex<=lastIndex){
    console.log(middleIndex);
    console.log(firstIndex);
    console.log(lastIndex);
    if(num[middleIndex]>6){
        lastIndex=middleIndex-1;
    }  else{
        lastIndex=middleIndex+1;
    }
    middleIndex=Math.floor((firstIndex+lastIndex)/2);{
    }
    return num[middleIndex]===lastIndex-1;
    }
    //Given an unsorted array of numbers return the sorted array in descending order
    let arr1=[123,89,5,23,9,56]
    function descending (arr1,merge){
        let leftIndex = 0;
        let rightIndex = length-1;
        while(leftIndex.length&&rightIndex.length){
            if(leftIndex [0]<rightIndex[0]);{
            arr1.push(leftIndex.shift());
        }
    }
    return[...arr1 ,...leftIndex,...rightIndex];
    }
    function mergeSort(unsortedArray){
        const middleIndex = unsortedArray.length/2;
        if(unsortedArray.length<2){
            return unsortedArray;
        }
        const leftIndex = unsortedArray.splice(0,middleIndex);
        return mergeArrays(mergeSort(leftIndex)),mergeSort(unsortedArray);
    }
    //
    function mergeSort(arr) {
        if (arr.length <= 1) {
          return arr;
        }
        let mid = Math.floor(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right));
      }
      function merge(left, right) {
        let result = [];
        while (left.length && right.length) {
          if (left[0] >= right[0]) {
            result.push(left.shift());
          } else {
            result.push(right.shift());
          }
        }
        return [...result, ...left, ...right];
      }
      let arr4 = [123, 89, 5, 23, 9, 56];
      arr1 = mergeSort(arr1);
      console.log(arr1);
    function findTarget(arr1, target) {
            arr1 = mergeSort(arr1);
            let left = 0;
            let right = arr1.length - 1;
            while (left <= right) {
              const mid = Math.floor((left + right) / 2);
              if (arr1[mid] === target) {
                return mid;
              } else if (arr1[mid] < target) {
                left = mid + 1;
              } else {
                right = mid - 1;
              }
            }
            return null;
          }
          function mergeSort(arr) {
            if (arr1.length <= 1) {
              return arr;
            }
            let mid = Math.floor(arr.length / 2);
            let left = arr1.slice(0, mid);
            let right = arr1.slice(mid);
            return merge(mergeSort(left), mergeSort(right));
          }
          function merge(left, right) {
            let result = [];
            while (left.length && right.length) {
              if (left[0] < right[0]) {
                result.push(left.shift());
              } else {
                result.push(right.shift());
              }
            }
            return [...result, ...left, ...right];
          }
          //Given the following array, search for the following target
          let target2 = 34;
          let arr2 = [1, 4, 78, 2, 67, 3];
          let index = findTarget(arr2, target);
          console.log(index);
