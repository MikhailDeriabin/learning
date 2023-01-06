//Constructor
function $(){}

//Object method
function id(id){
    const result = document.getElementById(id);
    if(result === undefined || result === null)
        console.log("Element with id " + id + " not found");
    return result;
}

export { id };