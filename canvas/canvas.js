

let canvas = document.getElementById("myCanvas");
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth;
canvas.height = 500;
canvas.width = 500;
let ctx = canvas.getContext("2d");

// //drwa rectagle
// ctx.fillStyle = 'blue';
// ctx.fillRect(50, 50, 100, 100);

// //lines
// ctx.beginPath();
// ctx.moveTo(0,0);
// ctx.lineTo(300, 100);
// ctx.lineTo(300, 400);
// ctx.strokeStyle = "blue";
// ctx.stroke();

// draw arc
window.onload  = function(){
    for(let i=0; i<1000; i++){
        // let x = Math.random() * window.innerWidth;
        // let y = Math.random() * window.innerHeight;
        let x = Math.random() * 500;
        let y = Math.random() * 500;
        
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI*2);
        ctx.strokeStyle = 'blue';
        ctx.fillStyle = '#'+i*2;
        ctx.fill();
        ctx.stroke();
}
}








