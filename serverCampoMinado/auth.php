<?php
     Auth();
 function Auth(){
    (isset($_POST['token']) ?  $token = $_POST['token'] : $token = '');
  //  (isset($_POST['acao']) ? $acao = $_POST['acao'] : $acao = '');
   
$token2 = "fdptadsphp";
if(strcmp($token2,$token)==0){
 echo 'Autenticado com sucesso'."\n";
 echo '*{"resultado":0
        }'     
     ;

}
else{
    echo 'Não foi possível conectar, server offline';
 } 


 }

?>