<?php
     Auth();
 function Auth(){
    (isset($_POST['token']) ?  $token = $_POST['token'] : $token = '');
  //  (isset($_POST['acao']) ? $acao = $_POST['acao'] : $acao = '');
   
$token2 = "fdptadsphp";
if(strcmp($token2,$token)==0){
 echo '{"mensagem": "Autenticado com sucesso",';
 echo '"resultado":1
        }'     
     ;
return true;
}
else{
    echo '"messagem2": "Não foi possível conectar, server offline"';
    return false;
 } 
 return false;

 }

?>