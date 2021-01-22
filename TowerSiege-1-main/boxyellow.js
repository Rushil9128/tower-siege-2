class Box3 extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }

  display()
  {
    if(this.boxObject.speed < 3){
      fill(239,242,72);
      super.display();
    }
    else{
      World.remove(world,this.boxObject);
    }

  }
}