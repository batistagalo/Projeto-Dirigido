<?php
session_start();
include("conexao.php");
$email = mysqli_real_escape_string($conexao,$_POST['email']);
$nome = mysqli_real_escape_string($conexao,$_POST['nome']);
$lastname = mysqli_real_escape_string($conexao,$_POST['lastname']);
$password = mysqli_real_escape_string($conexao,$_POST['password']);





?>