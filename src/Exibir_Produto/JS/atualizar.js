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

        $.ajax({
            url: '../PHP/atualizar_dados_produto.php', 
            type: 'POST',
            data: formData,
            contentType: false,
            processData: false,
            success: function (response) {
                if (response.success) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Produto atualizado com sucesso!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    $('#Cadastro')[0].reset();
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Erro ao atualizar produto',
                        text: response.message
                    });
                }
            },
            error: function (xhr, status, error) {
                console.error("Erro ao atualizar produto: " + error);
                Swal.fire({
                    icon:'error',
                    title:'Erro ao atualizar produto',
                    text:'Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde.'
                });
            }
        });
    });
});
