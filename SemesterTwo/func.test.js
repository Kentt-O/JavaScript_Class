const {returnTestScoresAboveSeventy} = require("./func.js");

test("find student scores that are above 70",  () => {
    let testScores = [40,50,22,55,70,78,80,90];
    let answer = returnTestScoresAboveSeventy(testScores)
    expect(answer).toEqual([70,78,80,90]); 
});

