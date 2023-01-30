let myInputBox;
let myInputBoxValue;
let userNameArray = ["John", "Tiffany", "Melanie", "Karyn", "lesego", "Kaylene", "Kirk", "Mpho", "Nwabisa", "Veronique"];
let myElement;
let theText;
const theOutputParagraph = document.getElementById("theOutputParagraph");

function submitFunction() {
    myInputBox = document.getElementById("theInput");
    myInputBoxValue = myInputBox.value;

    switch (myInputBoxValue) {

        case "1":
            addThreeUsers();
            break;

        case "2":
            removeUser();
            break;

        case "3":
            displayAllUsers();
            break;

        case "4":
            sortUsers();
            break;

        default:
            alert("Please choose a valid option");
    }
}

function addThreeUsers() {
    // Add Three Users
    let name1 = document.getElementById("firstName");
    let name2 = document.getElementById("secondName");
    let name3 = document.getElementById("thirdName");
    let name1Value = name1.value;
    let name2Value = name2.value;
    let name3Value = name3.value;
    userNameArray.push(name1Value);
    userNameArray.push(name2Value);
    userNameArray.push(name3Value);

    display();

}

function removeUser() {
    // Remove User
    let removeUserInput = document.getElementById("removeUser");
    let theUserText = removeUserInput.value;
    console.log(userNameArray);
    for (let i = 0; i < userNameArray.length; i++) {
        if (userNameArray[i] == theUserText) {
            userNameArray.splice(i, 1);
            // Display all Users
            display();
        }
    }
}

function displayAllUsers() {
    // Display all Users
    display();
}

function sortUsers() {
    userNameArray.sort();
    // Display all Users
    display();

}

function display() {
    document.getElementById("theOutputParagraph").innerHTML = '';
    for (let i = 0; i < userNameArray.length; i++) {
        myElement = document.createElement("h3");
        theText = document.createTextNode(userNameArray[i]);
        myElement.appendChild(theText);
        document.getElementById("theOutputParagraph").appendChild(myElement);
    }
}