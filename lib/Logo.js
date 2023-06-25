const fs=require('fs');
class Logo{
    color='black';
    bgcolor='white';
    text='SVG'
    shape='circle'

    setColor(color){
        if(color && color!==''){
            this.color=color
        }
    }

    setText(text){
        if(text&& text!==''){
            this.text=text;
        }
    }

    setBg(bgcolor){
        if(bgcolor&&bgcolor!==''){
            this.bgcolor=bgcolor;
        }
    }
   
    setShape(shape){
        if(shape&&shape!==''){
            this.shape=shape;
        }
    }


    save(){
        let str='';
        if(this.shape=='circle'){
            str=fs.readFileSync('example/circle.svg','utf-8')
        }
        if(this.shape=='square'){
            str=fs.readFileSync('example/square.svg','utf-8')
        }
        if(this.shape=='triangle'){
            str=fs.readFileSync('example/triangle.svg','utf-8')
        }

        str=str.replaceAll('${bgcolor}',this.bgcolor);
        str=str.replaceAll('${color}',this.color);
        str=str.replaceAll('${text}',this.text);

        fs.writeFileSync('example/logo.svg',str);

    }


}


module.exports=Logo;