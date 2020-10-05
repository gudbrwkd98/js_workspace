class hero{
    constructor(x,y,t,l,container){
        
        this.t = t;
        this.l = l;

        this.img = document.createElement("img");
        this.img.style.width = x + "rem";
        this.img.style.height = y + "rem";
        this.img.style.position = "absolute";
        this.img.style.top = t + "rem";
        this.img.style.left = l + "rem";
        this.img.src = "../../image/shooting/plane.png";

        container.appendChild(this.img);
        
        this.height = parseInt(this.img.style.height);
        this.width = parseInt(this.img.style.width);
        this.top = parseInt(this.img.style.top);
        this.left = parseInt(this.img.style.left);
    } 

    moveCharacter(e){

        if(e == 37){
            this.l -= 0.1;

            if(this.l <= 0){
                this.l = 0;
            }

        }else if(e == 38){
            this.t -= 0.1;

            if(this.t <= 0){
                this.t = 0;
            }       


        }else if(e== 39){
            this.l += 0.1;

            if(this.l >= 95){
                this.l = 95;
            }

        }else if(e== 40){
            this.t += 0.1;
            if(this.t >= 45){
                    this.t = 45;
            }
        }

            this.img.style.left =  this.l + "rem"; 
            this.img.style.top =  this.t + "rem"; 

            this.top = parseInt(this.img.style.top);
            this.left = parseInt(this.img.style.left);
 
  
    }

    removeHero(){
        this.img.remove();
    }
}