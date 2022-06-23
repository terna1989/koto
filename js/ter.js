<script>
      function additionOf(){
  let num1 = document.getElementById("firstnumber").value
  let num2 = document.getElementById("secondnumber").value
  let sol = parseInt(num1) + parseInt(num2);
  document.getElementById("result").innerHTML="Your answer is:" + sol;
}
function substractionOf(){
 let num1 = document.getElementById("firstnumber").value
 let num2 = document.getElementById("secondnumber").value
 let tol = num1 - num2;
  document.getElementById("result").innerHTML="Your answer is:" + tol;
}
function multiplyBy(){
 let  num1 = document.getElementById("firstnumber").value
let  num2 = document.getElementById("secondnumber").value
  document.getElementById("result").innerHTML="Your answer is:" + num1*num2;
  
}
function divideBy(){
  let num1 = document.getElementById("firstnumber").value
 let num2 = document.getElementById("secondnumber").value
  document.getElementById("result").innerHTML= "Your answer is:" + num1/num2;
}
      </script>