const str = "madam";
//palindrome means by reversing we get same name
function palindromeCheck(str){
    let left = 0;
    let right = str.length - 1;
    while(left < right){
        if(str.charAt(left) !== str.charAt(right)){
            return false;
        }
        left++;
        right--;
    }
    return true;
}

const result = palindromeCheck(str);
console.log(result);