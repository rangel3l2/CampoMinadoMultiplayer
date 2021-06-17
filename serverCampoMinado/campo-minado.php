<?php

if(!isset($_POST['name'])){
    $namePlayer='';
  //  echo $qtd;
}
else{
    $namePlayer=$_POST['name'];
  
}
if(!isset($_POST['scoreEndGame'])){
    $gameScore=0;
  //  echo $disciplina;
}
else{
    $gameScore=$_POST['scoreEndGame'];
  
}
if(!isset($_POST['dateTime'])){
    $dateEndGame='';
  //  echo $disciplina;
}
else{
    $dateEndGame=$_POST['dateTime'];
  
}
echo $namePlayer,'<br>', $gameScore,'<br>',$dateEndGame;
$url = 'localhost';
$usuario='root';
$senha= 'root';
$nomeBD='campoMinado';
echo "<br><br>";
echo gettype($dateEndGame);
echo gettype($namePlayer);

$gameScoreInt = (int)$gameScore;
echo gettype($gameScoreInt);
// estabelecer conexão ccom o banco de dados usando o metodo mysqli orietado a objetos
$objetoMysqli = new mysqli($url, $usuario, $senha, $nomeBD);
 
  //verificar se a conexão foi estabelecida
  if($objetoMysqli->connect_error){//se erro existe bd
    die('<br>falha na conexão'.$objetoMysqli->connect_error);
  }else{//contrário
    echo "conexão realizada com sucesso<br><br>";
  }
  $query = 'INSERT INTO player VALUES(default,?,?,?)';
 
  $stmt = $objetoMysqli->prepare($query);
  $stmt->bind_param('sis',$namePlayer,$gameScoreInt,$dateEndGame);
  $stmt->execute();
  $resutado = $stmt->affected_rows;
  echo 'foram afetada  '.$resutado.'linhas';
  $stmt->close()
 ?>
