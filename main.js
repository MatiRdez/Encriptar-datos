let inputA = document.getElementById("inputA");

inputA.addEventListener("input", () => {
    if(inputA.value.length === 4){
        document.getElementById("enviarA").disabled = false;
    }
    else{
        document.getElementById("enviarA").disabled = true;
    }
});

const encriptar = () => {

    let numA = inputA.value;
    let cadenaA = numA.toString();
    let digitosA = [];
    for (let i = 0; i < cadenaA.length; i++){
        digitosA.push(parseInt(cadenaA[i], 10));
    }
    
}