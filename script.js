function output() {
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);

    document.getElementById("result").innerHTML = "Interest : If you deposit <mark>" + principal + "</mark>,<br/>" +
        "at an interest rate of <mark>" + rate + "</mark>,<br/>" +
        "You will receive an amount of <mark>" + interest + "</mark>,<br/> " +
        "in the year <mark>" + year + "</mark>";}

function updateRate() {
    document.getElementById("rate_val").innerHTML = document.getElementById("rate").value;
}

function validatePositive() {
    
    var principal = document.getElementById("principal").value;
   
    if (principal.length == 0 ||principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false
    }

}

function compute() {

    var principal = document.getElementById("principal").value;

    if (principal.length == 0 ||principal <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false
    } else {
        return output()
    }

}
