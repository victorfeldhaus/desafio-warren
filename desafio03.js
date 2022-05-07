let numberSum = 10;
let arrInitial = [2, 3, 4];


results = [];
addAndVerify([], arrInitial); 


function sum(nums) {
  return nums.reduce((prev,curr) => prev + curr, 0);
}

function addAndVerify(arr, nums) {
  for(var i = 0; i < nums.length;i++){ 
    const newArr = arr.map(r => r)
        newArr.push(nums[i])  
    if(sum(newArr) === numberSum) { 
        results.push(newArr); 
    }
    if(sum(newArr) > numberSum){
      break;
    }else{
      addAndVerify(newArr, arrInitial); 
    }
  }
}


results =  results.map(res => String(res.sort()))
results = results.filter((prev, curr) => {
    return results.indexOf(prev) === curr
})

results = results.sort()

console.log(numberSum)
console.log(results[results.length - 1])
console.log(results[results.length - 2])



