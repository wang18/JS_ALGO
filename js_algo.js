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

console.log(combinations("dog"));






