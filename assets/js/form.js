
document.querySelector(".btn-contact").addEventListener("click", function () {

    // Pega os valores do formulário
    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const servico = document.getElementById("servico").value;
    const data = document.getElementById("data").value;
    const mensagem = document.getElementById("mensagem").value.trim();

    // Validação simples
    if (!nome || !telefone || !servico || !data) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
    }

    // COLOQUE AQUI O NÚMERO DA MECÂNICA (FORMATO: 55 + DDD + número)
    const numeroWhatsapp = "5524999999999";

    // Traduzir valores do select para texto mais bonito
    const servicosMap = {
        revisao: "Revisão Completa",
        oleo: "Troca de Óleo",
        freios: "Freios e Suspensão",
        alinhamento: "Alinhamento e Balanceamento",
        eletrica: "Elétrica Automotiva",
        ar: "Ar Condicionado",
        injecao: "Injeção Eletrônica",
        funilaria: "Funilaria e Pintura",
        outro: "Outro"
    };

    // Corrigir nome bonitinho
    const servicoSelecionado = servicosMap[servico] || servico;

    // Montar a mensagem
    const texto =
`📆 *NOVO AGENDAMENTO RECEBIDO*

👤 *Nome:* ${nome}
📱 *Telefone:* ${telefone}
🛠 *Serviço desejado:* ${servicoSelecionado}
📅 *Data desejada:* ${data}

📝 *Detalhes adicionais:*
${mensagem ? mensagem : "Nenhuma observação adicionada."}
`;

    // Converter texto para URL
    const textoEncode = encodeURIComponent(texto);

    // Link oficial do WhatsApp
    const url = `https://wa.me/${numeroWhatsapp}?text=${textoEncode}`;

    // Abrir WhatsApp
    window.open(url, "_blank");

    // Opcional: limpar formulário
    document.querySelector(".form-card").reset();
});
