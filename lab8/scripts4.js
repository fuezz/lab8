// Sets the initial colors of the three elements on page load
document.getElementById("blue").style.color = "blue";
document.getElementById("green").style.color = "green";
document.getElementById("red").style.color = "red";

// A function to change colors of elements when called
function changeColors() {
    var first = "#00BB00";   // Green
    var second = "#BB9320";  // Orange
    var third = "#AB00FF";   // Purple

    document.getElementById("blue").style.color = first;
    document.getElementById("green").style.color = second;
    document.getElementById("red").style.color = third;
}
