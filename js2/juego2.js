var canvas;
var ctx;
var contador=1;

var jugador= function(x,y){
  this.x=x;
  this.y=y;
  this.direccion=Math.floor(Math.random()*4);

  this.retraso=1;
  this.fotograma=0;

  this.restart=function(){
    this.x=250;
    this.y=250;
  }

  this.dibujaJugador=function(){
    ctx.fillStyle="#000000";
    ctx.lineWidth=2;
    ctx.arc(this.x,this.y,20,0,2*Math.PI,false);
    ctx.fill();
    ctx.stroke();
  }

  this.colision=function(x,y){
    this.choque=false;
    if(x>=500){
      this.choque=true;
    } else{
      this.choque=false;
    }

    if(y>=500){
      this.choque=true;
    } else{
      this.choque=false;
    }
    return this.choque;
  }

  this.moverse1=function(){
    this.direccion=Math.floor(Math.random()*4);

  if(this.fotograma<this.retraso){
    this.fotograma++
  } else{
    this.fotograma=0;
    if(this.direccion==0){
      if(this.colision(this.x++,this.y)==false){
        this.x++
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
    } else if(this.direccion==1){
      if(this.colision(this.x--,this.y)==false){
        this.x--
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
    } else if(this.direccion==2){
      if(this.colision(this.x,this.y++)==false){
        this.y++
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
    } else if(this.direccion==3){
      if(this.colision(this.x,this.y--)==false){
        this.y--
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
    }
  }

  }

  this.moverse2=function(){
    this.direccion=Math.floor(Math.random()*4);
    this.limiteMovimiento=20;
    this.limiteBorde=15;

  if(this.fotograma<this.retraso){
    this.fotograma++
  } else{
    this.fotograma=0;
    if(this.direccion==0){
      for(let i=0;i<=this.limiteMovimiento;i++){
      if(this.colision(this.x+this.limiteBorde,this.y)==false){
        this.x++;
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
      }
    } else if(this.direccion==1){
      for(let i=0;i<=this.limiteMovimiento;i++){
      if(this.colision(this.x-this.limiteBorde,this.y)==false){
        this.x--;
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
      }
      } else if(this.direccion==2){
      for(let i=0;i<=this.limiteMovimiento;i++){
      if(this.colision(this.x,this.y+this.limiteBorde)==false){
        this.y++;
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
      }
    } else if(this.direccion==3){
      for(let i=0;i<=this.limiteMovimiento;i++){
      if(this.colision(this.x,this.y-this.limiteBorde)==false){
        this.y--;
      } else {
        this.direccion=Math.floor(Math.random()*4);
      }
      }
    }
  }

  }
}

function inicializar(){
  canvas=document.getElementById("canvas");
  ctx=canvas.getContext('2d');
  document.addEventListener('keypress',function(){
    contador++;
  });

  jugador1 = new jugador(250,250);

  setInterval(function(){
  principal();
  },1000/50);
}

function borraCanvas(){
  canvas.height=500;
  canvas.width=500;
}

function principal(){
borraCanvas();
jugador1.dibujaJugador();
if(contador%2!=0){
jugador1.moverse1();
} else{
  jugador1.moverse2();
}
}
