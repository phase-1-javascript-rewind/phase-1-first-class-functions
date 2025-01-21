function receivesAFunction(callback){
    return callback()
}
console.log(receivesAFunction(function(){'Hello world'}))
function returnsANamedFunction(){
    return function named(){
        
    }
}
function returnsAnAnonymousFunction(){
    return function (){
        
    }
}