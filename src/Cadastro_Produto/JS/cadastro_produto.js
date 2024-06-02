$(document).ready(function(){
    $('#Cadastro').submit(function(e){
        e.preventDefault();

        var formData = new FormData();
        var inputName = 'foto_produto';

        var inputFile = document.getElementById('foto_produto');

        if (!inputFile || inputFile.files.length === 0) {
            console.error("O campo de imagem não foi encontrado ou está vazio.");
        } else {
            formData.append(inputName, inputFile.files[0]);
        }

        var quantidade = $('#quantidade').val();
        var nome = $('#nome').val();
        var preco = $('#preco').val().replace(',' , '.');
        var categoria = $('#categoria').val();
        var descricao = $('#descricao').val();

        formData.append('quantidade', quantidade);
        formData.append('nome', nome);
        formData.append('preco', preco);
        formData.append('categoria', categoria);
        formData.append('descricao', descricao);
    
        $.ajax({
            type: 'POST',
            url: './PHP/cadastro_produto.php',
            data: formData,
            contentType: false,
            processData: false,
            success: function(response){
                console.log(response);
             
                if (response.trim() == 'sucesso') {
                    alert("Produto cadastrado com sucesso!");
                }
            },
            error: function(xhr, status, error){
                console.error(xhr.responseText);
            }
        });
    });
});
