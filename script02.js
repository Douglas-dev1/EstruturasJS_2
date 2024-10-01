const comando = prompt("Informe o comando para a lâmpada (on/off):");

const elementoImagem = document.createElement("img")

switch (comando.toLocaleLowerCase()) {
    case "on":
        elementoImagem.src = "./assets/on.png"
        break;
    case "off":
        elementoImagem.src = "./assets/off.png"
        break;
    default:
        break;
}

if (elementoImagem.src != null) {
    document.body.appendChild(elementoImagem);
} on