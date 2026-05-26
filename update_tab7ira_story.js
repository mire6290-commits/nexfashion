const fs = require('fs');

const updatedTab7ira = `
                {
                    id: 'tab7ira_beach',
                    name: 'Tab7ira (Beach Day)',
                    icon: '⛱️',
                    description: 'Complete beach day scenario: swimming, friends, and sunset.',
                    actions: [
                        "arriving at the sandy beach with a group of friends, carrying beach bags, laughing together, casual summer lifestyle",
                        "sitting on a colorful beach towel under an umbrella, chatting and hanging out with friends, authentic casual vibe",
                        "running playfully towards the ocean waves with friends, splashing water, joyful candid moment",
                        "swimming in the cool ocean water, hair wet, smiling widely, friends splashing in the background, active summer lifestyle",
                        "lying on her stomach on the wet sand, sunbathing and relaxing, authentic summer lifestyle",
                        "eating fresh summer fruit and snacks picnic-style on the sand with friends, real everyday life, documentary style",
                        "playing beach paddle ball (raquettes) on the wet sand, dynamic action shot, enjoying the beach",
                        "BACK VIEW ONLY, walking barefoot along the shoreline with her arm around a friend, gazing at the ocean",
                        "sitting on the sand wrapped in a beach towel, deeply enjoying the sunset view, peaceful and relaxed",
                        "artistic portrait, glowing golden hour light, messy salty hair, radiant smile after a perfect beach day with friends"
                    ]
                },`;

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    const tab7iraRegex = /\{\s*id:\s*'tab7ira_beach',[\s\S]*?\]\s*\},/m;
    
    if (content.match(tab7iraRegex)) {
        content = content.replace(tab7iraRegex, updatedTab7ira);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated Tab7ira scenario in " + filePath);
    } else {
        console.log("Could not find tab7ira_beach in " + filePath);
    }
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Tab7ira scenario updated.");
