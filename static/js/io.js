
    function Auth(){
   
      $.post('./serverCampoMinado/auth.php',
      {
        token:'fdptadsphp',
        acao: 'autenticar jogador',       
        game : 104,  
  
      },
      function(data,status){
        console.log(data);
        console.log(status);
        let splitedData= data.split("*")
        console.log(splitedData[1])
        var obj = JSON.parse(splitedData[1])
        menuStart()
        startGame(obj)
        selectMatch()
       
      });
    
    
    }
    function manageAuth(auth){
      let splitedData= auth.split("*")
     console.log(splitedData[1])
       obj = JSON.parse(splitedData[1])
     
     
    }
    
    function sendData(){
    
    
     // console.log(current,'current');
    //  console.log(takeName,'nameplayer');
  
      $.post('./serverCampoMinado/setDataplayer.php',
      {
        token:'fdptadsphp',
        acao: 'autenticar jogador',
        posicao: current,
        nome: takeName,
        
  
      },
      function(data,status){
        console.log(data);
        console.log(status);
     
      
      });
       
    
    }
    function getData(){   
    
 
  
      $.get('./serverCampoMinado/getDataPlayer.php',
      {
       
      },
      function(data,status){
        console.log(data);
        console.log(status);
       console.log("\n",typeof(data));
       manipularArray(data)
       
      });
       
  
    }
 function manipularArray(data){
   let splitedData= data.split("*")
    console.log("\ndata mudada\n",splitedData[1])
    console.log("\ndata mudada\n",splitedData[3])
    
    if(splitedData[1]!=undefined){

    
     var objData = JSON.parse(splitedData[1])
    }
    else{
      objData ={}
    }
  

    if(splitedData[3]=!undefined) {
    const objData2 = JSON.parse(splitedData[3])  
    console.log("\n",objData2)
    }

    console.log("\n",objData)
    objCheckMove = objData;
  
  
    checkMove(objData)
   
 }
    //console.log(current,'current');
   // console.log(takeName,'nameplayer');
 
   function submitForm(){

    let namePlayer =  document.getElementById('namePlayer')
    let scoreEndGame = document.getElementById('scoreEndGame')
    let dateTime = document.getElementById('dateTime')
    //sendind data to variables
    namePlayer.value=takeName 
    var data = new Date() 
    scoreEndGame.value=contador
    dateTime.value=data
    //console.log('contador',scoreEndGame.value)
    //console.log('dataJOgo',dateTime.value);
    //console.log('nomeplayer',namePlayer.value); 
  
    $.post('./serverCampoMinado/campo-minado.php',
    {
        name:namePlayer.value,
        scoreEndGame: scoreEndGame.value,
        dateTime: dateTime.value,
      },
      function(data,status){
        console.log(data);
        console.log(status);
       manipularArray(data);
      });
       
  
    }
 