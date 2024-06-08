<?php
include_once("../../assets/php/conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $categoria = $_POST['categoria'];
    $descricao = $_POST['descricao'];
    $diretorio = "../Imagens_produto/";

    // Verifique se o arquivo de imagem foi enviado
    if (isset($_FILES['foto_produto']) && $_FILES['foto_produto']['error'] === UPLOAD_ERR_OK) {
        // Verifique se há uma imagem existente para excluir
        $verificar_imagem = "SELECT imagem_do_produto FROM cadastro_produto WHERE cod_produto = '$id'";
        $resultado = mysqli_query($conexao, $verificar_imagem);
        $row = mysqli_fetch_assoc($resultado);
        $imagemExistente = $row['imagem_do_produto'];

        if (!empty($imagemExistente)) {
            $caminhoCompleto = $diretorio . basename($imagemExistente);
            if (file_exists($caminhoCompleto)) {
                // Exclua a imagem existente
                unlink($caminhoCompleto);
            }
        

        $nomeArquivo = $diretorio . basename($_FILES["foto_produto"]["name"]);
        if (move_uploaded_file($_FILES["foto_produto"]["tmp_name"], $nomeArquivo)) {
           
            $atualizar_imagem = "UPDATE cadastro_produto SET imagem_do_produto = '$nomeArquivo' WHERE cod_produto = '$id'";
            mysqli_query($conexao, $atualizar_imagem);
        } else {
            echo json_encode(['success' => false, 'message' => 'Houve um erro ao enviar o arquivo.']);
            exit(); 
        }
    }
    
    // Atualize os outros campos do produto
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
}
$conexao->close();
?>