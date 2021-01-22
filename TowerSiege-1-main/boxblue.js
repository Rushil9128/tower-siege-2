class Box extends BaseClass 
{
  constructor(x,y,width,height)
  {
    super(x,y,width,height);
  }
z 
  display()
  {

    if(this.boxObject.speed < 3){
      fill(130, 237, 237);
      super.display();
    }
    else{
      World.remove(world,this.boxObject);
    }
  }
}