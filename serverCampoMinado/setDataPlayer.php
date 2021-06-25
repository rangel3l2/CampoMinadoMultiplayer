<?php 
require_once('auth.php');
require_once('properties.php');
//require_once('createMines.php');
 $auth =  Auth();
if( $auth){
 
    (isset($_POST['nome']) ? $namePlayer = $_POST['nome'] : $namePlayer='');  
  
    (isset($_POST['token']) ?  $token = $_POST['token'] : $token = '');
    
    //(isset($_POST['acao']) ? $acao = $_POST['acao'] : $acao = '');
    
    (isset($_POST['posicao']) ? $posicao = $_POST['posicao'] :  $posicao= 0 );
  define('WIDTH', 40);  
  trim($namePlayer);
  $position= (int)$posicao;
   $objetoMysqli =geraMysqli(); 
   if($objetoMysqli->connect_error){//se erro existe bd
      die('<br>falha na conexão'.$objetoMysqli->connect_error);
    }else{//contrário
      echo "conexão realizada com sucesso";
    }
    //verificar se a conexão foi estabelecida
  
    $query = 'INSERT INTO posicaojogador VALUES(default,?,?,?)';
    $stmt = $objetoMysqli->prepare($query);
    $stmt->bind_param('ssi', $token, $namePlayer, $position);
    $stmt->execute();
    $resutado = $stmt->affected_rows; 
    echo 'foram  afetadaS  '.$resutado.'linha';
    
    $stmt->close();
  
}
else{
  echo 'Não foi possível conectar, server offline';
}




 



   
 
?>





