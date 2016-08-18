// can be broken because I'm getting a headache!



function phoneNumber() {
    var info = prompt("Enter your phone number, Trust me");
    if (info && info.match(/^\d{3}-\d{3}-\d{4}$/)) {
        alert("WOW! you actually trust me?");
        validDate();
    } else {
        alert("OUCH :(");

    }
}



///////////////////////////////////////////////////////////////////////////////



function bday() {
    var birthday = prompt("Enter your date of birth. Use MM/DD/YY format");
    if (birthDay.match(/^\d{2}\/\d{2}\/\d{2}$/)) {
        alert("Good Good");

    } else {
        alert("Nah Fam.");

    }
}





function postCode() {
    var postalCode = prompt("What is your zip code? Use XXXXX format.");

    var valid = true;
    for (var i = 0; i < postalCode.length; i++) {
        var char = postalCode[i];
        if (char == 0 && postalCode.length === 5) {} else if (char == 1 && postalCode.length === 5) {} else if (char == 2 && postalCode.length === 5)
        {} else if (char == 3 && postalCode.length === 5) {} else if (char == 4 && postalCode.length === 5) {} else if (char == 5 && postalCode.length === 5)
        {} else if (char == 6 && postalCode.length === 5) {} else if (char == 7 && postalCode.length === 5) {} else if (char == 8 && postalCode.length === 5)
        {} else if (char == 9 && postalCode.length === 5) {} else {

            valid = false;
        }
    }
    if (valid) {
        alert("Sweet");

    } else {
        alert("Nah Fam.");

    }

}


function stateinfo() {
    var state = prompt("What state you claim?, Capitalize both letters.");
    if (state.charAt(0) >= "A" && state.charAt(0) <= "Z" &&
        state.charAt(1) >= "A" && state.charAt(1) <= "Z" &&
        state.length === 2) {
        alert("Good");

    } else {
        alert("Try again...Fam.");
        stateAbreviation();
    }
}





function marriage() {
    var maritalStatus = prompt("Are you married?");
    if (maritalStatus == "yes" || maritalStatus == "Yes" || maritalStatus == "YES") {
        alert("My condolsences");
    } else if (maritalStatus == "no" || maritalStatus == "No" || maritalStatus == "NO") {
        alert("Freedom");
    } else {
        alert("seems like you messed up Fam.");

    }
}
