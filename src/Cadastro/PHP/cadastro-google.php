<?php
session_start();
require 'conexao.php'; // Arquivo com a conexão ao banco de dados

$client_id = '686746649529-s1bjq6d0rjpl129etdr05ugps0n8a07b.apps.googleusercontent.com';
$client_secret = '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';
$redirect_uri = 'http://localhost/fono/src/Cadastro/PHP/cadastro-google.php';

if (isset($_GET['code'])) {
    $code = $_GET['code'];

    $token_url = 'https://accounts.google.com/o/oauth2/token';
    $params = array(
        'code' => $code,
        'client_id' => $client_id,
        'client_secret' => $client_secret,
        'redirect_uri' => $redirect_uri,
        'grant_type' => 'authorization_code'
    );

    $curl = curl_init($token_url);
    curl_setopt($curl, CURLOPT_POST, true);
    curl_setopt($curl, CURLOPT_POSTFIELDS, $params);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($curl);
    curl_close($curl);
    $token = json_decode($response, true);

    $userinfo_url = 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' . $token['access_token'];
    $userinfo = json_decode(file_get_contents($userinfo_url), true);

    // Verificar se o usuário já existe no banco de dados
    $email = $userinfo['email'];
    $query = $pdo->prepare("SELECT * FROM usuario WHERE email = :email");
    $query->execute(['email' => $email]);
    $user = $query->fetch();

    if (!$user) {
        // Inserir novo usuário no banco de dados
        $insert = $pdo->prepare("INSERT INTO usuario (google_id, email, name, profile_picture) VALUES (:google_id, :email, :name, :profile_picture)");
        $insert->execute([
            'google_id' => $userinfo['id'],
            'email' => $userinfo['email'],
            'name' => $userinfo['name'],
            'profile_picture' => $userinfo['picture']
        ]);

        $_SESSION['user'] = $userinfo;

        header('Location: http://localhost/fono/src/Paciente/listar_pacientes.html');

    }
    if ($user) {
       
        header('Location: http://localhost/fono/src/Paciente/listar_pacientes.html');
    }
} else {
    header('Location: http://localhost/fono/src/Cadastro/PHP/error.php');
}
?>