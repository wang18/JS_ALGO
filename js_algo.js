/*
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261
https://career.guru99.com/top-50-csscascading-style-sheet-interview-questions/
https://www.tutorialspoint.com/css/css_interview_questions.htm
https://www.toptal.com/javascript/interview-questions
https://www.codementor.io/nihantanu/21-essential-javascript-tech-interview-practice-questions-answers-du107p62z
* */

/*
*Palindrome
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
*check Prime
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
* PrimeFactors
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
* nth fibonacci number
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