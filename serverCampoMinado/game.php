<?php 

ini_set('default_charset', 'utf-8');
//require_once('auth.php');
require_once('properties.php');
//require_once('createMines.php');
 

    (isset($_POST['game']) ? $gameCode = $_POST['game'] : $gameCode=''); 
    (isset($_POST['nome']) ? $namePlayer = $_POST['nome'] : $namePlayer='');  
  
    (isset($_POST['token']) ?  $token = $_POST['token'] : $token = '');
    (isset($_POST['player']) ? $player = $_POST['player'] : $player='');  
    //(isset($_POST['acao']) ? $acao = $_POST['acao'] : $acao = '');
    
    (isset($_POST['posicao']) ? $posicao = $_POST['posicao'] :  $posicao= 0 );
    define('WIDTH', 40);  
    trim($namePlayer);
    $game = (string)$gameCode; 
    trim($game);
    $position= (int)$posicao;
    
 
    $objetoMysqli =geraMysqli(); 
    if($objetoMysqli->connect_error){//se erro existe bd
       die('{<br>falha na conexão}'.$objetoMysqli->connect_error);
    }else{//contrário
      echo '{"status":"conexão realizada com sucesso",';
    }
        //verificar se a conexão foi estabelecida
        $querycheck='SELECT 1 FROM '.$game.'';
        $query_result=$objetoMysqli->query($querycheck);
    if ($query_result !== FALSE)
    {
     echo ' "mensagem1":"Essa sala já existe  mude o nome da sala"}';
    } else

    {
       
        $query = "CREATE TABLE $game (
        id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nameGame VARCHAR (40) NOT NULL,
        nameplayer VARCHAR(40) NOT NULL,  
        posicao int NOT NULL,        
        mines TEXT(1200) NOT NULL,
        player VARCHAR(40) NOT NULL)";
        
        if ($objetoMysqli->query($query) === TRUE) {
            echo ' "Tabela":"'.$game.' criado com sucesso, aproveite nosso jogo"}';
          } else {
            echo ' "mensagem2":"Erro a criar tabela" }' . $objetoMysqli->error;
          }
               
          
        
        $objetoMysqli->close();

    }   
 
    
  
?>