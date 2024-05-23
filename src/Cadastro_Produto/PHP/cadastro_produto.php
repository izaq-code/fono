<?php
 include_once ("../../assets/conexao.php");

 if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $preco = $_POST['preco'];
    $categoria = $_POST['categoria'];
    $descricao = $_POST['descricao'];

//    $inputName = 'foto_produto'; 
// $nomeArquivo = $diretorio . basename($_FILES[$inputName]['name']);

// if (!empty($_FILES[$inputName]['foto_produto'])) { 
//     if (move_uploaded_file($_FILES[$inputName]['tmp_name'], $nomeArquivo)) {
//         $nomeArquivos[] = $nomeArquivo;
//         $caminhosArquivos[] = mysqli_real_escape_string($conexao, $nomeArquivo);
// }}

    $sql = "INSERT INTO cadastro_produto (nome_produto, preco_produto, categoria_produto, 
                descricao_produto) VALUES ('$nome', '$preco', '$categoria', '$descricao')";
    
 if ($conexao->query($sql) === TRUE) {
    echo "Produto cadastrado com sucesso !!";
 } else {
    echo "Produto cadastrado não cadastrado !!";
 }
}

?>