<?php
require_once('properties.php');

getData();
function getData(){
 $objetoMysqli = geraMysqli();
 $token='fdptadsphp';
 if($objetoMysqli->connect_error){//se erro existe bd
    die('<br>falha na conexão'.$objetoMysqli->connect_error);
  }else{//contrário
    echo "conexão realizada, sucesso dados pego: \n";
  }
  
 $query = "SELECT * FROM posicaojogador WHERE token = ? ORDER by id DESC limit 3";

 $stmt = $objetoMysqli->prepare($query);
 $stmt->bind_param('s', $token);
 $stmt->execute();
 $resultado = $stmt->get_result();

$cont = 0;
 while($objectJogador = $resultado->fetch_assoc()){
   $cont =$cont + 1;
  
  $jsonData = $objectJogador;
 if($objectJogador['id'] % 2 == 1):

 
 echo 'jogador 1 conectado',"\n";
 
 endif;
 if($objectJogador['id'] % 2 == 0):
 
  echo "\n",'jogador 2 conectado',"\n" ;  
 endif;
 echo "\n";
 if($cont==1):
  // print_r($objectJogador);
 endif;
 if($cont==2):
 //
endif;
  echo '*',"\n", json_encode($jsonData),'*';

 }
  echo "\ncont".$cont."\n";
 
 $stmt->close();


}

 
 













?>
