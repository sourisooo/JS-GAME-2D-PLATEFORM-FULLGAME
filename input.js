export default class InputHandler {

            constructor(game) {
              
                this.game=game;
                this.keys = [];
                window.addEventListener('keydown', (e) =>
                
                {
        
                  if((      e.key==='ArrowDown'|| 
                              e.key==='ArrowUp'|| 
                              e.key==='ArrowLeft'|| 
                              e.key==='ArrowRight'|| 
                              e.key==='Enter'
                    ) && this.keys.indexOf(e.key) ===-1 )

                    {this.keys.push(e.key);};

                    

                   if(e.key === 'd') this.game.debug = !this.game.debug;


                   if(e.key === 'Enter' && this.game.energy<10) {this.game.message=true} ;


                   if(e.key === 'r' && this.game.gameOver==true)

                  {
                    this.game.gameOver=false;
                    this.game.energy=100;
                    this.game.score=0;
                    this.game.lives=12;
                    this.game.player.x=0;


                  };


             

                  // console.log(e.key, this.keys);
                
                });
                
        
 
        
                window.addEventListener('keyup', (e) =>
                
                {
        
                  if(      e.key==='ArrowDown'|| 
                              e.key==='ArrowUp'|| 
                              e.key==='ArrowLeft'|| 
                              e.key==='ArrowRight'|| 
                              e.key==='Enter'
                    ) 

                    {this.keys.splice(this.keys.indexOf(e.key),1);}

                    // console.log(e.key, this.keys);
                
                });
                
        
        
        
        
        
        
            }}
        
        
        
        
