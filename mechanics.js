class Board{
    constructor(numbGuesses,lenGuess,theWord){
        if(lenGuess!=theWord.length){console.log("illegal board construction");}
        this.word = theWord;
        this.numbGuesses = numbGuesses;
        this.guessList = [];
        this.elem = document.createElement("div");
        this.current = 0;
        for(var i=0;i<numbGuesses;i++){
            this.guessList.push(new Guess(lenGuess));
            this.elem.appendChild(this.guessList[i].elem);
        }
    }
    typeIn(s){
        if(this.current<this.numbGuesses){
            this.guessList[this.current].typeIn(s);
        }
    }
    submit(){
        if(this.guessList[this.current].submitsAgainst(this.word)){
            this.current++;
        }
    }
}
class Guess{
    constructor(n){
        this.maxsize = n;
        this.elem = document.createElementById("p");
        this.text = "";
        this.guessedStatus;
        //2 means right spot right lett,
        //1 means right lett wrong spot,
        //0 means wrong lett
    }
    getSize(){
        return this.text.length;
    }
    isSubmitted(){
        return this.guessedStatus!=undefined;
    }
    typeIn(s){
        if(this.getSize()<this.maxsize){
            this.text+=s;
            this.elem.innerHTML = this.text;
        }
    }
    submitsAgainst(word){
        if(this.getSize()<this.maxsize){return false;}

        var template = [];
        for(var s in word){
            template.push(s);
        }
        for(var i=0; i<this.text.length; i++){
            if(this.text[i]==template[i]){
                this.guessedStatus.push(2);
                this.template[i] = undefined;
            }else{
                this.guessedStatus.push(0);
                for(var j=0; j<template.length; j++){
                    if(this.text[i]==this.template[j]){
                        this.guessedStatus[i] = 1;
                        template[j] = undefined;
                        break;
                    }
                }
            }
        }
        return true;
    }

}