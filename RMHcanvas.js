window.addEventListener("load", () => {
    console.log("hello");

    const canvas = document.querySelector("#RMHcanvas");
    const ctx = canvas.getContext("2d");
    let painting = false;
     
   
    //Resizing
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    /*ctx.beginPath();
    ctx.moveTo(100, 100);
    ctx.lineTo(200, 100);
    ctx.lineTo(200, 150);
    ctx.closePath();//this closes line path to the nearest line
    ctx.stroke();*/

    

    
    function startPosition(e) {
        painting = true;
        draw(e)
    }
    function finishedPosition() {
        painting = false;
        ctx.beginPath();
    }
    
       
    
    
 function draw (e){
        if(!painting) {return}
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.strokeStyle = document.getElementById("colorSelect").value;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    function erase (e){
       if (painting) {return}
        ctx.lineWidth = 15;
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();

        
    }
    
    
    
    
    
    //event listeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", finishedPosition);
canvas.addEventListener("mousemove", draw); 
canvas.addEventListener(document.getElementById("eraser").ondrag = erase);


document.getElementById("print").onclick = function () {
    window.print()
}



});
 const canvas = document.querySelector("#RMHcanvas")
window.addEventListener("resize", () =>  {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});


