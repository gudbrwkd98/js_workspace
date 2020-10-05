class Enemy{
    constructor(x,y,t,l,container,add,speed){
        this.speed = speed;
        this.img = document.createElement("img");
        this.img.src = add;
        this.img.style.width = x + "rem";
        this.img.style.height = y + "rem";
        this.img.style.position = "absolute";
        this.img.style.top = t + "rem";
        this.img.style.left = l + "rem";
        this.left = parseInt(this.img.style.left);
        this.top = parseInt(this.img.style.top);
        this.height = x;

        this.x = l ;
        container.appendChild(this.img);
        
    }


    moveA(){
        this.left -= this.speed;
        this.img.style.left = this.left + "rem";
    }

    

    removeA(){
        this.img.remove();
    }
}