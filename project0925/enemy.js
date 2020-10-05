class Enemy{
    constructor(width,height,x,y,container,src){
        this.img= document.createElement("img");
        this.img.src = src;
        this.img.style.width = width + "px";
        this.img.style.height = height  + "px";
        this.img.style.top  = y + "px";
        this.img.style.left = x + "px";
        this.img.style.position = "absolute";

        container.appendChild(this.img);
    }

    move(){

    }
}