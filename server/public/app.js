var inputObject = {};

$(document).ready(function(){
   init();
});

function init() {
   $("#clearForm").hide();

   $("#inputField").submit(function(event){
      event.preventDefault()
   });

   enable();
}

function enable(){
   $('#submitButton').on('click', getInputNumber);
   findMathOperation();

   $('#clearForm').on('click', clear);
}

function findMathOperation(){
   $('.math-button').on('click', function(event){
      var mathType = event.target.id;
      inputObject.type = mathType;
   });
}
function getInputNumber(){

   $.each($("#inputField").serializeArray(), function(i, field){
      inputObject[field.name] = field.value;
   });

   $("#inputField").find("input[type=text]").val("");

   appendInputInfo();

   callAjax();
   $("#clearForm").show();
}

function appendInputInfo(){
   $("#showEquation").append("<p>First Number: " + inputObject.firstNumber + "</p>");
   $("#showEquation").append("<p>Second Number: " + inputObject.secondNumber + "</p>");
   $("#showEquation").append("<p>Mathematical Operation: " + inputObject.type + "</p>");
}


function callAjax(){
   $.ajax({
      type: "POST",
      url: "/data",
      data: inputObject,
      success: function(data){
         displayResult(data);
      }
   });
}

function displayResult(data){
   addMathSymbol(inputObject);
   $("#showResults").append("<p>" + inputObject.firstNumber + " " +
       inputObject.symbol + " " +
       inputObject.secondNumber +
       " = " + data.result + "</p>");
}

function addMathSymbol(object){
   switch(object.type) {
      case "addition":
         object.symbol = "+";
         break;
      case "subtraction":
         object.symbol = "-";
         break;
      case "multiplication":
         object.symbol = "*";
         break;
      case "division":
      default:
         object.symbol = "/";
         break;
   }
}

function clear(){
   $("#showEquation").empty();
   $("#showResult").empty();
   inputObject = {};
   $("#clearForm").hide();
   $(".math-button").removeClass('active');
}