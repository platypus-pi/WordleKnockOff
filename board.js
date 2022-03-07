class Board{
    constructor(n , theWord){
        this.occArray=[];
        for(i=0;i<n;i++){
            this.occArray.push([])
            for(j=0;j<n;j++){
                this.occArray[i].push(new Square())
            }
        }
        this.readingCoord = [0,0]
        this.isPlaying = true;
        this.word = theWord;
    }
    typeit(){
        place = this.readingCoord;
        if(place[0]<n){ //row
            if(place[1]<n){
                this.occArray[place[0]][place[1]].typeit(lett);
                this.readingCoord[1]++;
            }
        }
    }
    goback(){
        place = this.readingCoord;
        if(place[1]>0){
            this.occArray[place[0]][place[1]-1].erase();
            this.readingCoord[1]--;
        }
    }
    guess(){
        goingRow = this.readingCoord[0]
        if(this.readingCoord[1]==n){
            logMatching(goingRow,getMatching(turnToLetts(goingRow)));
            console.log("guessed "+goingRow);
            this.readingCoord[0]++;
            this.readingCoord[1] = 0;
        }else{
            console.log("you prematurely guessed")
        }
    }
    turnToLetts(rowIndex){
        arr=[];
        for(s in this.occArray[rowIndex]){
            arr.push(s.getLett());
        }
        return arr;
    }
    getMatching(){
        //the BIG Algorithm is here
        // 0 means no match , 1 means wrong spot match
        // 2 means right spot match

    }
    logMatching(){
        //change all squares to yes guessed
        //set colors based on matches
    }
}
class Square{
    constructor(){
        this.guessed=false;
        this.isReading=false;
        this.lett=null;
        this.color=0;
        // 0 = white , 1 = gray , 2 = yellow , 3 = red
    }
    typit(lett){
        this.lett = lett;
    }
    erase(){
        this.lett = null;
    }
    getLett(){
        return this.lett;
    }
}