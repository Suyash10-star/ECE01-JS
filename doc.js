// for(key in object){
//     // code block to be executed
// }
// const person={
//     fname:"suyash",
//     lname:"rajput",
//     agr:19
// };
// for(let x in person){
// document.write("person details:"+ x + ":" + person[x]+"</br>");
// }
// var age=19;
// if(age>=18){
//     document.write("You are eligible to vote");

// }
// else{
//     document.write("you are not eligible to vote");
// }
let grade = 'A';
document.write("Entering switch statement"+"<br/>");
switch (grade) {
    case 'A':document.write("Excellent");
    break;
    case 'B':document.write("Good");
    break;
    case 'C':document.write("Fair");
    break;
    case 'D':document.write("Poor");
    break;
    default:document.write("Invalid grade");
}