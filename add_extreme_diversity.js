const fs = require('fs');

const diverseLogic = `
            // --- EXTREME DIVERSITY DATA ---
            diverseHatat: [
                "walking confidently towards the camera, dynamic motion blur in background",
                "leaning casually against a textured wall, relaxed and authentic",
                "BACK VIEW ONLY, walking away and looking over her shoulder, mysterious gaze",
                "sitting gracefully at a cafe table, pouring a drink, mid-action candid",
                "standing still amidst a fast-moving blurred crowd, cinematic long exposure feel",
                "low angle shot, looking down at the camera with a powerful, confident expression",
                "high angle top-down shot, looking up while adjusting her hair, soft natural light",
                "profile shot, gazing into the distance, lost in thought, documentary style",
                "crouching slightly to interact with a street cat or artisan goods, warm smile",
                "laughing out loud, head thrown back slightly, joyful candid moment",
                "walking briskly, checking phone or watch, fast-paced lifestyle",
                "standing near a window, soft light illuminating her face, intimate portrait",
                "crossing a busy street, looking both ways, dynamic urban lifestyle",
                "holding sunglasses, adjusting accessories, fashion editorial vibe",
                "sitting cross-legged on a patterned rug, relaxed bohemian posture",
                "stretching arms or taking a deep breath, morning sunlight, serene posture",
                "turning quickly, hair whipping in the wind, dynamic action shot",
                "looking through an archway or doorframe, natural framing, cinematic composition",
                "interacting warmly with a local, shaking hands or exchanging items",
                "close up portrait, intense eye contact, shallow depth of field, blurred background"
            ],

            diverseBlayss: [
                "vibrant crowded souk with spices and woven carpets, Marrakech",
                "quiet narrow blue-washed alleyway, Chefchaouen",
                "modern busy tramway station, Casablanca business district",
                "historic stone ramparts overlooking the crashing ocean, Essaouira",
                "lush green riad courtyard with a central zellij fountain, Fes",
                "massive orange sand dunes at golden hour, Sahara Desert",
                "trendy bohemian rooftop cafe with brass lanterns at dusk",
                "traditional tannery with colorful dye vats, chaotic working background",
                "busy fishing port with blue wooden boats and seagulls, Essaouira",
                "snowy cedar forest with winter sunlight, Ifrane",
                "grand historical gate with intricate mosaics, Bab Mansour Meknes",
                "luxury marina with modern yachts and palm trees, Agadir",
                "traditional pottery cooperative with wet clay and artisans working",
                "wide sandy beach at sunset with kite surfers in the distance, Dakhla",
                "bustling night market with food stalls and rising smoke, Jemaa el-Fnaa",
                "quiet mountain village with terraced agriculture, Atlas Mountains",
                "modern sleek shopping boulevard with high-end boutiques, Casablanca",
                "ancient roman ruins with stone columns and olive trees, Volubilis",
                "colorful street art murals on white walls, Asilah",
                "peaceful palm grove oasis with camels in the background, Palmeraie",
                "authentic local barber shop or tailor workshop, cinematic documentary",
                "high-end luxury mall with glass architecture, Morocco Mall",
                "traditional hammam entrance with beautiful tiles and steam",
                "rooftop with satellite dishes overlooking a dense sprawling medina",
                "train station interior, fast moving passengers, ONCF station"
            ],

            getImagesPrompt() {
                const count = parseInt(this.params.imageCount);
                let sequence = [];
                
                // Shuffle helper function for extreme diversity
                const shuffle = (array) => {
                    let currentIndex = array.length, randomIndex;
                    while (currentIndex != 0) {
                        randomIndex = Math.floor(Math.random() * currentIndex);
                        currentIndex--;
                        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
                    }
                    return array;
                };

                // Check if user wants extreme diversity (Random Mix selected or Environment is Random All)
                const isExtremeDiversity = this.params.lifestyleCategory === 'random_lifestyle' || this.params.environment === 'random_all' || this.params.environment.startsWith('random_country_');

                let selectedHatat = [];
                let selectedBlayss = [];

                if (isExtremeDiversity) {
                    // Generate a fully unique 10-shot sequence using the extreme diversity datasets
                    selectedHatat = shuffle([...this.diverseHatat]).slice(0, count);
                    selectedBlayss = shuffle([...this.diverseBlayss]).slice(0, count);
                } else {
                    // If they picked a specific location/lifestyle, we still try to vary things based on their selection
                    
                    // 1. Build Environment Pool
                    let envPool = [];
                    if (this.params.environment === 'custom') {
                        envPool = [this.params.customEnvironment];
                    } else if (this.params.environment.startsWith('random_city_')) {
                        const cid = this.params.environment.replace('random_city_', '');
                        this.countries.forEach(country => {
                            const city = country.cities.find(c => c.id === cid);
                            if (city) {
                                city.envs.forEach(e => envPool.push(e.prompt));
                            }
                        });
                        envPool = shuffle(envPool);
                    } else {
                        envPool = [this.params.environment];
                    }

                    // 2. Build Action Pool
                    const category = this.lifestyleCategories.find(c => c.id === this.params.lifestyleCategory);
                    let actionPool = category ? category.actions : this.lifestyleCategories[1].actions;
                    
                    // 3. Fill the arrays for the sequence
                    for(let i=0; i<count; i++) {
                        selectedBlayss.push(envPool[i % envPool.length]);
                        selectedHatat.push(actionPool[i % actionPool.length]);
                    }
                }

                for(let i = 0; i < count; i++) {
                    let currentEnvPrompt = selectedBlayss[i];
                    let currentPrompt = selectedHatat[i];

                    let shot = \`IMAGE \$\{i+1\}\\n\\nGenerate independently\\n\\nENVIRONMENT: \$\{currentEnvPrompt\}\\nACTION: \$\{currentPrompt\}\\n\\n\`;
                    
                    if (i === count - 1) {
                        shot += \`Finish image \$\{i+1\}\`;
                    } else {
                        shot += \`Finish image \$\{i+1\} before image \$\{i+2\}\`;
                    }
                    sequence.push(shot);
                }
                return sequence.join('\\n\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n\\n');
            },`;

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Remove old getImagesPrompt
    const getImagesRegex = /getImagesPrompt\(\)\s*\{[\s\S]*?return sequence\.join\('\\n\\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\\n\\n'\);\s*\},/m;
    
    if (content.match(getImagesRegex)) {
        content = content.replace(getImagesRegex, diverseLogic);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated extreme diversity logic in " + filePath);
    } else {
        console.log("Could not find getImagesPrompt block in " + filePath);
    }
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');
