function outputA(){
    console.log("this is output A");
}

function outputB(){
    console.log("this is output B");
}

//export {outputA as alias,outputB}

module.exports = {
    alias:outputA,
    outputB
}