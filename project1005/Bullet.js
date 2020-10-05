class Bullet{
    constructor(x,y,width,height,velX,velY,address){
        this.img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height ;
        this.velX = velX;
        this.velY = velY ;

        this.img = document.createElement("img");
        this.img.style.position = "absolute";
        this.img.src = address;
        this.img.style.width = this.width +"px" ;
        this.img.style.height = this.height + "px";
        this.img.style.top = this.y +"px";
        this.img.style.left = this.x  + "px";

    //화면에 부착!!
    wrapper.appendChild(this.img);

    }

    tick(){
        this.x += this.velX;
        this.y += this.velY;
    }
    
    render(){
        this.img.style.left = this.x + "px";
        this.img.style.top = this.y + "px";
        
    }
    
    Bremove(){
        this.img.remove();
    }
}