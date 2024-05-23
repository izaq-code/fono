$(document).ready(function(){
    $('#Cadastro').submit(function(e){
        e.preventDefault();

        var nome = $('#nome').val();
        var preco = $('#preco').val();
        var categoria = $('#categoria').val();
        var descricao = $('#descricao').val();

        var data = {
            nome: nome,
            preco: preco,
            categoria: categoria,
            descricao: descricao,
        };
    
        $.ajax({
            type: 'POST',
            url: './PHP/cadastro_produto.php',
            data: data,
            success: function(response){
                console.log(response);
            },
            error: function(xhr, status, error){
                console.error(xhr.responseText);
            }
        });
    });
});
