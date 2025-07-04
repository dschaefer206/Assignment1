const fs = require('fs');

setInterval(() => {
    try {
        const content = fs.readFileSync('prng-service.txt', 'utf8').trim();
        
        if (content === 'run') {
            const randomNumber = Math.floor(Math.random() * 10000);
            fs.writeFileSync('prng-service.txt', randomNumber.toString());
            console.log(`Generated: ${randomNumber}`);
        }
    } catch (error) {

    }
}, 100);