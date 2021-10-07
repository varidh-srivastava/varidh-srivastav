var avgMarks= Number(prompt(`enter your average marks`));

let grade=avgMarks>=75 && avgMarks<=100?'A':avgMarks>=60 && avgMarks<75?'B':avgMarks>=35 && avgMarks<60?'C':'FAIL';
alert(grade);










// if(marks>=75 && marks <=100){
//     grade = "A";
// }
// else if(marks>=60 && marks <75){
//     grade = "B";
// }
// else if(marks>=35 && marks < 60){

//     grade = "C";
// }
// else {
//     grade = "F";
// }