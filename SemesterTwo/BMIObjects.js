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
    fullName : 'John Smith';
    mass : 92;
    height : 1.95;

    

mark.calcBMI();
john.calcBMI();
console.log(mark.bmi, john.bmi);