
const name = function (params) {
    console.log(params);
}

name("Kenneth");



function firstFunction() {
    console.log("first function called");
}

function secondFunction(callBack) {
    console.log("second function called");
    callBack();
}

secondFunction(firstFunction);

test("add numbers", () => {

})
