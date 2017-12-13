/*

https://career.guru99.com/top-50-csscascading-style-sheet-interview-questions/
https://www.tutorialspoint.com/css/css_interview_questions.htm
https://www.toptal.com/javascript/interview-questions
https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z
* */

/*
palindrome
*/
function palindrome1(str){
	var re=/[\W_]/g;
	var newStr=str.toLowerCase().trim().replace(re,'');
	var resStr = newStr.split('').reverse().join('');
	return newStr == resStr;
}

function palindrome2(str) {
    var re=/[\W_]/g;
    var newStr = str.toLowerCase().trim().replace(re, '');
    var i=0;
    while(i<newStr.length/2){
        if(newStr[i]!= newStr[newStr.length-1-i]){
            return false;
        }
        i+=1;
    }
    return true;
}

/*
check Prime
*/
function checkPrime(num){
    if(num<2){
        return false;
    }
    else if(num==2){
        return true;
    }else{
        var i=2;
        while(i<num){
            if(num%i==0){
                return false;
            }
            if(i==2){
                i+=1;
            }else{
                i+=2;
            }
        }
    }
    return true;
}
/*
PrimeFactors
* */
function checkPrime(n) {
    var res=[];
    var divisor=2;
    while(n>2){
        if(n%divisor==0){
            res.push(divisor);
            n=n/divisor;
        }else{
            divisor+=1;
        }
    }
    return res;
}

/*
nth fibonacci number
* */
function fib(n) {
    var f=[0,1];
    if(n<2){
        return n;
    }else{
        for(var i=2;i<=n;i++){
            f[i]=f[i-1]+f[i-2];
        }
        return f[n];
    }
}

/*
* Great common divisor
 */
function GCD(a,b){
    var d=2;
    var gd=1;
    while(a>=d && b >=d){
        if((a%d==0) && (b%d==0)){
            gd=d;
        }
        d+=1;
    }
    return gd;
}

/*
remove duplicate
 */
function removeDuplicate(arr) {
    var s= new Set();
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        if(!s.has(arr[i])){
            s.add(arr[i]);
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

/*
merge two sorted array
 */
function mergeSortedArray(a1, a2) {
    var i=0,
        j=0,
        newArr=[];
    while(i<a1.length && j<a2.length){
        if(a1[i]>=a2[j]){
            newArr.push(a2[j]);
            j+=1;
        }else{
            newArr.push(a1[i]);
            i+=1;
        }
    }
    if(i>a1.length && j < a2.length){
        return newArr.concat(a2.splice(j,a2.length));
    }else if(i<a1.length && j > a2.length){
        return newArr.concat(a1.splice(i,a1.length));
    }else{
        return newArr;
    }
}

/*
swap number without temp
 */
function swapNumb(a, b){
    console.log('before swap: ','a: ', a, 'b: ', b);
    a=b-a;
    b=b-a;
    a=b+a;
    console.log('after swap: ','a: ', a, 'b: ', b);
}

/*
string reverse
 */
function reverse(str) {
    return str.split('').reverse().join('');
}

/*
reverse in place
 */
function reverseInPlace(str){
    var sa=str.split(' '),
        newA=[];
    sa.forEach(function(e){
        newA.push(e.split('').reverse().join(''));
    });
    return newA.join(' ');
}


/*
first non-repeat char
 */
function firstNonRepeatChar(str){
    var s={},
        sa = str.split('');
    sa.forEach(function (t) {
        if(!s[t]){
            s[t]=1
        }else if(s[t]){
            s[t]+=1;
        }
    });
    var i=0;
    while(i<sa.length){
        if(s[sa[i]]==1){
            return sa[i];
        }
        i+=1;
    }
    return 'No'
}

/*
remove duplicate char

 */
function removeDuplicateChar(str) {
    var s={},
        arr=str.split(''),
        newA=[];

    arr.forEach(function (t) {
        if(!s[t]){
            s[t]=1;
        }else{
            s[t]+=1;
        }
    });
    var i=0;
    while(i<arr.length){
        if(s[arr[i]]==1){
            newA.push(arr[i]);
        }
        i+=1;
    }
    return newA.join('');
}

/*
Sum of two
*/

function sumFinder1(arr, n) {
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]+arr[j]==n){
                return true;
            }
        }
    }
    return false;
}
function sumFinder2(arr, sum) {
    var differ = {};
    for(var i =0; i<arr.length; i++){
        var substract = sum - arr[i];

        if(differ[substract])
            return true;
        else
            differ[arr[i]] = true;
    }

    return false;
}

/*
largest Sum
 */
function LS1(arr) {
    var newArr=arr.sort(function (a, b) {
        return a-b;
    });
    return newArr[newArr.length-1]+newArr[newArr.length-2];
}
function LS2(arr) {
   var len=arr.length,
        a=-1,
        b=-1;
   for(var i=0;i<len;i++){
       if(arr[i]>a&&arr[i]>b){
           b=a;
           a=arr[i];
       }else if(arr[i]<a && arr[i]>b){
           b=arr[i];
       }
   }
   return a+b;
}

/*
counting zeros
 */

function countZero(n){
    var c=0;
    while(n>0){
        c+=Math.floor(n/10);
        n=n/10
        if(n<1){
            break;
        }
    }
    return c;
}

/*
subString
 */
function subStringFinder(str, subStr){
    var l1=str.length, l2=subStr.length;
    for(var i=0;i<=l1-l2;i++){
        //var s=i;
        for(var j=0;j<l2;j++){
            //console.log(j);
            if(str[i+j]!=subStr[j]){
                break;
            }
            if(j==(l2-1)){
                return i;
            }
        }
    }
    return -1;
    //return str.indexOf(subStr);
}

/*
String combination
 */
function combinations(str){
   var arr1=str.split("");
   var res=[];
   var tmp="";
   var bitNum=Math.pow(2,arr1.length);
   for(var i=0;i<bitNum;i++){
       tmp="";
       for(var j=0;j<arr1.length;j++){
           if(i & Math.pow(2,j)){
               tmp+=arr1[j];
           }
       }
       if(tmp!==""){
           res.push(tmp);
       }
   }
   return res;
}

/*
Returns a passed string with letters in alphabetical order
 */
function alphabet_order(str){
    return str.split('').sort().join('');
}

/*
Converts the first letter of each word of a string in upper case
 */
function uppercase(str) {
    var words=str.split(' ');
    newStrArr=[];
    words.forEach(function (word) {
        var eachChar = word.split('');
        eachChar[0]=eachChar[0].toUpperCase();
        newStrArr.push(eachChar.join(''));
    });
    return newStrArr.join(' ');
}

/*
Find the longest word within a string
 */
function find_longest_word(str) {
    var arr = str.split(' '),
        ind=-1,
        tmpL=-1,
        i=0;
    arr.forEach(function (e, i) {
        if(e.length>tmpL){
            ind=i;
            tmpL=e.length;
        }
    });
    return arr[ind];
}

/*
Counts the number of vowels within a string
 */
function vowel_count(str){
    var s=str.toLowerCase().split('');
    var se= new Set(['a','e','i','o','u']);
    var c=0;
    s.forEach(function (e) {
        if(se.has(e))
            c+=1;
    })
    return c;
}


/*
Second lowest and second greatest numbers from an array
 */
function Second_Greatest_Lowest(arr) {
    var sArr=arr.sort(function (a, b) {
        return a-b;
    })
    return [sArr[1], sArr[sArr.length-2]];


}

/*
Find a perfect number
 */
function is_perfect(n) {
    var d=0;
    for(var i=1;i<n;i++){
        if(n%i==0){
            d+=i;
        }
    }
    console.log(d==n);
    return (d==n)&&(n!=0);
}

/*
Compute the factors of a positive integers
 */
function factors(n) {
    var arr=[];
    for(var i=1;i<=n;i++){
        if(n%i==0){
            arr.push(i);
        }
    }
    return arr;
}

/*
Convert an amount to coins
 */
function amountTocoins(n,arr) {
    var t=n,i=0,r=[];
    while(i<arr.length){
        if(t>=arr[i]){
            r.push(arr[i]);
            t=t-arr[i];
        }else{
            i+=1;
        }
    }
    return r;
}

/*
Compute the value of bn where n is the exponent and b is the bases
 */
function exp(b, n) {
    var ans = 1,i=1;
    while(i<=n){
        ans*=b;
        i+=1;
    }
    return ans;

}

/*
Extract unique characters from a string
 */
function unique_char(str) {
    var r='';
    for(var i=0; i<str.length; i++){
        if(r.indexOf(str[i])==-1){
            r+=str[i];
        }
    }
    return r;
}

/*
Number of occurrences of each letter in specified string
 */
function Char_Counts(str) {
    var r ={};
    for(var i=0;i<str.length;i++){
        if(str[i]!==' '){
            if(!r[str[i]]){
                r[str[i]]=1;
            }else {
                r[str[i]]+=1;
            }
        }
    }
    return r;
}

/*
 Search JavaScript arrays with a binary search
 */
function array_binarySearch(arr, n) {
    var i=0,l=arr.length-1,m;
    while(i<=l){
        m=Math.floor((i+l)/2);
        if(arr[m]==n){
            return m;
        }else if(arr[m]>n){
            l=m-1;
        }else{
            i=m+1;
        }
    }

}
//var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
//console.log(array_binarySearch(myArray, 6));

/*
Bigger elements in an array
 */
function BiggerElements(n) {
    return function (v) {
        return v>n;
    }
}
//var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
//console.log(result);