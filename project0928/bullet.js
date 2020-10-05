class bullets{
    constructor(container,t,l){
        this.x = l;
        this.img = document.createElement("img");
        this.img.src = "../../image/shooting/ball.png";
        this.img.style.width = 1 +"rem";
        this.img.style.height = 1 +"rem";
        this.img.style.top = t +"rem";
        this.img.style.left = l + "rem";
        this.img.style.position = "absolute";
       
        container.appendChild(this.img);

    }

    move(){
        this.x += 0.1;
        this.img.style.left = this.x + "rem";
        this.left = this.img.style.left;
        this.top = this.img.style.top;
    }

    removeB(){
        this.img.remove();
    }
}