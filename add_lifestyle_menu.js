const fs = require('fs');

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add lifestyleCategory to params
    const paramRegex = /imageCount:\s*'10',?\s*\}/;
    if (content.match(paramRegex) && !content.includes("lifestyleCategory: 'masterclass'")) {
        content = content.replace(paramRegex, "imageCount: '10',\n                lifestyleCategory: 'masterclass',\n            }");
    }

    // 2. Add lifestyleCategories array after countries array
    const countriesEndRegex = /\s*\]\s*\},\s*getImagesPrompt\(\)\s*\{/m;
    const newCategories = `
            ],
            
            lifestyleCategories: [
                {
                    id: 'masterclass',
                    name: 'The Arch Masterclass',
                    icon: '📸',
                    description: 'The standard 10-shot fashion editorial sequence.',
                    actions: [
                        "getting out of her luxury vehicle, confident arrival, low angle, morning light",
                        "BACK VIEW ONLY, walking away, looking over shoulder, mid movement",
                        "laughing naturally, engaging with surroundings, hidden observer camera",
                        "walking naturally, hair moving from wind, dynamic casual stroll",
                        "BACK VIEW ONLY, walking naturally, plants or architecture in foreground",
                        "opening door or interacting with environment, warm light",
                        "mid movement, turning while laughing, top camera angle",
                        "BACK VIEW ONLY, seated relaxed, head turned naturally, golden light",
                        "emotional pause, watching the surroundings, cinematic blue hour",
                        "artistic portrait, window or natural light, foreground framing, powerful eye contact"
                    ]
                },
                {
                    id: 'business',
                    name: 'Corporate & Boss Lady',
                    icon: '💼',
                    description: 'Fast-paced business lifestyle and corporate power.',
                    actions: [
                        "getting out of her luxury vehicle holding a leather folder, confident arrival",
                        "walking briskly through a busy lobby, checking watch, real people walking by",
                        "BACK VIEW ONLY, waiting at an elevator, professional posture",
                        "sitting at a modern cafe table with a laptop, deep in thought, candid documentary",
                        "shaking hands with an unseen person, warm professional smile",
                        "walking down a city street holding a coffee cup, phone to ear, busy crowd",
                        "BACK VIEW ONLY, looking out a large skyscraper window",
                        "reviewing documents while walking, focused expression",
                        "entering a boardroom, commanding presence, low angle",
                        "artistic portrait, soft office lighting, powerful eye contact"
                    ]
                },
                {
                    id: 'casual_cozy',
                    name: 'Casual & Slow Living',
                    icon: '☕',
                    description: 'Relaxed, everyday candid moments and cozy vibes.',
                    actions: [
                        "getting out of her vehicle with paper grocery bags, candid smile",
                        "sitting comfortably reading a magazine, relaxed posture",
                        "BACK VIEW ONLY, walking slowly enjoying the view, soft light",
                        "laughing while holding a warm mug of coffee with both hands",
                        "stretching arms in the morning sunlight, eyes closed",
                        "browsing through a local market, touching items, locals interacting",
                        "BACK VIEW ONLY, sitting on a bench watching people pass by",
                        "fixing her hair casually in a reflection, candid moment",
                        "petting a stray cat or interacting with nature gently",
                        "soft portrait, hazy sunlight, serene and peaceful expression"
                    ]
                },
                {
                    id: 'nightlife',
                    name: 'Glamour & Nightlife',
                    icon: '🍸',
                    description: 'High energy, luxury parties, and nighttime glamour.',
                    actions: [
                        "stepping out of her luxury vehicle into flashing camera lights",
                        "walking confidently past a velvet rope, VIP entrance, paparazzi background",
                        "BACK VIEW ONLY, walking down a dimly lit exclusive hallway",
                        "laughing while holding a cocktail, neon lights reflecting, crowded party",
                        "dancing slightly to music, dynamic movement blur, club atmosphere",
                        "touching up makeup in a moody mirror reflection",
                        "BACK VIEW ONLY, sitting at a luxury bar counter, moody lights",
                        "whispering to a friend in a crowded room, candid party shot",
                        "looking over her shoulder with a sultry gaze, dark cinematic lighting",
                        "dramatic portrait, harsh flash photography, high fashion glamour"
                    ]
                },
                {
                    id: 'travel',
                    name: 'Travel & Adventure',
                    icon: '✈️',
                    description: 'Exploring new places, wandering, and discovering.',
                    actions: [
                        "getting out of a rugged 4x4 vehicle, adjusting sunglasses, vast landscape",
                        "walking with a vintage camera, looking at the architecture, sunny day",
                        "BACK VIEW ONLY, walking down a narrow unknown street, discovering",
                        "looking at a map or phone, slightly confused but smiling naturally",
                        "buying something from a street vendor, authentic interaction with locals",
                        "sitting on a suitcase resting, exhausted but happy",
                        "BACK VIEW ONLY, gazing at a massive landscape or monument",
                        "laughing while the wind blows her hair strongly, dynamic nature",
                        "tasting local street food, candid documentary style",
                        "travel portrait, golden hour lighting, bright adventurous eyes"
                    ]
                }
            ],

            getImagesPrompt() {`;

    if (content.match(countriesEndRegex) && !content.includes("lifestyleCategories: [")) {
        content = content.replace(countriesEndRegex, newCategories);
    }

    // 3. Update getImagesPrompt to use the selected category
    const getImagesPromptBodyRegex = /const prompts = \[[\s\S]*?\];\s*for\(let i = 0;/m;
    const newGetImagesBody = `const category = this.lifestyleCategories.find(c => c.id === this.params.lifestyleCategory);
                const prompts = category ? category.actions : this.lifestyleCategories[0].actions;
                
                for(let i = 0;`;
    if (content.match(getImagesPromptBodyRegex)) {
        content = content.replace(getImagesPromptBodyRegex, newGetImagesBody);
    }

    // 4. Update HTML Grid
    const megaMenuOuterRegex = /<div class="relative w-full" x-data="\{ openMenu: false, activeCountry: 'morocco', activeCity: 'casablanca' \}">[\s\S]*?<!-- Custom Input Details -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/m;
    const match = content.match(megaMenuOuterRegex);
    
    if (match && !content.includes('<!-- Lifestyle Menu Dropdown -->')) {
        const originalLocationBlock = match[0];
        
        const newHtmlBlock = `<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <!-- Location Settings Dropdown -->
                                ${originalLocationBlock.replace('<div class="relative w-full" x-data="{ openMenu: false', '<div class="relative w-full" x-data="{ openLocation: false')}
                                
                                <!-- Lifestyle Menu Dropdown -->
                                <div class="relative w-full" x-data="{ openLifestyle: false }">
                                    <button @click="openLifestyle = !openLifestyle" 
                                            class="w-full px-4 py-3 bg-black/60 border border-white/10 hover:border-lux-gold rounded-lg text-sm font-semibold tracking-wider uppercase flex justify-between items-center transition-all text-gray-200">
                                        <span class="flex items-center gap-2">🎭 Lifestyle Settings</span>
                                        <svg :class="openLifestyle ? 'rotate-180 text-lux-gold' : ''" class="w-4 h-4 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                                    </button>
                                    
                                    <div x-show="openLifestyle" @click.away="openLifestyle = false" x-transition.opacity
                                         class="absolute left-0 top-full mt-2 w-full lg:w-[400px] bg-black/95 border-t-2 border-lux-gold border-x border-b border-white/10 rounded-b-xl shadow-2xl flex flex-col overflow-hidden z-50 max-h-96 overflow-y-auto custom-scrollbar">
                                         
                                        <template x-for="cat in lifestyleCategories" :key="cat.id">
                                            <button @click="params.lifestyleCategory = cat.id; openLifestyle = false" 
                                                    class="w-full text-left px-4 py-3 transition-colors flex flex-col gap-1 border-b border-white/5"
                                                    :class="params.lifestyleCategory === cat.id ? 'bg-lux-gold/10 border-l-2 border-lux-gold' : 'hover:bg-white/5'">
                                                <div class="flex items-center gap-2 text-sm" :class="params.lifestyleCategory === cat.id ? 'text-lux-gold font-bold' : 'text-gray-200 font-semibold'">
                                                    <span x-text="cat.icon" class="text-base"></span> <span x-text="cat.name" class="uppercase tracking-wider"></span>
                                                </div>
                                                <div class="text-[10px] text-gray-400 pl-7" x-text="cat.description"></div>
                                            </button>
                                        </template>
                                    </div>
                                </div>
                            </div>
                        </div>`;
                        
        content = content.replace(originalLocationBlock, newHtmlBlock.replace(/openMenu/g, 'openLocation'));
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Added Lifestyle Menu Category successfully.");
