var n = 5;
var theBoard;
function initGame(){
    theBoard = new Board(n,n,"arise");
    document.getElementById("spotForBoard").appendChild(theBoard.elem);
}
document.addEventListener("keyup",function(event){
    var val = event.keyCode;
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    if(val==13){
        theBoard.submit();
    }else if(65<=val && val<65+26){
        theBoard.typeIn(alphabet[val-65]);
    }

});