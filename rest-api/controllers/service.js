module.exports.Functions1= async function Function1(){
    //await setTimeout(3000);
    for(let i=0; i<1000;i++){
    console.log("in 1")
    }
    return 1
}
module.exports.Functions2= async function Function2(){
    for(let i=0; i<500;i++){
        console.log("in 2")
        }
    return 2
}