//This will output when the page loads
document.write("Output");

//This will output when a button is pressed

function calculate(operator, num1, num2) {
            var result;
            switch (operator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;
                    } else {
                        result = "Division by zero";
                    }
                    break;
            }
            document.getElementById("result").value = result;
        }
