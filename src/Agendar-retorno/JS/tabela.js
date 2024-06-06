$('#nome').on('change', function () {

    var selecionado = this.value;

    $(document).ready(function(){
        $.ajax({
            type: 'POST',
            url: './PHP/tabela.php',
            data: {
                selecionado: selecionado
            },
            contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
            dataType: 'json',
            success: function(data){
                data == false ? alert('nenhuma consulta cadastrada') : exibir(data);
            }

        });
    });
});

function exibir(data){
    
    t = $('#consulta');
    
    data.forEach(function(e){
        var table = "<option value='" + e['id'] + "'>" + e['detalhes'] + "</option>";
        t.append(table); 
    })
}