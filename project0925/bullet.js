class Bullet{
    constructor(x,y,container,velX){
        this.x = x ;
        this.y = y ;
        this.velX = velX; //총알의 속도 
        this.id = "bullet";
        this.container = container;
        this.img = document.createElement("img");
        this.img.src = "../../image/shooting/ball.png";
        this.img.style.width = 10+"px";
        this.img.style.height = 10 + "px";
        this.img.style.top = y  + "px";
        this.img.style.left = x + "px";
        this.img.style.position = "absolute";
        this.img.id = "bullet";

        container.appendChild(this.img);
    }

    move(){
        this.x += this.velX;
        this.img.style.left = this.x + "px";
    }

 //remove function 을 통해 html 에서 지워버림 
    removeB(){
        this.img.remove();       
    }


 

 
}