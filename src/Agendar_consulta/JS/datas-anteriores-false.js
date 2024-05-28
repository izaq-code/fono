document.addEventListener('DOMContentLoaded', function() {
    var input = document.getElementById('data');
    
    // Obter a data atual em formato de data ISO (YYYY-MM-DD)
    var dataAtual = new Date().toISOString().split('T')[0];
    
    // Definir a data mínima como a data atual
    input.min = dataAtual;
});