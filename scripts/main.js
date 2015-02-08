function notButton(){
	//document.getElementById('noButtonPressed').innerHTML = "It says its a nothing button. ";
	alert("It says it's a nothing button.");
}

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

// This function works with variables, drops alerts for incorrectly entered numbers/operator. 
// kicks its answer to console as well as window
// It works with Logic and IS a function. Thts ev







function math() {
	var a = document.getElementById('n1').value;
	var b = document.getElementById('n2').value;
	var op = document.getElementById('op').value;

	if (!isNumeric(a) || !isNumeric(b)) {
		alert("Please enter proper numbers.");
		return
	}

	var result = 0;
	if (op === "+") {
		result = parseInt(a) + parseInt(b);
	} else if (op === "-") {
		result = parseInt(a) - parseInt(b);
	} else if (op === "*") {
		result = parseInt(a) * parseInt(b);
	} else {
		result = parseInt(a) / parseInt(b);
	}
	document.getElementById("mathResult").innerHTML = result;
	console.log(result);

}

// Following is for 'Enter names' section of page.

var nameList = [];
var nameIndex = 0;

// Adds entered name to nameList[]. Adds +1 to nameIndex.

function addName() {
	nameList[nameIndex] = document.getElementById('name').value;
	nameIndex++;
	for (var i = 0; i <= nameIndex; i++) {
		console.log("" + nameList);
	};
}

// Creates a string containing all the names of nameList[] separated 
// by comma and space. Does not add comma dn space after last element.
// Logs to console as it steps through nameList array building namesString.

function listNames() {
	var namesString = "";
	for (var i = 0; i < nameList.length; i++) {
		namesString += nameList[i];
		if (i < nameList.length - 1) {
			namesString += ", ";
		}
		console.log(namesString);
	}
	document.getElementById("nameListReturn").innerHTML = namesString;
}







