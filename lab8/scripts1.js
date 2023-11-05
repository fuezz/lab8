//This will output when the page loads
document.write("Output");

//This will output when a button is pressed


function styleParagraphs() {
    var p1 = document.getElementById("paragraph1");
    var p2 = document.getElementById("paragraph2");
    var p3 = document.getElementById("paragraph3");

    p1.style.color = "blue";
    p2.style.color = "red";    // Change text color of paragraph 1
    p2.style.fontSize = "18px";  // Change font size of paragraph 2
    p3.style.backgroundColor = "lightgray";
    p2.style.backgroundColor = "lightgray";
    p3.style.color = "green";    // Change background color of paragraph 3
}
