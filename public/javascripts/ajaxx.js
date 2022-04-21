    
function ajaxFunction()
{
var httpxml;
try
{
// Firefox, Opera 8.0+, Safari
httpxml=new XMLHttpRequest();
}
catch (e)
{
// Internet Explorer
try
{
httpxml=new ActiveXObject("Msxml2.XMLHTTP");
}
catch (e)
{
try
{
httpxml=new ActiveXObject("Microsoft.XMLHTTP");
}
catch (e)
{
alert("Your browser does not support AJAX!");
return false;
}
}
}
function stateChanged() 
{
if(httpxml.readyState==4)
{
///////////////////////
//alert(httpxml.responseText); 
var myObject = JSON.parse(httpxml.responseText); 
//alert(myObject.data[0].msg);
if(myObject.data[0].status_form==="NOTOK"){ // status of form if notok
document.getElementById("msgDsp").style.borderColor='red';
document.getElementById("msgDsp").style.background='#f0f0c0';
document.getElementById("msgDsp").innerHTML=myObject.data[0].msg;

}/// end of if if form status is notok
else {        ///// Validation is passed 

document.getElementById("msgDsp").style.borderColor='blue';
document.getElementById("msgDsp").style.background='#2CFC90';
document.getElementById("msgDsp").innerHTML=" Welcome <br> ";
document.myForm.reset();
window.location='http://localhost:1337/Analytics';
} // end of if else if status form notok
/////// Changing the border colors /////////////
//////////////
}
}

/////////////////////////////////
function getFormData(myForm) { 
var myParameters = new Array(); 
myParameters.push("todo=" + myForm.todo.value);
myParameters.push("userid=" + myForm.userid.value); 
myParameters.push("password=" + myForm.password.value);
return myParameters.join("&"); 
} 
////////////////////////////////////////////
var url="javascripts/js/demo/chart-area.js";
var myForm = document.forms[0]; 
var parameters=getFormData(myForm);
httpxml.onreadystatechange=stateChanged;
httpxml.open("POST", url, true)
httpxml.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
//alert(parameters);
httpxml.send(parameters) 
document.getElementById("msgDsp").innerHTML="<img src=../wait.gif>";
////////////////////////////////
}
