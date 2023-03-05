import { Enemy, FlyingEnemy } from "./enemies.js";
import { Sitting,Jumping,Running,Falling,Rolling, Diving, HIT } from "./playerStates.js";
import { CollisionAnimation } from "./collisionAnimation.js";
import { FloatingMessage } from "./floartingMessage.js";

export class Player{

    constructor(game){

        this.game=game;
        this.width=100;
        this.height=91.3;
        this.x=0;
        this.y=this.game.height-this.height-this.game.groundMargin;
        this.image=document.getElementById('player');
        this.speed=1;
        this.maxSpeed=30;
        this.frameX=0;
        this.frameY=0;
        this.vy=1;
        this.weight=1;
        this.state = [new Sitting(this.game), new Running(this.game), new Jumping(this.game), new Falling(this.game),new Rolling(this.game),new Diving(this.game), new HIT(this.game)];
   
        this.maxFrame=5;
        this.fps=20;
        this.frameInterval=1000/this.fps;
        this.frameTimer=0;

    
        // this.currentState=this.state[0];
        // this.currentState.enter();


    }


        update(input, deltaTime){


          


            this.checkCollision();
            this.currentState.handleInput(input);

            // this.x++;
            this.x += this.speed;
            if(input.includes('ArrowRight') && this.currentState !== this.state[6])this.speed=this.maxSpeed;
            else if(input.includes('ArrowLeft') && this.currentState !== this.state[6])this.speed=-this.maxSpeed;
            else 
                    {
                        this.speed=this.speed/2;

                    
                    }

            if (this.x<0)this.x=0;
            if (this.x>this.game.width-this.width) this.x = this.game.width-this.width;

            this.y += this.vy;
            if(input.includes('ArrowUp') && this.onGround())this.vy-=30;
            if(!this.onGround())this.vy+=this.weight;
            else this.vy=0;

            // if (this.frameX<this.maxFrame)this.frameX++;
            // else this.frameX=0;

            if(this.y>this.game.height-this.height-this.game.groundMargin)
            {this.y=this.game.height-this.height-this.game.groundMargin;}


            if(this.frameTimer>this.frameInterval)
            {   
                this.frameTimer=0;
                if(this.frameX<this.maxFrame)this.frameX++;
                else this.frameX=0;
            
            } else {this.frameTimer+=deltaTime};

            console.log(this.speed);
        }


        draw(context){


            if (this.game.debug) context.strokeRect(this.x,this.y,this.width,this.height);
            // context.fillStyle ='red';
            // context.fillRect(this.x,this.y,this.width,this.height);
            context.drawImage(this.image,this.frameX*this.width,this.frameY*this.height,this.width,this.height,this.x-50,this.y-70,this.width*2,this.height*2);


        }

       


        onGround(){

            return this.y >= this.game.height-this.height-this.game.groundMargin;


        }

        setState(state, speed){

            this.currentState=this.state[state];
            this.game.speed=this.game.maxSpeed*speed;
            this.currentState.enter();

        }


        checkCollision(){

            this.game.enemies.forEach(e =>
                
                {

                    if(
                        
                        e.x < this.x + this.width &&
                        e.x + e.width > this.x &&
                        e.y < this.y + this.height &&
                        e.y + e.height > this.y
                        
                        
                        ){
                              
                            e.markedForDeletion = true;
                            this.game.collisions.push(new CollisionAnimation(this.game, e.x + e.width*0.5, e.y+e.height*0.5));
                          
                      

                    if(this.currentState === this.state[4] || this.currentState === this.state[5])
                    
                    {

                        this.game.score=this.game.score+5;
                        this.game.floatingMessages.push(new FloatingMessage('+1',e.x,e.y,150,50));
                        this.game.energy=this.game.energy-20;
                        if(this.game.energy<0)this.setState(6,0);

                    }


        
                    else{this.setState(6,0);
                    this.game.score=this.game.score-2;
                    this.game.lives--;}
                    if(this.game.lives<=0) this.game.gameOver = true;

                }
                
                
                
                
                
        });



        }


}