<?php


if(isset($_POST(['email']) && !empty($_POST(['email'])) {

$nome = addslashes($_POST(['name'])
$email = addslashes($_POST(['email'])
$assunto = addslashes($_POST(['subject'])
$mensagem = addslashes($_POST(['message'])

$to = "brenasc@hotmail.com";
$subject = "Contato - Portfólio";
$body = "Nome: ".$nome. "\r\n".
        "Email: ".$email. "\r\n".
        "Mensagem: ".$mensagem;
$header = "From: brenasc01@gmail.com"."\r\n".
            "Reply-To:".$email."\r\n".
            "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)) {

    echo("E - mail enviado com sucesso!");

}else{
    echo("O e - mail não pode ser enviado!");
}


}

?>