// I see dead code ;-)
// You are adding readline but you are not using it below.

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });

var value;
var srcUnit;
var destUnit;
var res;

// Prefer `//` instead of `/*...*/` for single-line comments
/*Testing if there are enough arguments and right arguments*/
if(process.argv.length!=6){
    exitProgramm(1);
}

// Format your code before committing it to Git. You should add a whitespace
// before and after `&&`.
if(process.argv[2]&&!isNaN(process.argv[2])){
  value=process.argv[2] 
  } else {
    exitProgramm(1);
  }
if(process.argv[3]) srcUnit=process.argv[3];
// Generally prefer `!==` over `!=`
if(process.argv[4]!=`to`) exitProgramm(1);
if(process.argv[5]) destUnit=process.argv[5];


process.stdout.write(value+` `+srcUnit+` are `+(conv(value, srcUnit, destUnit))+` `+destUnit+`\n`);
exitProgramm();

function conv(value, srcUnit, destUnit){
  // Your solution works, but needs quite a lot of code.
  // You could try to solve the problem with less lines of code.
  // However, it works are requested.
    switch(srcUnit){
        case 'm':
          if(destUnit==='cm') return value*100;
          if(destUnit==='mm') return value*1000;
          if(destUnit===`m`) return value;

        case 'cm':
          if(destUnit==='m') return value/100;
          if(destUnit==='mm') return value*10;
          if(destUnit==='cm') return value;
      
        case 'mm':
          if(destUnit==='m') return value/1000;
          if(destUnit==='cm') return value/10;
          if(destUnit==='mm') return value;
        
        case 'kg':
          if(destUnit==='g') return value*1000;
          if(destUnit==='kg') return value;
      
        case 'g':
          if(destUnit==='kg') return value/1000;
          if(destUnit==='g') return value;
        
        default:
          exitProgramm(1);
          break;
      }
}

function exitProgramm(errNum){
    if(errNum) process.stdout.write(`Invalid parameters\n`);
    process.exit(1);
  }