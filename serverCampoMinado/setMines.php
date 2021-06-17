<?php
//require_once('createMines.php');
//require_once('properties.php');
//
$mines = createMines();
$objetoMysqli =geraMysqli(); 

if($objetoMysqli->connect_error){//se erro existe bd
    die('<br>falha na conexão'.$objetoMysqli->connect_error);
  }else{//contrário
    echo "conexão realizada com sucesso";
  }
  //verificar se a conexão foi estabelecida
  
    $query = "INSERT INTO minas (`categoria`, .........) VALUES ('".$idCategoria."', .........)";

  //$query = 'INSERT INTO posicaojogador VALUES(default,?,?,?)';
  $stmt = $objetoMysqli->prepare($query);
  $stmt->bind_param('ssi', $token, $namePlayer, $position);
  $stmt->execute();
  $resutado = $stmt->affected_rows; 
  echo 'foram  afetadaS  '.$resutado.'linha';
  
  $stmt->close();








?>