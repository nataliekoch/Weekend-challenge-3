var calculate = function(object){

    var result;
    switch(object.type) {
        case "addition":
            result = Number(object.firstNumber) + Number(object.secondNumber);
            break;
        case "subtraction":
            result = Number(object.firstNumber) - Number(object.secondNumber);
            break;
        case "multiplication":
            result = Number(object.firstNumber) * Number(object.secondNumber);
            break;
        case "division":
        default:
            result = Number(object.firstNumber) / Number(object.secondNumber);
            break;
    }

    return result;
}

module.exports = calculate;