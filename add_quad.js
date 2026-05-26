const fs = require('fs');

const quadLifestyle = `
                {
                    id: 'quad_beach',
                    name: 'Quad Friends (Casablanca)',
                    icon: '🏍️',
                    description: 'Action-packed beach day riding ATVs, wearing stylish casual gear on the sandy coast.',
                    actions: [
                        "riding a rugged ATV quad on a wide sandy beach, laughing excitedly, dynamic motion, sand flying up, cinematic action",
                        "sitting sideways on a parked quad bike at the beach, taking off helmet, hair blowing in the wind, confident lifestyle portrait",
                        "BACK VIEW ONLY, standing next to a parked quad looking out at the crashing ocean waves, casual denim and leather gear, relaxed pose",
                        "leaning against the front of the quad bike, adjusting sunglasses, bright harsh midday sun, stylish adventurous aesthetic",
                        "riding quad bike through shallow ocean water splashing around the tires, fast movement, thrilling summer lifestyle",
                        "taking a selfie while sitting on a quad bike with friends in the blurred background, vibrant and joyful beach day",
                        "crouching down next to the quad wheel, tying shoe laces, dusty boots, raw unretouched documentary style",
                        "BACK VIEW ONLY, riding the quad away from the camera along the coastline, cinematic wide shot, vast open beach",
                        "standing confidently with one foot resting on the quad footpeg, looking out towards the sunset, golden hour lighting",
                        "close-up artistic portrait, wearing a stylish helmet with the visor up, sand on cheeks, intense confident gaze, dramatic lighting"
                    ]
                },`;

function updateFile(filePath) {
    if (!fs.existsSync(filePath)) return;
    let content = fs.readFileSync(filePath, 'utf8');

    if (!content.includes("id: 'quad_beach'")) {
        content = content.replace(
            "lifestyleCategories: [",
            `lifestyleCategories: [\n${quadLifestyle}`
        );
    }
    
    // Find where Casablanca is and add environment
    const targetString = "id: 'casablanca'";
    if (content.includes(targetString) && !content.includes("'Quad Friends Beach'")) {
        const parts = content.split(targetString);
        if (parts.length > 1) {
            const envsPos = parts[1].indexOf("envs: [");
            if (envsPos !== -1) {
                const insertPos = envsPos + "envs: [".length;
                const newEnv = `\n                                        { name: 'Quad Friends Beach', icon: '🏍️', prompt: 'Casablanca wide sandy beach near Dar Bouazza, adventurous quad biking lifestyle, riding ATVs on the sand, splashing ocean water, rugged yet stylish fashion, sunny day, cinematic action photography, flying sand' },`;
                parts[1] = parts[1].slice(0, insertPos) + newEnv + parts[1].slice(insertPos);
                content = parts.join(targetString);
            }
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('preview.html');

console.log("Quad Friends lifestyle and environment added to preview.html");
