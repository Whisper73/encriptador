
const input = document.querySelector(".input__contenido");
const output = document.querySelector(".ouput__contenido");

function btnEncriptar() {
    const textoEncriptado = encriptar(input.value);
    output.value = textoEncriptado;
    input.value = "";

}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(input.value);
    output.value = textoEncriptado;
    input = "";

}

function copiar() {
    output.select();
    output.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(output.value);
    output.value="";
}

function encriptar(texto) {
    let tabla = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < tabla.length; i++) {
        if (texto.includes(tabla[i][0])) {
            texto = texto.replaceAll(tabla[i][0], tabla[i][1]);
        }
    }
    return texto;
}

function desencriptar(texto) {
    let tabla = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    texto = texto.toLowerCase();
    for (let i = 0; i < tabla.length; i++) {
        if (texto.includes(tabla[i][1])) {
            texto = texto.replaceAll(tabla[i][1], tabla[i][0]);
        }
    }
    return texto;
}




