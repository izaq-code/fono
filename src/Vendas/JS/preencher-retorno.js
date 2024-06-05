$('#nome').on('change', function () {

    var selecionado = this.value;

    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: './PHP/preencher-retorno.php',
            data: {
                selecionado: selecionado
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function(dada){
                
                dada == false ? alert('nenhum retorno encontrado') : ex(dada);
            }

        });
    });
});

function ex(dada){
    // console.log('me chamaram')
    
    u = $('#retorno');
    u.empty();
    u.append('<option value="" disabled selected>Escolha um retorno</option>');
    
    for (let key in dada) {
        if (dada.hasOwnProperty(key)) {
            var tab = "<option value='" + dada[key]['id'] + "' data-id='"+ dada[key]['id'] +"'>" + dada[key]['detalhes'] + "</option>";
            u.append(tab);
        }
    }    
};