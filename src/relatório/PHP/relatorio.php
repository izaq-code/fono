<?php

include ('../../assets/php/conexao.php');

$diretorio = "../../Exibir_Produto/Imagens_produto/";

// SELECT para pegar o nome do vendedor, do produto, o id da venda e o status
$sql = "SELECT v.id, cp.nome_produto, f.nome AS nome_vendedor, re.status
        FROM vendas v
        INNER JOIN retorno r ON v.id_retorno = r.id
        INNER JOIN cadastro_produto cp ON r.id_produto = cp.cod_produto
        INNER JOIN fonoaudiologo f ON r.id_fono = f.id
        LEFT JOIN relatorio re ON v.id = re.id_venda";

// Array para armazenar as condições do filtro
$condicoes = array();

// Verifica se tem o id e não está vazio 
if (isset($_POST['vendedor_id']) && $_POST['vendedor_id'] != '') {
    $vendedorId = $_POST['vendedor_id'];
    $condicoes[] = "r.id_fono = $vendedorId";
}

// Verifica se tem as duas datas
if (isset($_POST['data_inicio']) && isset($_POST['data_fim'])) {
    $dataInicio = $_POST['data_inicio'];
    $dataFim = $_POST['data_fim'];
    $condicoes[] = "r.data BETWEEN '$dataInicio' AND '$dataFim'";
}

// Adiciona as condições do filtro à consulta SQL, se houver
if (count($condicoes) > 0) {
    $sql .= ' WHERE ' . implode(' AND ', $condicoes);
}

$resultado = $conexao->query($sql);
$vendas = array();

if ($resultado->num_rows > 0) {
    while ($row = $resultado->fetch_assoc()) {
        $status = $row['status'] ?? 'Em análise'; // Define o status como 'Em análise' se for null
        $venda = array(
            'id' => $row['id'],
            'nome_produto' => $row['nome_produto'],
            'nome_vendedor' => $row['nome_vendedor'],
            'status' => $status
        );

        // Impede de quando dar reload na página, duplicar a inserção na tabela relatorio
        $sqlVerificar = "SELECT COUNT(*) AS total FROM relatorio WHERE id_venda = '{$row['id']}'";
        $resultadoVerificar = $conexao->query($sqlVerificar);
        $rowVerificar = $resultadoVerificar->fetch_assoc();

        if ($rowVerificar['total'] == 0) { 
            // Insere o id da venda na tabela relatorio junto com o status
            $relatorio = "INSERT INTO relatorio (id_venda, status) VALUES ('{$row['id']}', '$status')";
            if ($conexao->query($relatorio) === TRUE) {

            } else {
                echo "Erro ao inserir na tabela relatorio: " . $conexao->error;
            }
        }

        array_push($vendas, $venda);
    }
    echo json_encode($vendas);
} else {
    echo json_encode(array("message" => "Nenhuma venda encontrada."));
}

$conexao->close();
?>
