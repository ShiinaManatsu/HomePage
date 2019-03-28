// This will be a system that can easily load event functions
var onLoadCallbacks=[];

document.addEventListener("DOMContentLoaded",function(){
    ProcessOnLoad();
});

function ProcessOnLoad(){
    ForEach(onLoadCallbacks,function(item){
        item();
    })
}

function OnLoad(callback){
    onLoadCallbacks.push(callback);
}

function ForEach(array,callback){
    for(var i=0;i<array.length;i++){
        callback(array[i]);
    }
}
// This will be a system that can easily load event functions