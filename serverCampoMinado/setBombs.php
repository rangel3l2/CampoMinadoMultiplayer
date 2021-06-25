<?php 

require_once('properties.php');
require_once('createMines.php');
//require_once('createMines.php');


 
    (isset($_POST['game']) ? $nameGame = $_POST['game'] : $nameGame='');   
    (isset($_POST['namePlayer']) ? $namePlayer = $_POST['namePlayer'] : $namePlayer='');  
    (isset($_POST['posicao']) ? $position = $_POST['posicao'] : $position=0);
    //mines
    (isset($_POST['player']) ? $player = $_POST['player'] : $player='');  
    $ArrayFull = createMines();
    $ArrayFullStr =  implode(",", $ArrayFull);
 // echo $nameGame,$namePlayer,$position, $ArrayFullStr,$player;

    
    //(isset($_POST['acao']) ? $acao = $_POST['acao'] : $acao = '');    

    define('WIDTH', 40);  
    trim($nameGame);   
    $objetoMysqli =geraMysqli(); 
   if($objetoMysqli->connect_error){//se erro existe bd
      die('{"rede":"falha na conexão"'.$objetoMysqli->connect_error);
    }else{//contrário
      echo '{"rede":"conexão realizada com sucesso,"';
    }
    //verificar se a conexão foi estabelecida  
    $query = "INSERT INTO $nameGame VALUES(default,?,?,?,?,?)";
    $stmt = $objetoMysqli->prepare($query);
    $stmt->bind_param('ssiss', $nameGame, $namePlayer, $position, $ArrayFullStr, $player);
    $stmt->execute();
    $resutado = $stmt->affected_rows; 
    echo '"resultado":"foram  afetadaS  '.$resutado.'linha"}';
    
    $stmt->close();
 
    
  
