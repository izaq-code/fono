document.addEventListener("DOMContentLoaded", tabe);
// window.addEventListener("load", tabela);
function tabe(){
    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: './PHP/tabela-fono.php',
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function(dat){
                dat == false ? alert('nenhum fono encontrado') : exi(dat);
            }

        });
    });
}

function exi(dat){
    
    y = $('#fono');
    
    dat.forEach(function(e){
        var tabl = "<option value='" + e['cod'] + "'>" + e['nome'] + "</option>";
        y.append(tabl); 
    })
}