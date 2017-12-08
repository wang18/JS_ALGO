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
	var re=/[\w_]/g;
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
console.log(removeDuplicateChar('Learn more javascript dude') === "Lnmojvsciptu");












