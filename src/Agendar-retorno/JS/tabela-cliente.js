document.addEventListener("DOMContentLoaded", cliente);
// window.addEventListener("load", cliente);
function cliente(){
    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: './PHP/tabela-cliente.php',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function(data){
                data == false ? alert('nenhum usuario encontrado') : criente(data);
            }

        });
    });
}

function criente(data){
    
    t = $('#nome');
    
    data.forEach(function(e){
        var table = "<option value='" + e['cod'] + "'>" + e['nome'] + "</option>";
        t.append(table); 
    })
}