$('#fono').on('change', function () {

    var selecionado = this.value;

    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: './PHP/preencher-fono.php',
            data: {
                selecionado: selecionado
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function(dada){
                
                dada == false ? alert('nenhum horário encontrado') : ex(dada);
            }

        });
    });
});

function ex(dada){
    console.log('me chamaram')
    
    u = $('#hora');
    
    for (let key in dada) {
        if (dada.hasOwnProperty(key)) {
            var tab = "<option value='" + dada[key]['cod'] + "'>" + dada[key]['hora'] + "</option>";
            u.append(tab);
        }
    }    
};