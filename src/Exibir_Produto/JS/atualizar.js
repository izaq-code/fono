$(document).on('click', '.atualizar', function () {
    var id = $(this).data('id');
    localStorage.setItem('idProduto', id);
    window.location.href = '../../Cadastro_Produto/atualizar.html';
});

$(document).ready(function () {
    var idProduto = localStorage.getItem('idProduto');
    if (idProduto) {
        $('#id').val(idProduto);
    }

    $('#Cadastro').submit(function (event) {
        event.preventDefault();

        var formData = new FormData(this);
        var inputName = 'foto_produto';

        var inputFile = document.getElementById('foto_produto');

        if (!inputFile || inputFile.files.length === 0) {
            console.error("O campo de imagem não foi encontrado ou está vazio.");
        } else {
            formData.append(inputName, inputFile.files[0]);
        }

        $.ajax({
            url: '../Exibir_Produto/PHP/atualizar_dados_produto.php', 
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
            
                    Swal.fire({
                        icon: 'success',
                        title: 'Produto atualizado com sucesso!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    $('#Cadastro')[0].reset();
            
         
            },
            error: function (xhr, status, error) {
                console.error("Erro ao atualizar produto: " + error);
                Swal.fire({
                    icon: 'error',
                    title: 'Erro ao atualizar produto',
                    text: 'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.'
                });
            }
        });
    });
});
