class Box1 extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    if(this.boxObject.speed < 3){
      fill(230, 190, 234)
      super.display();
    }
    else{
      World.remove(world,this.boxObject);
    }

  }
}
     