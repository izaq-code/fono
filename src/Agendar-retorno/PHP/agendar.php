<?php
 
require '../../assets/php/conexao_pdo.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $consulta = $_POST['consulta'];
    $detalhes = $_POST['detalhes'];
    $fono = $_POST['fono'];
    $hora = $_POST['hora'];
    $data = $_POST['data'];
    $nome = $_POST['nome'];

    // Inserção na tabela de datas selecionadas
    $sql = $pdo->prepare("INSERT INTO datas (data, fono_id) VALUES (:data, :fono)");
    $sql->execute([
        'data' => $data,
        'fono' => $fono
    ]);

    // Resgate do ID da data para inserção na bandeirinha
    $sql2 = $pdo->prepare("SELECT id FROM datas WHERE data = :data");
    $sql2->execute([
        'data' => $data
    ]);
    $resultado = $sql2->fetch(PDO::FETCH_ASSOC);

    // Inserção na bandeirinha
    $sql3 = $pdo->prepare("INSERT INTO conexao_h_d (id_h, id_d) VALUES (:hora, :data)");
    $sql3->execute([
        'hora' => $hora,
        'data' => $resultado['id']
    ]);

    // Selecionando o ID da bandeirinha
    $sql4 = $pdo->prepare("SELECT id FROM conexao_h_d WHERE id_h = :hora AND id_d = :data");
    $sql4->execute([
        'hora' => $hora,
        'data' => $resultado['id']
    ]);
    $res = $sql4->fetch(PDO::FETCH_ASSOC);


    // Inserção na tabela de consulta
    $sql5 = $pdo->prepare("INSERT INTO retorno (detalhes, id_paciente, id_consulta, id_fono, id_data_con) VALUES (:detalhes, :id_p, :id_c, :id_f, :id_d_c)");
    $sql5->execute([
        'detalhes' => $detalhes,
        'id_p' => $nome,
        'id_c' => $consulta,
        'id_f' => $fono,
        'id_d_c' => $res['id']
    ]);

    if($sql5 -> rowCount() > 0) {
        echo true;
    } else {
        echo false;
    }
}
?>
