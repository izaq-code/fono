window.addEventListener("DOMContentLoaded", function () {
    const inputFile = document.getElementById('foto_produto');
    const fotoImage = document.getElementById('foto_placeholder');

    inputFile.addEventListener("change", function (e) {
        const inputTarget = e.target;
        const file = inputTarget.files[0];

        if (file) {
            if (!file.type.startsWith('image/')) {
                Swal.fire({
                    icon: "error",
                    title: "ops..",
                    text: "O arquivo selecionado nao e uma imagem",
                    footer: '<p>Apenas aquivos Jpeg, jpg, png ou svg</p>',
                    customClass: {
                        confirmButton: 'swal-button'
                    }
                });
                inputFile.value = '';
                return;
            }

            const fileSizeLimit = 5 * 1024 * 1024;
            if (file.size > fileSizeLimit) {
                Swal.fire({
                    icon: "error",
                    title: "Espaço excedido...",
                    text: "Apenas imagens abaixo de 5 MB",
                    footer: '<p>Imagem com valor igual ou superior a 5 mb</p>',
                    customClass: {
                        confirmButton: 'swal-button'
                    }
                });
                inputFile.value = '';
                return;
            }

            const reader = new FileReader();

            reader.addEventListener("load", function (e) {
                const readerTarget = e.target;

                const img = document.createElement("img");
                img.src = readerTarget.result;
                img.classList.add("foto__img");

                fotoImage.innerHTML = "";
                fotoImage.appendChild(img);

                inputFile.disabled = true;
            });

            reader.readAsDataURL(file);
        } else {
            // Se não houver arquivo selecionado, limpe a imagem
            fotoImage.innerHTML = '<i class="bi bi-plus"></i>';
            inputFile.value = "";
            inputFile.disabled = false;
        }
    });
});