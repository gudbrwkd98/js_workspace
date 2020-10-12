/*
    게임에 등장할 모든 객체들이 가질수있는 보편적 특징들을 보유할 최상위 객체 정의!
*/
class GameObject{
    constructor(container,src,width,height,x,y,velX,velY){
        this.container = container;
        this.img = document.createElement("img");
        this.src = src;
        this.width = width;
        this.height = height;
        this.x = x ;
        this.y = y ;
        this.velX = velX;
        this.velY = velY;
        this.img.src = this.src;
        
        this.img.style.width = this.width + "px";
        this.img.style.height = this.height + "px";
        this.img.style.position = "absolute";
        this.img.style.left = this.x +"px";
        this.img.style.top = this.y  + "px";
        
        this.container.appendChild(this.img);
    }
}