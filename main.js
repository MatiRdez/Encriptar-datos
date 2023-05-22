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
}