process.stdout.write('hello from spinner1.js... \rheyyy\n');
const chars = ['|' , '/' , '-', '\\', '|'];

let counter = -100;
for (let i = 1; i <= 2; i++) {
  for(let val of chars) {
    setTimeout(() => {
      process.stdout.write('\r' + val + '   ');
    }, counter += 200);
  }
}

setTimeout(() => console.log() , counter += 300);