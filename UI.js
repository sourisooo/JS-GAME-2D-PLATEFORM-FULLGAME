import { CollisionAnimation } from "./collisionAnimation.js";
import { Fire } from "./particles.js";

export class UI {

    constructor(game){

        this.game=game;
        this.fontSize=50;
        this.fontFamily='Helvetica';
        this.livesImage=lives;

    }

    draw(context){

        context.save;
        context.shadowOffsetX=2;
        context.shadowOffsetY=2;
        context.shadowColor ='white';
        context.shadowBlur=0;

        context.font=this.fontSize+'px '+this.fontFamily;
        context.textAlign='left';
        context.fillStyle=this.game.fontColor;

        context.fillText('Score:'+this.game.score,100,150);

        context.font=this.fontSize*0.8+'px '+this.fontFamily;
        context.fillText(('PRESS Enter to use your Energy: '+this.game.energy),100,220);

        for(let i=0;i<this.game.lives;i++)
        {  context.drawImage(this.livesImage, 30*i,30,30,30)}
      
        if(this.game.message==true){context.fillText('Dont have enought Energy(cost 10)', this.game.width*0.5-300,this.game.height*0.5-50);};
        // if(this.game.message=false){context.fillText('', this.game.width*0.5,this.game.height*0.5+20);};
        console.log(this.game.message);


        if (this.game.gameOver) 
        {

            context.textAlign='center'
            context.font=this.fontSize*2+' px '+this.fontFamily;

        //     if (this.game.score>this.game.winningScore)
        //     {
        //     context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5-20);

        //     context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5+20);
        //     } else {  context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5-20);

        //     context.fillText('Boo-yA', this.game.width*0.5,this.game.height*0.5+20);}
        // }

        context.fillText('Boo-yA, press R to remake a game', this.game.width*0.5,this.game.height*0.5+20);
            
        }

        context.restore();

    }



}