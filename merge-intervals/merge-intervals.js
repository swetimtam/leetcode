/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let i = 0;
  
  while (i < intervals.length - 1) {
    if (intervals[i][1] >= intervals[i + 1][0]) {
      let lower = intervals[i][0] < intervals[i + 1][0] ? intervals[i][0] : intervals[i + 1][0];
      let upper = intervals[i][1] > intervals[i + 1][1] ? intervals[i][1] : intervals[i + 1][1];
      intervals.splice(i, 2, [lower, upper]);
    } else i++;
  }
  
  return intervals;
};