<?php
include_once("../../assets/php/conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $categoria = $_POST['categoria'];
    $descricao = $_POST['descricao'];
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

    $atualizar = "UPDATE cadastro_produto SET
                    nome_produto = '$nome',
                    preco_produto = '$preco',
                    categoria_produto = '$categoria',
                    descricao_produto = '$descricao'
                    WHERE cod_produto = '$id'";

    if ($conexao->query($atualizar) === TRUE) {
        echo json_encode(['success' => true, 'message' => 'Atualização realizada com sucesso']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Erro na atualização: ' . $conexao->error]);
    }
}

$conexao->close();
?>
