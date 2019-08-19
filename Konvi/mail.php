<?php

$recepient = "a.n.krasnik@mail.ru";
$sitename = "Название сайта";

//$name = trim($_GET["name"]);
//$phone = trim($_GET["phone"]);
//$text = trim($_GET["text"]);
$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$text = trim($_POST["text"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nE-mail: $email \nТелефон: $phone \nТекст: $text";
//mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");
?><!-- <<<< "?>" добавлял сам; скорее всего в исходнике из архива ошибка была -->
