class Thumbnail{
    constructor(container,width,height,bd,src,x){
        this.div = document.createElement("div");
        this.width = width; 
        this.height = height;
        this.bd = bd;
        this.img = document.createElement("img");
        this.src = src;
        this.x = x ; 
        var me = this; 

        this.div.style.width = this.width + "px";
        this.div.style.height = this.height  + "px";
        this.div.style.border =  this.bd + "px solid white";
        this.div.style.left = this.x +"px";
        this.div.style.boxSizing = "border-box";
        this.div.style.position= "absolute";
        this.div.style.display = "inline-box";
        this.img.style.width = (this.width-(this.bd*2)) + "px";
        this.img.style.height = (this.height-(this.bd*2)) + "px";
        this.img.style.boxSizing = "border-box";
        this.img.src = this.src;

        this.img.addEventListener("click",function(){
             var index = thumbArray.indexOf(me);
             getDetail(index);
             // alert(this.src);

            console.log ("index" , index);
            pointer.targetX = me.x;
        });

        this.div.appendChild(this.img);
        container.appendChild(this.div);
    
        
    }
}