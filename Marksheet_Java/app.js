var resMar = alert("Result/Marksheet");

var getid = prompt("Enter Your Full Name").toLocaleUpperCase();
document.getElementById("name").innerText = getid

var getid2 = prompt("Enter Your Father's Name").toLocaleUpperCase();
document.getElementById("fname").innerText = getid2

var getid3 = prompt("Enter Your Date of Birth")
document.getElementById("dob").innerText = getid3

var getid4 = prompt("Enter Your Roll No.")
document.getElementById("sno").innerText = getid4

var getid5 = prompt("Enter Your Examination Centre").toLocaleUpperCase();
document.getElementById("examcen").innerText = getid5

var getid6 = prompt("Enter Your College/Institute Name").toLocaleUpperCase();
document.getElementById("school").innerText = getid6

var getid7 = prompt("Enter Your Group").toLocaleUpperCase();
document.getElementById("group").innerText = getid7

var getid8 = prompt("Enter your Urdu marks, Max-marks is 75");
document.getElementById("urdumarks").innerText = getid8;
document.getElementById("urdutotal").innerText = getid8;

var getid9 = prompt("Enter your English marks, Max-marks is 75");
document.getElementById("engmarks").innerText = getid9;
document.getElementById("engtotal").innerText = getid9;

var getid10 = prompt("Enter your Islamiat Studies marks, Max-marks is 75");
document.getElementById("islmarks").innerText = getid10;
document.getElementById("isltotal").innerText = getid10;

var getid11 = prompt("Enter your Mathematics marks, Max-marks is 100");
document.getElementById("mathmarks").innerText = getid11;
document.getElementById("mathtotal").innerText = getid11;

var getid12 = prompt("Enter your Chemistry marks, Max-marks is 85");
document.getElementById("chemmarks").innerText = getid12;

var getid13 = prompt("Enter your Chemistry Practical marks, Max-marks is 15");
document.getElementById("chempracmarks").innerText = getid13;

var chemTotal = parseInt(getid12) + parseInt(getid13);
document.getElementById("chemtotal").innerText = chemTotal;

var getid14 = prompt("Enter your Physics marks, Max-marks is 85");
document.getElementById("phymarks").innerText = getid14;

var getid15 = prompt("Enter your Physics Practical marks, Max-marks is 15");
document.getElementById("phypracmarks").innerText = getid15;
var physicsTotal = parseInt(getid14) + parseInt(getid15);
document.getElementById("phytotal").innerText = physicsTotal;

var addTotalNumber = parseInt(getid8) + parseInt(getid9) + parseInt(getid10) + parseInt(getid11) + parseInt(getid12) + parseInt(getid13) + parseInt(getid14) + parseInt(getid15)
document.getElementById("totalmarks").innerText = addTotalNumber;

if(addTotalNumber > 680) {
    document.getElementById("obtainedgrade").innerText = "A+";
}
else if (addTotalNumber < 680 && addTotalNumber > 595 ){
    document.getElementById("obtainedgrade").innerText = "A";
} 
else if (addTotalNumber < 595 && addTotalNumber > 510){
    document.getElementById("obtainedgrade").innerText = "B";
}
else if (addTotalNumber < 510 && addTotalNumber > 425){
    document.getElementById("obtainedgrade").innerText = "C";
}
else if (addTotalNumber < 425 && addTotalNumber > 340){
    document.getElementById("obtainedgrade").innerText = "D";
}
else if (addTotalNumber < 340 && addTotalNumber > 255){
    document.getElementById("obtainedgrade").innerText = "E";
}
else {
    document.getElementById("gradeyouget").innerText = "Fail";
}


document.getElementById("dateofissue").innerHTML = Date();