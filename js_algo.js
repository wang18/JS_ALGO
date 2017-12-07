function palindrome1(str){
	var re=/[\w_]/g;
	var newStr=str.toLowerCase().trim().replace(re,'');
	var resStr = newStr.split('').reverse().join('');
	return newStr == newStr;	
}