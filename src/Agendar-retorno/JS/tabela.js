document.addEventListener("DOMContentLoaded", tabela);
// window.addEventListener("load", tabela);

    var id = localStorage.getItem('id'); 

function tabela(){
    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: './PHP/tabela.php',
            data: {
                id: id
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function(data){
                data == false ? alert('nenhuma consulta cadastrada') : exibir(data);
            }

        });
    });
}

function exibir(data){
    
    t = $('#consulta');
    
    data.forEach(function(e){
        var table = "<option value='" + e['id'] + "'>" + e['detalhes'] + "</option>";
        t.append(table); 
    })
}