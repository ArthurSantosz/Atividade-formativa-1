//atividade 1
// Função para validar o formulário
function validarFormulario() {
   
    let inData = document.getElementById('inData').value;
    let inCli = document.getElementById('inCli').value;
    let inFone = document.getElementById('inFone').value;
    let inMail = document.getElementById('inMail').value;
    let inProd = document.getElementById('inProd').value;
    let inQtd = document.getElementById('inQtd').value;
    let inVal = document.getElementById('inVal').value;

   
    let erro = "";


    switch (true) {
        case inData === "":
            erro += "O campo Data não pode estar vazio!\n";
            break;
        case inCli === "":
            erro += "O campo Nome do cliente não pode estar vazio!\n";
            break;
        case inFone === "":
            erro += "O campo Telefone não pode estar vazio!\n";
            break;
        case inMail === "":
            erro += "O campo E-mail não pode estar vazio!\n";
            break;
        case inProd === "":
            erro += "O campo Nome do produto não pode estar vazio!\n";
            break;
        case inQtd === "":
            erro += "O campo Quantidade não pode estar vazio!\n";
            break;
        case inVal === "":
            erro += "O campo Valor unitário não pode estar vazio!\n";
            break;
    }

   
    if (inCli.length < 5) {
        erro += "O campo Nome do cliente deve conter pelo menos 5 caracteres!\n";
    } else if (inProd.length < 5) {
        erro += "O campo Nome do produto deve conter pelo menos 5 caracteres!\n";
    }

    
    if (parseFloat(inQtd) <= 0) {
        erro += "O campo Quantidade deve ser um valor positivo!\n";
    } else if (parseFloat(inVal) <= 0) {
        erro += "O campo Valor unitário deve ser um valor positivo!\n";
    }

    
    const divErro = document.getElementById('mensagem-erro');
    if (erro !== "") {
        divErro.style.display = 'block';
        divErro.innerText = erro;
        return false; 
    } else {
        divErro.style.display = 'none';
        
        return true; 
    }
}


document.getElementById('btnEnviar').addEventListener('click', validarFormulario);


//atividade 2


//atividade 3
// Função para alternar a lâmpada entre acesa e apagada
function alterarLampada() {
    let imagem = document.getElementById('lampada');
    let caminho = imagem.src;
    let arquivo = caminho.substring(caminho.lastIndexOf('/') + 1);
    let btnEnviar = document.getElementById("btnEnviar");


    if (arquivo === 'acesa.jpg') {
        imagem.src = 'img/apagada.jpg';
        btnEnviar.textContent = 'Acender'; 
    } else {
        imagem.src = 'img/acesa.jpg';
        btnEnviar.textContent = 'Apagar'; 
    }
}

//atividade 4
document.getElementById('btnEnviar').addEventListener('click', calcularDesconto);

function calcularDesconto() {
    const valorPedido = parseFloat(document.getElementById('inValorPedido').value);
    let percentualDesc = 0;

    if (valorPedido >= 2000) {
        percentualDesc = 1.5;
    } else if (valorPedido >= 1500) {
        percentualDesc = 1.0;
    } else if (valorPedido >= 1000) {
        percentualDesc = 0.8;
    } else if (valorPedido >= 500) {
        percentualDesc = 0.5;
    }

    const valorDesconto = (valorPedido * percentualDesc) / 100;
    const valorFinal = valorPedido - valorDesconto;

    document.getElementById('inPercDesc').value = percentualDesc.toFixed(2);
    document.getElementById('inValDesc').value = valorDesconto.toFixed(2);
    document.getElementById('inValFinal').value = valorFinal.toFixed(2);
}