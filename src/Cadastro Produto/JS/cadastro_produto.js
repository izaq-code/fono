$(document).ready(function(){
    $('#Cadastro_Produto').submit(function(e){
        e.preventDefault();

        var nome = $('#nome').prop('value');
        var preco = $('#preco').prop('value');
        var categoria = $('#categoria').prop('value');
        var descricao = $('#descricao').prop('value');

        var data = {
            nome: nome,
            preco: preco,
            categoria: categoria,
            descricao: descricao,
        }
    
        $.ajax({
            type: 'POST',
            url: '"../PHP/cadastro_produto.php"',
            data: data,
            success:function(response){
                console.log(response);

            }
        })
    
    })
})