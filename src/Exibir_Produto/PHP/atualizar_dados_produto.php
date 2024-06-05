<?php
include_once("../../assets/php/conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $quantidade = $_POST['quantidade'];
    $imagem = $_POST['imagem'];
    $diretorio = "../Imagens_produto/";

  
    $atualizar_imagem = "SELECT imagem_do_produto FROM cadastro_produto WHERE cod_produto = '$id'";
    $resultado = mysqli_query($conexao, $atualizar_imagem);

    while ($row = mysqli_fetch_assoc($resultado)) {
        $imagemExistente = $row['imagem_do_produto'];
        if (!empty($imagemExistente)) {
            $caminhoCompleto = $diretorio . basename($imagemExistente);
            if (file_exists($caminhoCompleto)) {
                unlink($caminhoCompleto); 
            }
        }
    }

    // Atualizar os dados do produto
    $atualizar = "UPDATE cadastro_produto SET 
                    nome = '$nome',
                    preco = '$preco',
                    quantidade = '$quantidade',
                    imagem_do_produto = '$imagem'
                    WHERE cod_produto = '$cod'";

    if ($conexao->query($atualizar) === TRUE) {
        echo "Atualização realizada com sucesso";
    } else {
        echo "Erro na atualização: " . $conexao->error;
    }
}

$conexao->close();
?>
