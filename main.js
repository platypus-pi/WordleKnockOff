//debuggy this
var n = 5;
var theBoard;
function initGame(){
    theBoard = new Board(n,n,"arise");
    document.getElementById("spotForBoard").appendChild(theBoard.elem);
}
document.addEventListener("keyup",function(e){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var val = e.key; //string val
    if(val=="Space"){
        theBoard.submit();
        document.write("you pressed space");
    }else if(val.length==1){
        theBoard.typeIn(val);
    }else{
        console.log("poop key entered");
    }

});