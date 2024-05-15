$(document).ready(function(){
    $('#entre').submit(function(e){
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: './PHP/cadastro_dados_paciente.php',
            data: formData,
            success: function(){
                    alert('cliente cadastrado com sucesso !'); 
                    $('#entre')[0].reset();               
            }
        });
    });
});

