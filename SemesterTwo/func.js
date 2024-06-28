let testScores = [40,50,22,55,70,78,80,90];

let answer1 = testScores.filter((num)=>{
    return num >= 70;
})
console.log(answer1);


let grades = [85,92,78,88,95];
grades.forEach((number) =>{
    let answer = number + 5;
    console.log(answer)
})


let numbers = [2,4,6,8,10];
let square = numbers.map(function(value){
    return(value * value);
})
console.log(square);



let clubMembers = ["Emily", "Jack", "Sophia", "Daniel"];

let text = "";
for (let name of clubMembers) {
  text += name;
  console.log(text);
}