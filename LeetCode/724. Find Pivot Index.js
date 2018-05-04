const pivotIndex = (nums) => {
  const total = nums.reduce((total, num) => {
      return total + num;
  }, 0);
  
  let leftSum = 0;
  
  for (let i = 0; i < nums.length; i++) {
      if ((total - nums[i])/2 === leftSum) return i;
      leftSum += nums[i];
  }
  
  return -1;
};