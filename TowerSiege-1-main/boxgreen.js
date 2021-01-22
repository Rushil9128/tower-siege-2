class Box2 extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    if(this.boxObject.speed < 3){
      fill(60, 242, 163);
      super.display();
    }
    else{
      World.remove(world,this.boxObject);
    }
    
  }
}