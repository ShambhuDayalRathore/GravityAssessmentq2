// index.js
const express = require('express');
const app = express();
const port = 3001;

app.get('/api/q2', (req, res) => {
    function twoSum(nums, target) {
        const numMap = {}; // This will store the indices of the numbers
        for (let i = 0; i < nums.length; i++) {
          const complement = target - nums[i];
          if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
          }
          numMap[nums[i]] = i;
        }
        return "No Number for found to sum and get the target solution";
      }

    const nums = [7, 5, 4, 5];
const target = 9;
const result = twoSum(nums, target);
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
