function descuento(numero, porcentaje){
    return Math.abs((numero * 200) * porcentaje / 100 - (numero * 200))
}

function borrar(){
    document.getElementById('cantidadID').value = "";
    document.getElementById('resultadoID').innerHTML = "";
}

function getSelectedValue(){
    var selectedValue = document.getElementById('inputState').value;
    console.log(selectedValue);
}

function MostrarEnPantalla(){
    console.log(descuento(document.getElementById('cantidadID').value, document.getElementById('inputState').value));
    document.getElementById('resultadoID').innerHTML = descuento(document.getElementById('cantidadID').value, document.getElementById('inputState').value);
}

descuento(100, 40)