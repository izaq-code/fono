document.addEventListener("DOMContentLoaded", produto);
// window.addEventListener("load", produtola);
function produto(){
    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: './PHP/tabela-produto.php',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function(dat){
                dat == false ? alert('nenhum fono encontrado') : exiproduto(dat);
            }

        });
    });
}

function exiproduto(dat){
    
    y = $('#prod');
    
    dat.forEach(function(e){
        var tabl = "<option value='" + e['cod'] + "'>" + e['nome'] + "</option>";
        y.append(tabl); 
    })
}