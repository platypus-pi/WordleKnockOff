var n = 5;
var theBoard;
function initGame(){
    theBoard = new Board(n,n,"arise");
    document.getElementById("spotForBoard").appendChild(theBoard.elem);
}
document.addEventListener("keyup",function(event){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    var val = event.key; //string val
    if(val=="Enter"){
        theBoard.submit();
        document.write("you pressed space");
    }else if(val.length==1){
        theBoard.typeIn(val);
    }else{
        console.log("poop key entered");
    }

});