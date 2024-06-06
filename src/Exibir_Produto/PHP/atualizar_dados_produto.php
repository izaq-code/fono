<?php
include_once("../../assets/php/conexao.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST['id'];

    // Verifica qual campo está sendo atualizado e atribui o valor correspondente
    if(isset($_POST['nome'])) {
        $nome = $_POST['nome'];
    }
    if(isset($_POST['preco'])) {
        $preco = $_POST['preco'];
    }
    if(isset($_POST['categoria'])) {
        $categoria = $_POST['categoria'];
    }
    if(isset($_POST['descricao'])) {
        $descricao = $_POST['descricao'];
    }

    // Verifique se a imagem do produto está sendo enviada
    if (isset($_FILES['foto_produto']) && $_FILES['foto_produto']['error'] === UPLOAD_ERR_OK) {
        $diretorio = "../Imagens_produto/";

        // Verifica se há uma imagem existente para excluir
        $verificar_imagem = "SELECT imagem_do_produto FROM cadastro_produto WHERE cod_produto = '$id'";
        $resultado = mysqli_query($conexao, $verificar_imagem);
        $row = mysqli_fetch_assoc($resultado);
        $imagemExistente = $row['imagem_do_produto'];

        if (!empty($imagemExistente)) {
            $caminhoCompleto = $diretorio . basename($imagemExistente);
            if (file_exists($caminhoCompleto)) {
                unlink($caminhoCompleto);
            }
        }

        // Move o novo arquivo de imagem para o diretório
        $nomeArquivo = $diretorio . basename($_FILES["foto_produto"]["name"]);
        if (move_uploaded_file($_FILES["foto_produto"]["tmp_name"], $nomeArquivo)) {
            // Atualiza o caminho da imagem no banco de dados
            $atualizar_imagem = "UPDATE cadastro_produto SET imagem_do_produto = '$nomeArquivo' WHERE cod_produto = '$id'";
            mysqli_query($conexao, $atualizar_imagem);
        } else {
            echo json_encode(['success' => false, 'message' => 'Houve um erro ao enviar o arquivo.']);
            exit();
        }
    }

    
    if(isset($nome)) {
        $query_nome = "UPDATE cadastro_produto SET nome_produto = '$nome' WHERE cod_produto = '$id'";
        mysqli_query($conexao, $query_nome);
    }
    if(isset($preco)) {
        $query_preco = "UPDATE cadastro_produto SET preco_produto = '$preco' WHERE cod_produto = '$id'";
        mysqli_query($conexao, $query_preco);
    }
    if(isset($categoria)) {
        $query_categoria = "UPDATE cadastro_produto SET categoria_produto = '$categoria' WHERE cod_produto = '$id'";
        mysqli_query($conexao, $query_categoria);
    }
    if(isset($descricao)) {
        $query_descricao = "UPDATE cadastro_produto SET descricao_produto = '$descricao' WHERE cod_produto = '$id'";
        mysqli_query($conexao, $query_descricao);
    }

    echo json_encode(['success' => true, 'message' => 'Atualização realizada com sucesso']);
}

$conexao->close();
?>
