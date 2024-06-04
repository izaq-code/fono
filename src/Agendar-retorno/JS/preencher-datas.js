$(document).on('change', '#hora', function () {
    var selecionado = this.value;
    var fono = $(this).find('option:selected').data('id');

    $.ajax({
        type: 'POST',
        url: './PHP/preencher-datas.php',
        data: {
            selecionado: selecionado,
            fono: fono
        },
        dataType: 'json',
        success: function (ddd) {
            exx(ddd);
        },
        error: function (xhr, status, error) {
            var errorMessage = xhr.status + ': ' + xhr.statusText;
            console.error('Error:', errorMessage); // Exibe o erro no console
        }
    })
})

function exx(ddd) {
    // Verifique se os dados não são falsos e se é um array ou objeto
    if (ddd !== false && typeof ddd === 'object') {
        // Se for um array, itere sobre cada elemento
        var datasIndisponiveis = [];
    var input = document.getElementById('data');
        if (Array.isArray(ddd)) {
            ddd.forEach(function (element) {
                // Acesse os dados de cada elemento
                console.log(element.data + 'bele, faca aqui'); // Por exemplo, se 'data' é o campo que você deseja acessar
                var input = document.getElementById('data');
                 datasIndisponiveis.push(element.data);
                console.log(datasIndisponiveis);

            });
            // Adicionar um ouvinte de evento para controlar a seleção da data
            input.addEventListener('input', function () {
                var dataSelecionada = new Date(this.value);
                // Verificar se a data selecionada está na lista de datas indisponíveis
                if (datasIndisponiveis.includes(this.value)) {
                    //SEU ALERT ESTÁ AQUI IZAQ
                    alert('data já selecionada');
                    this.value = ''; // Limpar o valor selecionado
                }
            });
        } else {
            // Se for um objeto, acesse diretamente os dados
            console.log(ddd); // Por exemplo, se 'data' é o campo que você deseja acessar
        }
    } else {
        // Caso contrário, exiba uma mensagem de erro
        console.log(ddd);
    }
}


