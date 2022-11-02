let obj = [1,3,2,4,3, 3, 4];
let tar = 10;
const twoSum = (nums, target) => {
  const output = {};
  for (let i = 0; i < nums.length; i++) {
    let neededValue = target - nums[i]
    const index2 = output[neededValue]
    if(index2 != null){
        return [index2,i]
    }
    else{
        output[nums[i]] = i
    }
  }
};

console.log(twoSum(obj,6))
