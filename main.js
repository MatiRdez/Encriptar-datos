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

    let digitoFinalA1 = ((digitosA[0] + 7) % 10);
    let digitoFinalA2 = ((digitosA[1] + 7) % 10);
    let digitoFinalA3 = ((digitosA[2] + 7) % 10);
    let digitoFinalA4 = ((digitosA[3] + 7) % 10);
    
}