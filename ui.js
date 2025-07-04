const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getRandomImage() {
    fs.writeFileSync('prng-service.txt', 'run');
    
    setTimeout(() => {
        const randomNumber = fs.readFileSync('prng-service.txt', 'utf8');
        fs.writeFileSync('image-service.txt', randomNumber);
        
        setTimeout(() => {
            const imagePath = fs.readFileSync('image-service.txt', 'utf8');
            console.log(`Selected image: ${imagePath}`);
            
            askForCommand();
        }, 100);
    }, 100);
}

function askForCommand() {
    rl.question('Press Enter to get a random image: ', () => {
        getRandomImage();
    });
}

console.log('Random Image Generator');
askForCommand();