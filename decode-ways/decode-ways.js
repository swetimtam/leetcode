/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
  if (s.length === 0) return 0;

  const n = s.length;
  const dp = Array(n+1).fill(0);

  // set base
  dp[0] = 1;
  dp[1] = s[0] === '0' ? 0 : 1;

  for (let i = 2; i <= n; i++) {
    // add current if it is a valid code
    if (s[i - 1] !== '0') {
      dp[i] += dp[i - 1];
    }
    // add additional for multi-digit codes
    if (s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] <= '6') {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};