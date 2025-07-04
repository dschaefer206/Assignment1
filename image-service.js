const fs = require('fs');

setInterval(() => {
    try {
        const content = fs.readFileSync('image-service.txt', 'utf8');
        const number = parseInt(content);

        if (!isNaN(number)) {
            const imageFiles = fs.readdirSync('images');
            const imageIndex = number % imageFiles.length;
            const imagePath = 'images/' + imageFiles[imageIndex];
            
            fs.writeFileSync('image-service.txt', imagePath);
        }
    } catch (error) {
        
    }
}, 100);
// Making a change for second commit