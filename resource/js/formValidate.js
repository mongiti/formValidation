'use strict';
function validate (field_id){
	/*take the value of the input field and set it to myValue */
    let MyValue = document.getElementById(field_id).value;
    MyValue = MyValue.trim(); /* This code trims the spaces in MyValue */
    if (MyValue == "" || MyValue == null) {

    	alert("Please enter your name"); 
    } else if (MyValue.length < 10) {
        alert("name should be atleast 10 charcters");
    }



}