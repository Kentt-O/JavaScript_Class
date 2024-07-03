const mark = {
    fullName : 'Mark Miller',
    mass : 78,
    height : 1.69,

    calcBMI : function (){
        this.bmi = this.mass / (this.height ** 2)
        return this.bmi
    },

};

const john = Object.create(mark);
john.fullName = 'John Smith';
john.mass = 92;
john.height = 1.95;



mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);

if (mark.bmi > john.bmi){
    console.log(`${mark.fullName}'s BMI "${mark.bmi}"\nis higher than ${john.fullName}'s BMI "${john.bmi}"`)
} else if (john.bmi > mark.bmi){
    console.log(`${john.fullName}'s BMI "${john.bmi}"\nis higher than ${mark.fullName}'s BMI "${mark.bmi}"`)
}else {
    console.log(`Both ${mark.fullName} and ${john.fullName} have the same BMI`);
}