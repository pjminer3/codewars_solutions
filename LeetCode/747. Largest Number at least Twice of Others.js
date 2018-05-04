const dominantIndex = (nums) => {
  const largest = Math.max(...nums);
  const index = nums.indexOf(largest);
  
  for (let i = 0; i < nums.length; i++) {
      if (i === index) continue;
      if (largest/2 < nums[i]) return -1;
  }
  
  return index;
};

