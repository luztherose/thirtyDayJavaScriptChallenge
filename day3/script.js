// Updating CSS Variables with JS

// Select all the inputs 

const inputs = document.querySelectorAll('.controls input'); // we are getting back a NodeList
/*
    A NodeList looks like an array but is not an array. The difference btw a  NodeList and an array is that an array has all kind of methods to be deal with like map(), reduce(), forEach() ... In the prototype of a NodeList we only have a couple of methods like entries(), forEach(), keys(), values()...
*/
function handleUpdate() {
    //dataset is an object that contains all the info all the data attr of an element. 
    const suffix = this.dataset.sizing || "";
    /*
        selecting the CSS variables
        we are going to select the entire doc(root) and we are going to set a property of with the name of our variables
    */
    document.documentElement.style.setProperty(`--${this.name}`, this.value +suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))