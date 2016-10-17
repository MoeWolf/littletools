var myData = document.getElementsByClassName('origin')[0];
var subDate = document.getElementsByClassName('result')[0];
var numArr = [];
var letterArr = [];
var passDate = document.getElementsByClassName('pass')[0];
var passDiv = document.getElementsByClassName('passDiv')[0];
var container = document.getElementsByClassName('container')[0];


function detect() {
	var re = new RegExp('^[A-Z]+$');
	if(re.test(myData.value)){
		turn();
	}
	else{
		subDate.value = '傻吊输入大写字母';
	}
	
}

function reset() {
	myData.value = '';
	subDate.value = '';
}


function turn() {
	var dataArr = myData.value.split('');
	console.log(dataArr);
	console.log(dataArr[0].charCodeAt(0));
	for (var i=0,len=dataArr.length; i<len; i++) {
		if(i%5==0) {
			 numArr[i] = dataArr[i].charCodeAt(0)+1;
		}
		if(i%5==1) {
			 numArr[i] = dataArr[i].charCodeAt(0)+5;
		}
		if(i%5==2) {
			 numArr[i] = dataArr[i].charCodeAt(0)+4;
		}
		if(i%5==3) {
			 numArr[i] = dataArr[i].charCodeAt(0)-3;
		}
		if(i%5==4) {
			 numArr[i] = dataArr[i].charCodeAt(0)+2;
		}
	}
	console.log(numArr);
	for (var i=0,len=numArr.length; i<len; i++) {
		letterArr[i] = String.fromCharCode(numArr[i]);
		if(numArr[i]==62) {letterArr[i] = 'X'}
		else if(numArr[i]==63) {letterArr[i] = 'X'}
		else if(numArr[i]==64) {letterArr[i] = 'Y'}
		else if(numArr[i]==91) {letterArr[i] = 'A'}
		else if(numArr[i]==92) {letterArr[i] = 'B'}
		else if(numArr[i]==93) {letterArr[i] = 'C'}
		else if(numArr[i]==94) {letterArr[i] = 'D'}
		else if(numArr[i]==95) {letterArr[i] = 'E'}
	}
	console.log(letterArr);
	var output = letterArr.toString();
	subDate.value = output;
}

function pass() {
	if(passDate.value == '11223344') {
		passDiv.style.visibility = 'hidden';
		container.style.visibility = 'visible';
	}
	else{
		alert('密码不正确');
	}
}
