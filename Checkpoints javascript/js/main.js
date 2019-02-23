//document.querySelector("#text").style.fontWeight = "bold"     normal
//document.querySelector("#text").style.fontStyle = "italic"    normal
//document.querySelector("#text").style.textDecoration = "underline"  none
function a (){
    return prompt("What's your name");   
  }
  function b (){
      var x=a()
      prompt("how old are you "+ x+ "?" )  
      alert("hello " + x + " And welcome");
  confirm('We use cookies for a better user experience');
  }
  
  
  //setTimeout(a, 3000);
  setTimeout(b,3000);

function gras() {
    var x = document.querySelector("#text").style
    if (x.fontWeight === "bold") {
        x.fontWeight = "normal"
    }
    else {
        x.fontWeight = "bold"
    }

}

function italique() {
    var x = document.querySelector("#text").style
   if (x.fontStyle === "italic"){ 
       x.fontStyle = "normal"
   }
   else {
       x.fontStyle = "italic"
   }
}

function souligner() {
    var x = document.querySelector("#text").style
    if (x.textDecoration === "underline") {
        x.textDecoration = "none"
    }
    else {
        x.textDecoration = "underline"
    }
}
/*function size (){
       
} */
function changeFontFamily() {
    var x = document.querySelector("#text").style
    x.fontFamily = document.querySelector("#family").value 

}
function changeFontSize(){
    var x = document.querySelector("#text").style
    x.fontSize = document.querySelector("#size").value+"px"
}