const inputs = document.getElementById("inputs");
const C2F = document.getElementById("C2F");
const F2C = document.getElementById("F2C");
const tempResult = document.getElementById("tempResult");

let temp;


function tempchange(){
    if(C2F.checked){
        temp = Number(inputs.value); 
        temp = temp* 9 / 5 + 32
        tempResult.textContent=temp +"F";

    }

    else if(F2C.checked){
        temp = Number(inputs.value); 
        temp = 5 / 9 * (temp  - 32)
        tempResult.textContent=temp +"C";
    }

    else{
        tempResult.textContent="Select the unit first";
    }
}
