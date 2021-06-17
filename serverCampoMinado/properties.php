<?php


function geraMysqli(){
    $url = 'localhost';
    $usuario='root';
    $senha= 'root';
    $nomeBD='campoMinado';
    // estabelecer conexão ccom o banco de dados usando o metodo mysqli orietado a objetos
    $objetoMysqli = new mysqli($url, $usuario, $senha, $nomeBD);
    return  $objetoMysqli ;
}

?>