var map = function(arr, fn) {
    let returnedArray = []
    for (let i = 0; i < arr.length; i++)
    {
        returnedArray.push(fn(arr[i],i));
    }
    console.log(returnedArray);
    return (returnedArray)
};
