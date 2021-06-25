<?php
require_once('properties.php');
(isset($_POST['player']) ? $player = $_POST['player'] : $player='');

(isset($_POST['game']) ? $nameGame = $_POST['game'] : $nameGame ='');  


 $objetoMysqli = geraMysqli();
 if($objetoMysqli->connect_error){//se erro existe bd
    die('{"rede" : "falha na conexão"}'.$objetoMysqli->connect_error);
  }else{//contrário
    echo '{"rede" : "conexão realizada do jogador 1 ","dados":"';
  }
 $converted_player = ( $player ? "true" : "false" );
 $query = "SELECT mines FROM $nameGame WHERE player = ?  ORDER by id DESC limit 1";
 $stmt = $objetoMysqli->prepare($query);
 $stmt->bind_param('s', $converted_player);
 $stmt->execute();
 $resultado = $stmt->get_result();


 while($objectJogador = $resultado->fetch_assoc()){

  $newObject= implode(",", $objectJogador);

  echo  ($newObject);


 }
 echo '"}'; 
 $stmt->close();


?>