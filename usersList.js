let database = ['john','Maggie','Andrew','Sifiso','Nwabisa','Bennie','Rafiek','Suzan','Henry','Jack'];

function myFunction(){
let text;
let selection = prompt();
switch(selection) {
  case '1':
    text = "Add three Users";
    break;
  case "2":
    text = "Remove User";
    break;
  case "3":
    text = "Display all users";
    break;
  case "4":
    text = "Sort users";
    
 }
 document.getElementById("demo").innerHTML = text;
}
 