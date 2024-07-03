const Kent = {
    firstName: 'John',
    lastName: 'Kent',
    birthYear: 1994,
    jobTitle: 'Software Engineer',
    hobbies: ['reading', 'painting', 'cooking'],
    friends: ['Daniel', 'Sam', 'Smart'],
    hasDriverslincense: true,

    calculateAge: function() {
        return new Date().getFullYear() - this.birthYear;
    },
};

console.log(Kent);
console.log(`Kent's age is ${Kent.calculateAge()} years old.`);


Kent.hobbies.push('playing guitar');
console.log(Kent);


Kent.friends.splice(1, 1, 'Jane');
console.log(Kent);


Kent.hasDriverslincense = false;
console.log(Kent);


console.log(`Kent is ${Kent.hasDriverslincense ? 'driving' : 'not driving'} legally.`);



const Sarah = Object.create(Kent);
Sarah.firstName = 'Sarah';
Sarah.lastName = 'Smith';
Sarah.birthYear = 1990;
Sarah.jobTitle = 'Product Manager';
Sarah.hobbies = ['painting', 'traveling', 'reading'];
Sarah.friends = ['John', 'Emily', 'Samantha'];
Sarah.hasDriverslincense = true;

console.log(Sarah);
console.log(`Sarah's age is ${Sarah.calculateAge()} years old.`);


console.log(`Sarah is ${Sarah.hasDriverslincense? 'driving' : 'not driving'} legally.`);

console.log(Kent.isPrototypeOf(Sarah));
console.log(Sarah.isPrototypeOf(Kent));

console.log(Object.getPrototypeOf(Sarah));
console.log(Object.getPrototypeOf(Kent));

console.log(Object.getOwnPropertyNames(Kent));
console.log(Object.getOwnPropertyNames(Sarah));

console.log(Object.getOwnPropertyDescriptor(Kent, 'firstName'));
console.log(Object.getOwnPropertyDescriptor(Sarah, 'firstName'));

console.log(Object.keys(Kent));
console.log(Object.values(Kent));
console.log(Object.entries(Kent));

console.log(JSON.stringify(Kent));
console.log(JSON.stringify(Sarah));

console.log(JSON.parse('{"firstName":"Sarah","lastName":"Smith","birthYear":1990,"jobTitle":"Product Manager","hobbies":["painting","traveling","reading"],"friends":["John","Emily","Samantha"],"hasDriverslincense":true}'));
/*
const cloneKent = {...Kent};
console.log(cloneKent);
cloneKent.firstName = 'Cloned';
console.log(Kent);
console.log(cloneKent);

const cloneSarah = {...Sarah};
console.log(cloneSarah);
cloneSarah.firstName = 'Cloned';
console.log(Sarah);


console.log(cloneKent === Kent);
console.log(cloneSarah === Sarah);
console.log(cloneKent === cloneSarah);

console.log(cloneKent.isPrototypeOf(cloneSarah));
console.log(cloneSarah.isPrototypeOf(cloneKent));
console.log(cloneKent.isPrototypeOf(Kent));
console.log(cloneSarah.isPrototypeOf(Sarah));

console.log(Object.getPrototypeOf(cloneKent));
console.log(Object.getPrototypeOf(cloneSarah));
console.log(Object.getPrototypeOf(Kent));
console.log(Object.getPrototypeOf(Sarah));

console.log(Object.getOwnPropertyNames(cloneKent));
console.log(Object.getOwnPropertyNames(cloneSarah));
console.log(Object.getOwnPropertyNames(Kent));
console.log(Object.getOwnPropertyNames(Sarah));

