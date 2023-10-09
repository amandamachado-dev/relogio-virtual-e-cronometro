
// Função para atualizar o relógio
function atualizarRelogio() {
    // Obtém a referência à div do relógio
    const relogio = document.getElementById("relogio");
    
    // Obtém a data e hora atual
    const dataAtual = new Date();
    
    // Extrai as horas, minutos e segundos da data atual
    const horas = dataAtual.getHours().toString().padStart(2, '0');
    const minutos = dataAtual.getMinutes().toString().padStart(2, '0');
    const segundos = dataAtual.getSeconds().toString().padStart(2, '0');
    
    // Atualiza o conteúdo da div do relógio com o horário formatado
    relogio.textContent = `${horas}:${minutos}:${segundos}`;
}

// Configura a função para ser chamada a cada segundo (1000 milissegundos)
setInterval(atualizarRelogio, 1000);

// Chama a função inicialmente para exibir o horário imediatamente ao carregar a página
atualizarRelogio();

// Variáveis para controlar o cronômetro
let cronometroInterval;
        let segundos = 0;
        let minutos = 0;
        let horas = 0;

        // Função para atualizar o cronômetro
        function atualizarCronometro() {
            const cronometro = document.getElementById("cronometro");
            // Exibe o tempo no formato HH:MM:SS
            cronometro.textContent = `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
            // Incrementa os segundos e ajusta minutos e horas, se necessário
            segundos++;
            if (segundos === 60) {
                segundos = 0;
                minutos++;
                if (minutos === 60) {
                    minutos = 0;
                    horas++;
                }
            }
        }
        // Função para iniciar o cronômetro
        function iniciarCronometro() {
            // Configura um intervalo para chamar a função atualizarCronometro a cada segundo (1000 ms)
            cronometroInterval = setInterval(atualizarCronometro, 1000);
        }

        // Função para parar o cronômetro
        function pararCronometro() {
            // Para o cronômetro
            clearInterval(cronometroInterval);
        }

        // Função para zerar o cronômetro
        function zerarCronometro() {
            // Para o cronômetro
            pararCronometro();
            // Reseta os valores de horas, minutos e segundos para zero
            segundos = 0;
            minutos = 0;
            horas = 0;
            // Atualiza a exibição do cronômetro para 00:00:00
            const cronometro = document.getElementById("cronometro");
            cronometro.textContent = "00:00:00";
        }