class Solution {
  isPalindrome(x) {
    let pali = false;
    let str = x.toString();
    let strRev = str.split("").reverse().join("");;
    if(str===strRev){
        pali = true;    
    }
      
    return pali;
  }
    
}
let obj = new Solution();
console.log(obj.isPalindrome(-121));