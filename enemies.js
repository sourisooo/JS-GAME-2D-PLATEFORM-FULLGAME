
export class Enemy {

    constructor(){

        this.frameX=0;
        this.frameY=0;
        this.fps =20;
        this.frameInterval =1000/this.fps;
        this.frameTimer=0;
        this.markedForDeletion=false;
    


    }



    update(deltaTime){

        this.x-=this.speedX+this.game.speed;
        this.y+=this.speedY;
        if(this.frameTimer>this.frameInterval)
       
        {
            this.frameTimer=0;
            if(this.frameX<this.maxFrame)this.frameX++;
            else this.frameX=0;
        } else {this.frameTimer+=deltaTime;}


        if(this.x+this.width<0)this.markedForDeletion=true;



    }


    draw(context){

        if(this.game.debug)context.strokeRect(this.x,this.y,this.width,this.height);
        context.drawImage(this.image,this.frameX*this.width,0,this.width,this.height,this.x,this.y,this.width,this.height);


    }

}


   export class FlyingEnemy extends Enemy {

        constructor(game){

            super(game);
            this.game=game;
            this.width=261;
            this.height=209;
            // this.x=this.game.width;
            // this.y=Math.random()*this.game.height*0.8;
            this.speedX=Math.random()+30;
            this.speedY=0;
            this.maxFrame=5;
            this.image=enemy_fly;
            this.angle=0;
            this.va=Math.random()*1+3;

              this.x=this.game.width;
             this.y=Math.random()*this.game.height*0.8;
           this.vx=Math.random()*0.2+0.1;
           this.angle=0;
           this.curve=Math.random()*30;

        }

        update(deltaTime){

            super.update(deltaTime);
            // this.angle+=this.va;
            // this.y+=Math.sin(this.angle);

            this.y += Math.sin(this.angle)*this.curve;
            this.angle+=0.02;

        }

        draw(context){

            super.draw(context);

        }

    }


    export class GroundEnemy extends Enemy {

        constructor(game){

            super(game);
            this.game=game;
            this.width=229;
            this.height=171;
            // this.x=this.game.width;
            // this.y=this.groundMargin+100;
            this.image=enemy_plant;
            this.speedX=Math.random()+30;
            this.speedY=0;
            this.maxFrame=6;


            this.x=this.game.width;
            this.y=this.game.height-this.height-this.game.groundMargin;
    
            this.vx=Math.random()*0.1+0.1;

        //     this.angle=0;
        //     this.va=Math.random()*1+3;
        //     this.x=this.game.width;
        //     this.y=Math.random()*this.game.height*0.8;
        //   this.vx=Math.random()*0.2+0.1;
        //   this.angle=0;
        //   this.curve=Math.random()*30;



        }
        

        draw(context){

            super.draw(context);


        }


        update(deltaTime){

            super.update(deltaTime);
            // this.y += Math.sin(this.angle)*this.curve;
            // this.angle+=0.02;

        }


    }

    export class ClimbingEnemy extends Enemy {

        constructor(game){

            super(game);
            this.game=game;
            this.width=310;
            this.height=175;
            this.x=this.game.width;
            this.y=Math.random()*this.game.height;
            this.image=enemy_spider;
            this.speedX=0;
            this.speedY=Math.random()> 0.5? 1:-1;
            this.maxFrame=6;


        }


            update(deltaTime){

                super.update(deltaTime);
                if(this.y>this.game.height-this.height-this.game.groundMargin)this.speedY*=-8;
                if(this.y<-this.height)this.markedForDeletion=true;



            }


            draw(context){

                super.draw(context);
                context.beginPath();
                context.moveTo(this.x+this.width,0)
                context.lineTo(this.x+this.width+50,this.y+50);
                context.stroke();

            }

    }
