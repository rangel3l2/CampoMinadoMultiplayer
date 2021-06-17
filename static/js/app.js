const container = document.getElementById('container')
const width=40, height=30;
let squares=[]
let current = 0 
let contador=0
let isMoving=true
let takeName
let click=false
let choosePlayer=0  
let objCheckMove
let data2;

  

Auth()
 function startGame(auth){ 
 
  const divbtn = document.getElementById('divbtn')  
  const btnStart = document.getElementById('btnstart')
  const warnDiv = document.getElementById('warnDiv')

  btnStart.onclick =()=>
    {
     

      if(inputName.value==''){       
        warnDiv.style.display='block'
        return false
      }
      else{          
        
           console.log(auth);
        if(auth.resultado == 0){
        setInterval(() => {
          
            sendData()
            getData() 
        }, 1000);
        }
       
      
        isMoving=true
        contador=0      
        container.innerHTML=''
        container.style.borderImage='none' 
        container.style.backgroundColor='#b1e2f2'
        divbtn.style.borderRadius='50%'  
        divbtn.style.margin='150px'        
        divbtn.style.backgroundImage='url(./static/img/explosao.gif)'
        divbtn.style.backgroundColor='black' 
        container.style.flexDirection = 'column'
          createCount()
          createSquares()
      }  
    }
  
   
  }
function menuStart(){
  container.innerHTML=''
  container.style.flexDirection = 'row'
  current = 0
  squares.length=0;   
  const divHost = document.createElement('div')
  const innerContainer = document.createElement('div')  
  divHost.id='divHost'
  const divTitleGame = document.createElement('div')
  container.appendChild(divTitleGame)
  divTitleGame.id = 'divTitleGame'
  const titleGame = document.createElement('h3')
  divTitleGame.appendChild(titleGame)
  titleGame.innerHTML='Campo Minado'
  titleGame.id='titleGame'
  container.appendChild(innerContainer)
  innerContainer.id = 'innerContainer'
  innerContainer.appendChild(divHost)
  const divStart = document.createElement('div') 
  divStart.id='divStart'
  innerContainer.appendChild(divStart)  
  let divbtn = document.createElement('div')
  divStart.appendChild(divbtn)
  divbtn.id='divbtn'
  let btnStart = document.createElement('button')
  btnStart.innerHTML='Start Game'
  divbtn.appendChild(btnStart)     
  btnStart.id='btnstart'
  let nomePlayer = document.createElement('div')  
  let inputName = document.createElement('input')
  let warnMessage = document.createElement('p') 
  warnMessage.id = 'warnMessage'  
  nomePlayer.appendChild(inputName)
  divStart.appendChild(nomePlayer)
  nomePlayer.appendChild(warnMessage)
  inputName.setAttribute('type','text')
  inputName.setAttribute('name','inputName') 
  nomePlayer.id='namePlayer'
  warnMessage.innerHTML='*Campo obrigatório'
  nomePlayer.style.fontSize='14px'
  warnMessage.style.margin='0'
  //nomePlayer.style.flexDirection='collumn' 
  inputName.setAttribute('id','inputName')
  inputName.setAttribute('placeholder','Insira seu apelido')
   let getName=document.getElementById('inputName')
   let warnDiv =document.createElement('div')
   warnDiv.id = 'warnDiv'
   warnDiv.innerHTML='Preencha o campo Apelido'
   warnDiv.style.color='red'
   divStart.appendChild(warnDiv)
   warnDiv.style.display='none'
  getName.onchange = ()=>{ takeName=getName.value}

 

}  


function selectMatch(){
const divSelect = document.querySelector('#divHost')
let singlePlayer = document.createElement('div')
let multiPlayer = document.createElement('div')  
divSelect.appendChild(singlePlayer)
divSelect.appendChild(multiPlayer)
singlePlayer.id = 'singlePlayer'
multiPlayer.id = 'multiPlayer'
singlePlayer.classList.add('host')
multiPlayer.classList.add('host')
singlePlayer.innerHTML = 'Singleplayer'
multiPlayer.innerHTML = 'Multiplayer'
selectMatchEvents(singlePlayer,multiPlayer)
}
function selectMatchEvents(singlePlayer,multiPlayer){
 let host = false
 const divHost = document.querySelector('#divHost')
  singlePlayer.onclick = () =>{ host = false
   divHost.outerHTML = ''
  }

  multiPlayer.onclick = ()=>{ host = true 
    divHost.outerHTML = ''
    
  }

}



function createSquares(){
  const grid = document.createElement('grid')
  
  grid.classList.add('grid')
  
    container.appendChild(grid)
    let col=0
    let row=0
    for (let i = 0; i < width*height; i++) {        
        let square = document.createElement('div')
        grid.appendChild(square)
        square.classList.add("square")       
       
       
        if(i>0){
            col++
             if(i%width==0){
                 row++     
                 col=0
                 
             }
         
            }
         square.id=`d${row},${col}` 
         squares.push(square)
           

    
    }
    
addPLayer()



}

function addPLayer(){

  let  playerDiv=document.createElement('div')
  playerDiv.id='playerDiv'
  let playerImg = document.createElement('img')
  playerImg.setAttribute("id",'playerImg')
  playerImg.setAttribute("src","./static/img/formiga.jpg")
  playerDiv.appendChild(playerImg)
 
   squares[current].appendChild(playerDiv)
    
  
    
   addMine()
}

function addMine(){
        const mines = document.createElement('div')
        var  shuffedArray =[]
        const bombs=100;
        const empySquare=1100
        mines.classList.add('mines')
        mines.style.display='block';
        mines.style.backgroundImage='url(./static/img/bomba.png)'
        var bombsArray = Array(bombs).fill(true)
        var emptyArray = Array(empySquare).fill(false)   
        let concatedArray = bombsArray.concat(emptyArray)
        shuffedArray = concatedArray.sort(()=>Math.random() -0.5)        
      for (let i = 0; i < width*height; i++) {


        if(shuffedArray[i] && i>2 && i!=width && i!=squares.length-1 ){
         //retirado 2+1+1 =4 mines 100-4 =96
        squares[i].innerHTML+= mines.outerHTML
        }

      }
     
    document.addEventListener("keydown",movePlayer)   
    
}
function checkMove(objData){
  objData.playerCurrentPosition
  current = objData.playerCurrentPosition
  squares[current].appendChild(playerDiv)
  if(objData.id % 2 == 1){
 console.log('vez do jogador 1')

  }
  else{
   
    console.log('vez do jogador 2')
  }

}

function movePlayer(event){
let keyName = event.keyCode
console.log(keyName);


  switch(keyName){
    case 39:
      
      moveRight()    
    break;
    case 37:
      
      moveLeft()
      break
    case 38:
      
      moveUp()
      break
    case 40:
    
      moveDown()
      break  

  }
}

function moveRight(){
 
  
    
  console.log(squares.length);
 
   //console.log("teste",squares.length%width);
     if(current%width<=38 && current<squares.length && isMoving){
      isMoving=false
    current=current+1
    squares[current].appendChild(playerDiv)
  
   
   
      
    detectMines()
    addAudio()
    contador++
    addPontos(contador)
   //console.log( "current",current);
     }
    
}
function moveLeft(){
 
  if(current>0 && current%width>0  && isMoving){ 
    isMoving=false
     
  current=current-1
  squares[current].appendChild(playerDiv)
  
 
  
  
  detectMines()
    addAudio()
    contador++
    addPontos(contador)
  }

 
}
function moveUp(){
  if(current>width  && isMoving){
    isMoving=false
    
  current=current-width  
  squares[current].appendChild(playerDiv)
  
  detectMines()
  addAudio()
  contador++
  addPontos(contador)
  }
 
}
function moveDown(){
  if(current<(height*width)-width  && isMoving){
  isMoving=false 
  current=current+width
  squares[current].appendChild(playerDiv)
  
  detectMines()
  addAudio()
  contador++
  addPontos(contador)
  }

}

function detectMines(){
  console.log(isMoving);
 // console.log("child",squares[4].childNodes.length);
  //console.log(current,"current detection");

    if(squares[current].childNodes.length==2){
      isMoving=false      
    var element = document.getElementsByClassName('mines')
    for (let i =0; i < 96; i++) {
     element[i].style.display='block'
      
    
    }
    
  
    //  playerDiv.style.display='none'
    
     addAudio1()
    setTimeout(()=>{      
      var pCounter = document.getElementById('count')
      pCounter.innerHTML=`Você Perdeu com ${contador} pontos`
      var grid = document.querySelector('.grid')
      grid.style.backgroundImage='url(./static/img/explosao.gif)'},1500)
    setTimeout(function(){
      createForm()
      submitForm()
      menuStart()
      selectMatch()

    },3000)
      
  }
    if(squares[current].childNodes.length==1){
        isMoving=true
    }
    if(squares[current]==squares[squares.length-1]){
      isMoving=false
      addAudio1()
      setTimeout(()=>{ 
        var pCounter = document.getElementById('count')
        var grid = document.querySelector('.grid')
        pCounter.innerHTML=`Você Ganhou com ${contador} pontos`
        grid.style.backgroundImage='url(./static/img/explosao.gif)'},1500)
  
   // pCounter.innerHTML=`Você Ganhou com ${contador} pontos`
      setTimeout(()=>{
        createForm()
        submitForm()
        menuStart()
        selectMatch()
      },3000)
      
    }
  

 
  
}
function addAudio(){
  var audio = new Audio('./static/img/pim.mp3');
  audio.addEventListener('canplaythrough', function() {
    audio.play();
  });
  return audio.play()
  }
function addAudio1(){
  var audio = new Audio('./static/img/pu.mp3');
  audio.addEventListener('canplaythrough', function() {
    audio.play();
  });
  return audio.play()
  }
  function createCount(){
    let CountDiv = document.createElement('div')
    let pCount =document.createElement('p')
    pCount.id='count'
    container.appendChild(CountDiv)
    CountDiv.appendChild(pCount)
   

  }
  function addPontos(contador){     
    //console.log(contador);
       
   let pCounter = document.querySelector('#count')
  // console.log(pCounter);
    pCounter.innerHTML=`Pontuação: ${contador}`
   
  }
  
 function createForm(){
   let form = document.createElement('form')
   let namePlayer = document.createElement('input')
   let scoreEndGame = document.createElement('input')
   let dateTime = document.createElement('input')
   //let submit = document.createElement('input')
  // form.setAttribute('action','campo-minado.php')
   form.setAttribute('method','post')
   form.setAttribute('name','form')
   form.setAttribute('id','form')
   namePlayer.setAttribute('name','namePlayer')
   namePlayer.setAttribute('type','hidden')
   scoreEndGame.setAttribute('name','scoreEndGame')
   scoreEndGame.setAttribute('type','hidden')
   dateTime.setAttribute('name','dateTime')
   dateTime.setAttribute('type','hidden')  
   container.appendChild(form)
   form.appendChild(namePlayer)
   form.appendChild(scoreEndGame)
   form.appendChild(dateTime)
   namePlayer.id='namePlayer'
   scoreEndGame.id='scoreEndGame'
   dateTime.id='dateTime'

 
  
 }






 