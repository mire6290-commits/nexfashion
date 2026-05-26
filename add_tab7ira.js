const fs = require('fs');

const tab7iraLifestyle = `
                {
                    id: 'tab7ira_beach',
                    name: 'Tab7ira (Beach Day)',
                    icon: '⛱️',
                    description: 'Summer beach trip vibes, walking on wet sand, and relaxing under umbrellas.',
                    actions: [
                        "walking barefoot on the wet sand near the crashing waves, casual beachwear, wind blowing hair, sunny day",
                        "sitting relaxed on a beach towel under a colorful umbrella, smiling naturally, authentic summer lifestyle",
                        "BACK VIEW ONLY, gazing out at the crashing ocean waves, surfers and real people in the distance",
                        "laughing while holding a cold drink, sitting casually at a bustling beachfront cafe terrace",
                        "walking confidently along a busy sandy beach, dynamic movement, lively crowded background",
                        "adjusting sunglasses, vibrant summer sun hitting the face, candid beach lifestyle portrait",
                        "crouching down playfully on the wet sand, touching the water, joyful documentary style",
                        "BACK VIEW ONLY, walking away towards the ocean horizon, holding sandals in one hand, relaxed posture",
                        "standing with hands on hips, enjoying the sea breeze, real families and beachgoers in the background",
                        "artistic portrait, golden hour sunset reflecting beautifully on the wet sand, cinematic coastal framing"
                    ]
                },`;

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add Lifestyle Category
    if (!content.includes("id: 'tab7ira_beach'")) {
        const lifestyleRegex = /lifestyleCategories: \[\s*\{/;
        if (content.match(lifestyleRegex)) {
            content = content.replace(
                "lifestyleCategories: [",
                `lifestyleCategories: [\n${tab7iraLifestyle}`
            );
        }
    }

    // 2. Update Casablanca Environment to be more authentic Tab7ira Ain Diab
    const cornicheRegex = /\{\s*name:\s*'Corniche Luxury Beach'[^}]+\},/m;
    const ainDiabEnv = `{ name: 'Ain Diab Popular Beach', icon: '⛱️', prompt: 'Casablanca Ain Diab sandy beach, local Moroccan tab7ira lifestyle, crowded with real youth and families, colorful beach umbrellas, kids playing football on the wet sand, misty ocean spray, vibrant popular summer vibe, bright daytime sunlight' },`;
    
    if (content.match(cornicheRegex)) {
        content = content.replace(cornicheRegex, ainDiabEnv);
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Tab7ira lifestyle and environment added.");
