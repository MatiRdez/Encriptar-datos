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

    let auxA1 = digitoFinalA1;
    digitoFinalA1 = digitoFinalA3;
    digitoFinalA3 = auxA1;
    let auxA2 = digitoFinalA2;
    digitoFinalA2 = digitoFinalA4;
    digitoFinalA4 = auxA2;

    let claveA = digitoFinalA1 + "" + digitoFinalA2 + "" + digitoFinalA3 + "" + digitoFinalA4;

    let textoA = document.getElementById("claveA");

    textoA.innerHTML = "Su clave encriptada es: " + claveA;
    
}

let inputB = document.getElementById("inputB");

inputB.addEventListener("input", () => {
    if(inputB.value.length === 4){
        document.getElementById("enviarB").disabled = false;
    }
    else{
        document.getElementById("enviarB").disabled = true;
    }
});

const decifrar = () => {

    let numB = inputB.value;
    let cadenaB = numB.toString();
    let digitosB = [];
    for (let i = 0; i < cadenaB.length; i++){
        digitosB.push(parseInt(cadenaB[i], 10));
    }

    let digitoFinalB1 = ((digitosB[0] - 7 + 10) % 10);
    let digitoFinalB2 = ((digitosB[1] - 7 + 10) % 10);
    let digitoFinalB3 = ((digitosB[2] - 7 + 10) % 10);
    let digitoFinalB4 = ((digitosB[3] - 7 + 10) % 10);

    let auxB1 = digitoFinalB1;
    digitoFinalB1 = digitoFinalB3;
    digitoFinalB3 = auxB1;
    let auxB2 = digitoFinalB2;
    digitoFinalB2 = digitoFinalB4;
    digitoFinalB4 = auxB2;

    let claveB = digitoFinalB1 + "" + digitoFinalB2 + "" + digitoFinalB3 + "" + digitoFinalB4;

    let textoB = document.getElementById("claveB");

    textoB.innerHTML = "Su clave decifrada es: " + claveB;

}