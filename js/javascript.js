
    let debug = document.querySelectorAll('select');
    let choice1 = document.getElementById('choice1');
    let choice2 = document.getElementById('choice2');
    
    let goButton = document.querySelector('input[type="button"]');
    let numberDrawn,bet ;
    let playerWallet = 100;
    let losses = 0; 
    
    for (let i = 0; i < 2; i++) {
        
        debug[i].addEventListener('change', function(){
            if ((choice1.selectedIndex == 0 && choice2.selectedIndex != 0) || (choice2.selectedIndex == 0 && choice1.selectedIndex != 0)){
                choice1.addEventListener('blur', function(){
                   goButton.addEventListener('click', evenOdd)
                });

               choice2.addEventListener('blur', function(){
                    goButton.addEventListener('click', numbers);
                });
            }
            else {
                alert('Veuillez faire un seul choix s\'\'il vous plait');
                document.location = 'jeu.html';
            }
        })
        
    }
    

    //etude des differents tirages
    /*
    //si c'est un nombre 
    if(numberDrawn == 0) alert('la mise est perdue');    
    else if(numberDrawn === parseInt(choice2.selectedIndex.value)) alert('Vous avez 35fois votre mise de depart');

    //si c'est pair 
    else if(numberDrawn%2 == 0 && choice1.selectedIndex == '2' ) alert('mise*2');

    //si c'est impair 
    else if(!(numberDrawn%2 == 0) && choice1.selectedIndex == '1' ) alert('mise*2');

    else alert('mise perdue');*/

    //index selectionne

    function draw(){
        return Math.floor(Math.random() * (36 - 1) + 1);
    }

    function evenOdd(){
        bet = theBet()*1000;
        numberDrawn = draw();
        if(numberDrawn%2 == 0 && choice1.selectedIndex == '2' ) {
            playerWallet+= bet*2;
            alert('-vous gagnez ' + '' + bet * 2 + '' + ' CFA\n-Vous avez ' + '' + playerWallet + '' + ' CFA'); 
        }
        else if(!(numberDrawn%2 == 0) && choice1.selectedIndex == '1' ){
            playerWallet += bet * 2;
            alert('-vous gagnez '+ '' +bet*2+''+' CFA\n-Vous avez '+'' +playerWallet+ ''+' CFA'); 
        }
        else{
            losses += bet;
            playerWallet-=losses; 
            alert('-Vous perdez '+ '' +losses+ '' +' CFA\n-Vous avez '+ '' +playerWallet+ ''+ ' CFA');
        }
    }

    function numbers(){
        bet = theBet()*1000;
        numberDrawn = draw();
        if(numberDrawn === parseInt(choice2.selectedIndex.value)) {
            playerWallet += bet * 35;
            alert('-vous gagnez ' + '' + bet * 2 + '' + ' CFA\n-Vous avez ' + '' +playerWallet+ '' + ' CFA'); 
        }
        else{
            losses += bet;
            playerWallet -= losses;  
            alert('-Vous perdez ' + '' + losses + '' + ' CFA\n-Vous avez ' + '' +playerWallet+ '' + ' CFA');
        }  
    }   

    function theBet(){
        return parseFloat(document.querySelector('input[type="number"]').value);
    } 
