
    function Auth(){
      $.post('./serverCampoMinado/auth.php',
      {
        token:'fdptadsphp',
        acao: 'autenticar jogador',       
         
      },
      function(data,status){
        console.log(data);
        console.log(status);
     
        manageAuth(data)
     
        
      });  
    }
    function manageAuth(data){
   
      let objAuth = JSON.parse(data) 
      console.log(objAuth);
        auth =objAuth.resultado
        console.log(auth)   
    }
    
//     function sendData(){
    
    
//      // console.log(current,'current');
//     //  console.log(takeName,'nameplayer');
  
//       $.post('./serverCampoMinado/setDataplayer.php',
//       {
//         token:'fdptadsphp',
//         acao: 'autenticar jogador',
//         posicao: current,
//         nome: takeName,
        
  
//       },
//       function(data,status){
//         console.log(data);
//         console.log(status);
     
      
//       });
       
    
//     }
//     function getData(){   
    
 
  
//       $.get('./serverCampoMinado/getDataPlayer.php',
//       {
       
//       },
//       function(data,status){
//         console.log(data);
//         console.log(status);
//        console.log("\n",typeof(data));
//        manipularArray(data)
       
//       });
       
  
//     }
//  function manipularArray(data){
//    let splitedData= data.split("*")
//     console.log("\ndata mudada\n",splitedData[1])
//     console.log("\ndata mudada\n",splitedData[3])
    
//     if(splitedData[1]!=undefined){

    
//      var objData = JSON.parse(splitedData[1])
//     }
//     else{
//       objData ={}
//     }
  

//     if(splitedData[3]=!undefined) {
//     const objData2 = JSON.parse(splitedData[3])  
//     console.log("\n",objData2)
//     }

//     console.log("\n",objData)
//     objCheckMove = objData;
  
  
//     checkMove(objData)
   
//  }
//     //console.log(current,'current');
//    // console.log(takeName,'nameplayer');
 
//    function submitForm(){

//     let namePlayer =  document.getElementById('namePlayer')
//     let scoreEndGame = document.getElementById('scoreEndGame')
//     let dateTime = document.getElementById('dateTime')
//     //sendind data to variables
//     namePlayer.value=takeName 
//     var data = new Date() 
//     scoreEndGame.value=contador
//     dateTime.value=data
//     //console.log('contador',scoreEndGame.value)
//     //console.log('dataJOgo',dateTime.value);
//     //console.log('nomeplayer',namePlayer.value); 
  
//     $.post('./serverCampoMinado/campo-minado.php',
//     {
//         name:namePlayer.value,
//         scoreEndGame: scoreEndGame.value,
//         dateTime: dateTime.value,
//       },
//       function(data,status){
//         console.log(data);
//         console.log(status);
//        manipularArray(data);
//       });
       
  
//     }
function setFirstPlayer(){


  console.log(nameRoom.value);
// console.log(takeName);
  console.log(createNew);



  
  console.log(current);
  $.post('./serverCampoMinado/game.php',
  {
    token:'fdptadsphp',
    acao: 'criar jogo',       
    game : nameRoom.value,
    player: createNew,

        
  },
  function(data,status){
    console.log(data);
    console.log(status);
    setFirstPlayerData(data)
    
    
  });

}
function setFirstPlayerData(data){
  let room = document.getElementById('room')
  let btnstart = document.querySelector('#btnstart')
  var dataobj = JSON.parse(data);
  console.log(dataobj);
  if(dataobj.mensagem1!= undefined ){
  room.innerHTML = ` ${dataobj.mensagem1}`      
  controller=true
  }
  else if(dataobj.Tabela != undefined){
    room.innerHTML = ` ${dataobj.Tabela}` 
  controller = false    
  }
}
function setSecondPlayer(){
  
  let nameRoom = getDataRoom()  
  
  $.post('./serverCampoMinado/game.php',
  {
    token:'fdptadsphp',
    acao: 'criar jogo',       
    game : nameRoom, 
    name : takeName, 
    player: createNew
        
  },
  function(data,status){
    console.log(data);
    console.log(status);
  
    
    
  });
}
// insere minas no banco de dados
function setMines(){
  
  console.log(nameRoom.value);
// console.log(takeName);
  //console.log(nameRoom);
  console.log(takeName);      
  console.log(current);
  console.log(createNew); 


  
  console.log(current);
  $.post('./serverCampoMinado/setBombs.php',
  {
    acao: 'setMines',       
    game : nameRoom.value,   
    namePlayer: takeName,
    posicao: current,
    player: createNew,

        
  },
  function(data,status){
    console.log(data);
    console.log(status);
    
    
    
  });

}
//pega minas no banco de dados
function getMinesPlayer1(){   
    
 
  
     $.post('./serverCampoMinado/player1GetMines.php',
     {
      acao: 'getMinas', 
      game : nameRoom.value, 
      player: createNew
     },
     function(data,status){
       console.log(data);
       console.log(status);
    //  minesPlayer1(data)
     
     });
   }
   function minesPlayer1(data){
      let objData =JSON.parse(data)
      let objCreated = objData.dados;
      let strJson = JSON.stringify(objCreated)
      console.log(strJson);
      let ArrayMines =strJson.split(",")
      console.log(ArrayMines[0]);
      console.log(typeof(ArrayMines));
      console.log(ArrayMines);
   }
   function getMinesPlayer2(){ 
  
    $.post('./serverCampoMinado/player2GetMines.php',
    {
     acao: 'getMinas', 
     game : nameRoom.value, 
     player: createNew
    },
    function(data,status){
     console.log(data);
      console.log(status);
    // minesPlayer2(data)
    
    });
  }
  function minesPlayer2(data){
     let objData =JSON.parse(data)
     let objCreated = objData.dados;
     let strJson = JSON.stringify(objCreated)
     console.log(strJson);
     let ArrayMines =strJson.split(",")
     console.log(ArrayMines[0]);
     console.log(typeof(ArrayMines));
     console.log(ArrayMines);
  }