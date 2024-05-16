<?php
session_start();

// Configurações do Google
$client_id = '686746649529-s1bjq6d0rjpl129etdr05ugps0n8a07b.apps.googleusercontent.com';
$client_secret = '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';
$redirect_uri = 'http://localhost/fono/src/Cadastro/PHP/cadastro-google.php'; // URL de redirecionamento autorizado

// URL de autorização do Google
$auth_url = 'https://accounts.google.com/o/oauth2/auth';
$params = array(
    'redirect_uri' => $redirect_uri,
    'response_type' => 'code',
    'client_id' => $client_id,
    'scope' => 'email'
);

// Redireciona para a página de login do Google
header('Location: ' . $auth_url . '?' . http_build_query($params));
exit;
?>
