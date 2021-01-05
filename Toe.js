var gameStart = document.querySelector('#Start');
var winner = document.querySelector('#winner');
gameStartfn();
gamePlay = false;
var ocuppied, counted, ans, ans1;
winner.textContent = null;
var a;
gameStart.addEventListener('click', function(){ 
    gameStartfn();
    winner.textContent = null;
    gameStart.textContent= "Restart";
    gamePlay = true;

    
})

function winning(){
    var i, j, k;
    for(i = 1,  j = 2, k = 3; i<10 && j<10 && k<10; i+=3, j+=3, k+=3){
        if(document.querySelector('#pos'+i).textContent === sign && document.querySelector('#pos'+j).textContent === sign && document.querySelector('#pos'+k).textContent === sign){
            whoWin();
            }}
    for(i = 1,  j = 4, k = 7; i<10 && j<10 && k<10; i+=1, j+=1, k+=1){
        if(document.querySelector('#pos'+i).textContent === sign && document.querySelector('#pos'+j).textContent === sign && document.querySelector('#pos'+k).textContent === sign){
            whoWin();
            }    }
    if(document.querySelector('#pos1').textContent === sign && document.querySelector('#pos5').textContent === sign && document.querySelector('#pos9').textContent === sign){
            whoWin();
            }   
    if(document.querySelector('#pos3').textContent === sign && document.querySelector('#pos5').textContent === sign && document.querySelector('#pos7').textContent === sign){
            whoWin();
            } 
    
}
function whoWin(){
    if(sign === 'X'){
                winner.textContent = 'Player 1 Wins';
            }
            else{
                winner.textContent = 'Player 2 Wins';}
    gameStart.textContent = 'Start';
    gamePlay = false;
    gameStartfn();
}
        
function signCheck(){
    if(sign==='O'){
        sign = 'X';
    }
    else{
        sign = 'O';
    }
    return sign
}

function gameStartfn(){
    
    sign = 'O';
    
    for(var i=1; i<10; i++){
            document.querySelector('#pos'+i).textContent = null;
    }
    return sign;
}



    document.querySelector('#pos1').addEventListener('click', function(){
        if(gamePlay){
            winner.textContent = null;
        ans = FullndOccupy(a=1);
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count != 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
         signCheck();
        document.querySelector('#pos1').textContent = sign;
        winning();}}
    })
    document.querySelector('#pos2').addEventListener('click', function(){
        if(gamePlay){
            winner.textContent = null;
        ans =  FullndOccupy(a=2);
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
        signCheck();
        document.querySelector('#pos2').textContent = sign;
            winning()}}
    })
    document.querySelector('#pos3').addEventListener('click', function(){
        if(gamePlay){winner.textContent = null;
           ans= FullndOccupy(a=3);
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
        signCheck();
        document.querySelector('#pos3').textContent = sign;
        winning();}}
    })
    document.querySelector('#pos4').addEventListener('click', function(){
        if(gamePlay){winner.textContent = null;
           ans = FullndOccupy(a=4);
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
        signCheck();
        document.querySelector('#pos4').textContent = sign;
            winning();}}
    })
    document.querySelector('#pos5').addEventListener('click', function(){
        if(gamePlay){winner.textContent = null;
           ans = FullndOccupy(a=5);
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
        signCheck();
        document.querySelector('#pos5').textContent = sign;
        winning();}}
    })
    document.querySelector('#pos6').addEventListener('click', function(){
        if(gamePlay){winner.textContent = null;
           ans = FullndOccupy(a=6);
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
        signCheck();
        document.querySelector('#pos6').textContent = sign;
        winning();}}
    })
    document.querySelector('#pos7').addEventListener('click', function(){
        if(gamePlay){winner.textContent = null;
           ans = FullndOccupy(a=7);
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
        signCheck();
        document.querySelector('#pos7').textContent = sign;
        winning();
        }}
    })
    document.querySelector('#pos8').addEventListener('click', function(){
        
        if(gamePlay){winner.textContent = null;
                     ans =FullndOccupy(a=8);
                     if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
                signCheck();
        document.querySelector('#pos8').textContent = sign;
        winning();}}
    })
    document.querySelector('#pos9').addEventListener('click', function(){
        ans= FullndOccupy(a=9);
        if(gamePlay){
            if(ans.occupy === true && ans.count === 9){
                winner.textContent = "Draw"
            }
            else if(ans.occupy === true && ans.count !== 9){
            winner.textContent = "Selected Position is Occupied";}
            else{
        signCheck();
        document.querySelector('#pos9').textContent = sign;
        winning();
        }}
    })

function FullndOccupy(a){
    var occupy = false;
if(document.querySelector('#pos'+a).textContent === 'O' || document.querySelector('#pos'+a).textContent === 'X'){
    occupy = true;
    
}   var count =0;
    for(var i=1; i<10; i++){
        if(document.querySelector('#pos'+i).textContent === 'O' || document.querySelector('#pos'+i).textContent === 'X')
        {
            count+=1;
        }
    }
    return {
        occupy,
        count
};
}