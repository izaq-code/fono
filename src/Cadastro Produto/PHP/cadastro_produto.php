<?php
 include_once "../../assets/conexao.php";

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $imagem = $_POST['foto_produto'];
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $categoria = $_POST['categoria'];
    $descricao = $_POST['descricao'];
    $diretorio = '../../Imagens_produtos';

/*    $inputName = 'foto_produto'; 
$nomeArquivo = $diretorio . basename($_FILES[$inputName]['name']);

if (!empty($_FILES[$inputName]['name'])) { 
    if (move_uploaded_file($_FILES[$inputName]['tmp_name'], $nomeArquivo)) {
        $nomeArquivos[] = $nomeArquivo;
        $caminhosArquivos[] = mysqli_real_escape_string($conexao, $nomeArquivo);
}}*/

    $sql = "INSERT INTO cadastro_produto (imagem_do_produto,  nome_produto, preco_produto, categoria_produto, 
                descricao_produto) VALUES ('?', '$nome', '$preco', '$categoria', '$descricao')";
    
 if ($conexao->query($sql) === TRUE) {
    echo "Produto cadastrado com sucesso !!";
 } else {
    echo "Produto cadastrado não cadastrado !!";
 }
}

?>