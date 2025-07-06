const imageOptions = document.getElementById("image-options"); //opções de imagens//
const displayImage = document.getElementById("display-image"); //imagem fixa//

imageOptions.addEventListener("change", (event) => {
  displayImage.src = event.target.value;
}); //muda imagem selecionada//

const orderButton = document.getElementById("order-button");

document.getElementById("order-form").addEventListener("submit", (event) => {
    const imageOptions = document.getElementById("image-options");
    const selectedOption = imageOptions.options[imageOptions.selectedIndex];

    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;


    //alertas!!!//
    // verifica se a opção selecionada é inválida
    if (selectedOption.disabled) {
        event.preventDefault(); // impede o envio do formulário
        alert("Por favor, selecione uma peça antes de encomendar.");
        return; // sai da função para evitar mostrar a mensagem de sucesso
    }
    
    if (!email || !address) { //se email e endereço não forem estiverem preenchidos//
        event.preventDefault(); // impede o envio do formulário
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // se uma peça válida for selecionada
    const altText = selectedOption.getAttribute("data-alt");
    alert(`Você selecionou a peça: ${altText}. Encomenda realizada!`);
});

