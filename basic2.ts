export class module//here export means you are making this class visible to other files.This is called moduling
{
    constructor(private x?:number, private y?:number)
    {

    }

    print ()
    {
        console.log ("x:"+this.x+ "y:"+this.y );
    }
}