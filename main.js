function print(){
  var x= document.getElementById("floatingInput").value;
  var y= document.getElementById("inputPassword5").value;
  var link=document.createElement("a");

  if(y=="deng"){
    alert("Login successfully");
    link.href = "GTwebpage.html";
  }
  else
  {
    alert("please Login")
  }
  /*alert("the email is: "+x+"\n"+"the password is: "+y)*/



}