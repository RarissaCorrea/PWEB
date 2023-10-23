const imagem = document.getElementById("imagem");
const titulo = document.getElementById("titulo");

onload = () => {
    imagem.src = "img/janelinhaFechada.jpg";
    titulo.innerHTML = "Janela Fechada";
}

imagem.addEventListener("mouseenter", () => {
    imagem.src = "img/janelinhaAberta.jpg";
    titulo.innerHTML = "Janela Aberta";
});

imagem.addEventListener("mouseleave", () => {
    imagem.src = "img/janelinhaFechada.jpg";
    titulo.innerHTML = "Janela Fechada";
});

imagem.addEventListener("click", () => {
    imagem.src = "img/janelinhaQuebrada.jpg";
    titulo.innerHTML = "Janela Quebrada";
});