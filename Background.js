import InputHandler from './input.js';

class Layer {

    constructor(game, width, height,speedModifier, image){

        this.game=game;
        this.width=window.innerWidth;
        this.height=window.innerHeight;
        this.speedModifier=speedModifier;
        this.image=image;
        this.x=0;
        this.y=0;
        this.input = new InputHandler(this);
       


    }


        update(){

            // this.x--*this.speedModifier;

            if(this.input.keys.includes('ArrowRight'))

            {
                  if(this.x< -this.width)
                 
                  {

                    // this.game.player.x=0;
                    this.x=0;

                    if(this.game.player.x> (this.width-155))


                    {
                        this.game.player.x=0;
                        this.game.enemies=0;
                        this.game.enemies=[];
                        this.game.particles=0
                        this.game.particles=[];
                        this.game.score=this.game.score+15;

                        if(this.game.energy<100)
                       {this.game.energy=this.game.energy+25;};
                    
                    }


                  }
                 
                  else this.x -= this.game.speed*this.speedModifier;
            
            }

            if(this.input.keys.includes('ArrowLeft'))

            {
                  if(-this.x< -this.width)this.x=0;
                  else this.x += this.game.speed*this.speedModifier;

            }

            // console.log(this.x);
            // console.log(-this.width);


        }


        draw(context){

            context.drawImage(this.image,this.x-this.width-20,this.y,this.width,this.height);
            context.drawImage(this.image,this.x,this.y,this.width,this.height);
            context.drawImage(this.image,this.x+this.width+20,this.y,this.width,this.height);



        }}



        export class Background {

            constructor(game){

                this.game=game;
                this.width=1667;
                this.height=500;
                this.layer5image = layer5;
                this.layer4image = layer4;
                this.layer3image = layer3;
                this.layer2image = layer2;
                this.layer1image = layer1;
                this.layer1 = new Layer(this.game,this.width,this.height,0.5,this.layer1image);
                this.layer2 = new Layer(this.game,this.width,this.height,1,this.layer2image);
                this.layer3 = new Layer(this.game,this.width,this.height,2,this.layer3image);
                this.layer4 = new Layer(this.game,this.width,this.height,4,this.layer4image);
                this.layer5 = new Layer(this.game,this.width,this.height,5,this.layer5image);

                this.backgroundLayers= [this.layer1,this.layer2,this.layer3,this.layer4,this.layer5];


            }

            update(){

                this.backgroundLayers.forEach(l =>
                    
                    
                        {l.update();}
                    
                    
                    )};


            draw(context){


                this.backgroundLayers.forEach(l =>
                    
                    
                    {l.draw(context);}
                
                
                )};




            }



        

