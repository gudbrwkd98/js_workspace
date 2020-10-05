class box{
    constructor(color,x,y){
        this.x = x ;
        this.y = y ;
        this.img = document.createElement("div");
        this.img.style.top = x  + "px";
        this.img.style.left = y  + "px";
        this.img.style.width = 100 +"px";
        this.img.style.height = 100 + "px";
        this.img.style.background = color;
        this.img.style.position = "absolute";
        this.img.style.color="white";//글씨색상 흰색
        document.body.appendChild(this.img);
    }
}