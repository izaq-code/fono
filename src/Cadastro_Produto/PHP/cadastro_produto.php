<?php
    include_once("../../assets/php/conexao.php");

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $quantidade = $_POST['quantidade'];
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $categoria = $_POST['categoria'];
    $descricao = $_POST['descricao'];
    $diretorio = "../../Exibir_Produto/Imagens_produto/";

    $nomeArquivo = $diretorio . basename($_FILES["foto_produto"]["name"]);

    if (move_uploaded_file($_FILES["foto_produto"]["tmp_name"], $nomeArquivo)) {
        echo "O arquivo foi enviado com sucesso.";
    } else {
        echo "Houve um erro ao enviar o arquivo.";
    }
} else {
    echo "A requisição não foi feita corretamente.";
}

    $sql = "INSERT INTO cadastro_produto (imagem_do_produto, quantidade_produto, nome_produto, preco_produto, categoria_produto, 
                descricao_produto) VALUES ('$nomeArquivo', '$quantidade', '$nome', '$preco', '$categoria', '$descricao')";
    
 if ($conexao->query($sql) === TRUE) {
    echo "Produto cadastrado com sucesso !!";
 } else {
    echo "Produto cadastrado não cadastrado !!";
 }
 $conexao->close();
?>