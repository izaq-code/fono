document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("atualizarForm").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var formData = new FormData(this);

        fetch("../src/Paciente/PHP/atualizar.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            // Exiba uma mensagem com o resultado da operação
            document.getElementById("response").innerHTML = result;
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    });
});
