document.getElementById('execute').addEventListener('click', function() {
    const amount = parseFloat(document.getElementById('amount').value);
    const direction = document.getElementById('direction').value;
    const output = document.getElementById('output');

    // Simulação de uma operação
    if (!amount || amount <= 0) {
        output.textContent = "Por favor, insira um valor válido.";
        return;
    }

    const result = Math.random() < 0.5 ? 'Win' : 'Lose'; // Simulando Resultado
    output.textContent = Você escolheu ${direction}. Resultado: ${result}.;
});