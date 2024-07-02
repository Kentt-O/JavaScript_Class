const name = "Esther";

function speak(params){
    let language = 'English';
    console.log(`Hello ${name} in ${language}`)
    function eat(){
        let food = "rice";
        console.log(food)
        console.log(name)
    }
    eat();
}
speak();

