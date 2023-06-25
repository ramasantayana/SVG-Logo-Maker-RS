const Logo=require('./lib/Logo');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
  
let logo=new Logo();

readline.question('enter up to three characters>', text => {
    logo.setText(text);
    readline.question('enter text color>', color => {
        logo.setColor(color)
        readline.question('shapes to choose from: circle, triangle, and square>', shape => {
           logo.setShape(shape.trim().toLowerCase())
           readline.question('enter shapes  colour>', color => {
            logo.setBg(color);
            logo.save();
            console.log('Generated logo.svg')
            readline.close()
        });
         });
    });
});







