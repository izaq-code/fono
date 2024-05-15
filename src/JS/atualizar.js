$(document).ready(function(){
    $('#entre').submit(function(e){
        e.preventDefault();

        var formData = $(this).serialize();

        $.ajax({
            type: 'POST',
            url: './PHP/atualizar.php',
            data: formData,
            success: function(){
                    alert('cliente atualizado com sucesso !'); 
                    location.reload();               
            }
        });
    });
});

