document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("cadastrar_paciente").addEventListener("submit", function(event) {
        event.preventDefault();
        
        var formData = new FormData(this);

        fetch("../src/Paciente/PHP/cadastro_paciente.php", {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(result => {
            document.getElementById("mensagem").innerHTML = result;
            // Limpar o formulário após o cadastro bem-sucedido
            if (result.trim() === "success") {
                document.getElementById("cadastrar_paciente").reset();
            }
        })
        .catch(error => {
            console.error("Erro:", error);
        });
    });
});
