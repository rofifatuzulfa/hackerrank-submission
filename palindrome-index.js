function palindromeIndex(s) {
    // Write your code here
    for(let i=0;i<=s.length/2;i++)
        if(s[i]!=s[s.length-i-1]){
            if(s[i+1]==s[s.length-i-1] && 
            (s.length-i-2<0 || s[i+2]==s[s.length-i-2]))
                return i;
            if(s[i]==s[s.length-i-2] && 
            (s.length-i-2<0 || s[i+1]==s[s.length-i-3]))
                return s.length-i-1;
        }
    return -1;
}

console.log(palindromeIndex("aaab"));
console.log(palindromeIndex("baa"));
console.log(palindromeIndex("aaa"));