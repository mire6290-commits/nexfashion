const fs = require('fs');

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Update Country button click
    const countryClickRegex = /@click="activeCountry\s*=\s*country\.id;\s*activeCity\s*=\s*country\.cities\[0\]\?\.id"/g;
    content = content.replace(countryClickRegex, `@click="activeCountry = country.id; activeCity = country.cities[0]?.id; params.environment = 'random_country_' + country.id"`);

    // 2. Update City button click
    const cityClickRegex = /@click="activeCity\s*=\s*city\.id"/g;
    content = content.replace(cityClickRegex, `@click="activeCity = city.id; params.environment = 'random_city_' + city.id"`);

    // 3. Add 'random_all' option to lifestyleCategories
    if (!content.includes("id: 'random_lifestyle'")) {
        content = content.replace(
            "lifestyleCategories: [",
            `lifestyleCategories: [\n                {\n                    id: 'random_lifestyle',\n                    name: '🎲 Random Mix (Surprise Me)',\n                    icon: '🎲',\n                    description: 'Mixes all lifestyles for a completely unpredictable, diverse sequence.',\n                    actions: []\n                },`
        );
    }

    // 4. Update getImagesPrompt()
    const getImagesRegex = /getImagesPrompt\(\)\s*\{[\s\S]*?let sequence = \[\];[\s\S]*?const envPrompt = this\.params\.environment === 'custom' \? this\.params\.customEnvironment : this\.params\.environment;[\s\S]*?const category = this\.lifestyleCategories\.find\(c => c\.id === this\.params\.lifestyleCategory\);[\s\S]*?const prompts = category \? category\.actions : this\.lifestyleCategories\[0\]\.actions;[\s\S]*?for\(let i = 0; i < count; i\+\+\) \{[\s\S]*?let currentPrompt = prompts\[i % prompts\.length\];[\s\S]*?let shot = \`IMAGE \$\{i\+1\}\\n\\nGenerate independently\\n\\nENVIRONMENT: \$\{envPrompt\}\\nACTION: \$\{currentPrompt\}\\n\\n\`;/m;

    const newGetImages = `getImagesPrompt() {
                const count = parseInt(this.params.imageCount);
                let sequence = [];
                
                // --- RANDOM ENVIRONMENT POOL BUILDER ---
                let envPool = [];
                let isEnvRandom = false;
                
                if (this.params.environment.startsWith('random_')) {
                    isEnvRandom = true;
                    if (this.params.environment.startsWith('random_country_')) {
                        const cid = this.params.environment.replace('random_country_', '');
                        const country = this.countries.find(c => c.id === cid);
                        if (country) {
                            country.cities.forEach(city => city.envs.forEach(e => envPool.push(e.prompt)));
                        }
                    } else if (this.params.environment.startsWith('random_city_')) {
                        const cid = this.params.environment.replace('random_city_', '');
                        this.countries.forEach(country => {
                            const city = country.cities.find(c => c.id === cid);
                            if (city) {
                                city.envs.forEach(e => envPool.push(e.prompt));
                            }
                        });
                    } else if (this.params.environment === 'random_all') {
                        this.countries.forEach(country => {
                            country.cities.forEach(city => city.envs.forEach(e => envPool.push(e.prompt)));
                        });
                    }
                }

                // --- RANDOM LIFESTYLE POOL BUILDER ---
                let actionPool = [];
                let isActionRandom = this.params.lifestyleCategory === 'random_lifestyle';
                if (isActionRandom) {
                    this.lifestyleCategories.forEach(cat => {
                        if (cat.id !== 'random_lifestyle' && cat.actions) {
                            actionPool = actionPool.concat(cat.actions);
                        }
                    });
                } else {
                    const category = this.lifestyleCategories.find(c => c.id === this.params.lifestyleCategory);
                    actionPool = category ? category.actions : this.lifestyleCategories[1].actions;
                }

                for(let i = 0; i < count; i++) {
                    // Pick Environment
                    let currentEnvPrompt = '';
                    if (this.params.environment === 'custom') {
                        currentEnvPrompt = this.params.customEnvironment;
                    } else if (isEnvRandom && envPool.length > 0) {
                        currentEnvPrompt = envPool[Math.floor(Math.random() * envPool.length)];
                    } else {
                        currentEnvPrompt = this.params.environment;
                    }

                    // Pick Action
                    let currentPrompt = '';
                    if (isActionRandom && actionPool.length > 0) {
                        currentPrompt = actionPool[Math.floor(Math.random() * actionPool.length)];
                    } else {
                        currentPrompt = actionPool[i % actionPool.length];
                    }

                    let shot = \`IMAGE \$\{i+1\}\\n\\nGenerate independently\\n\\nENVIRONMENT: \$\{currentEnvPrompt\}\\nACTION: \$\{currentPrompt\}\\n\\n\`;`;

    if (content.match(getImagesRegex)) {
        content = content.replace(getImagesRegex, newGetImages);
    } else {
        console.log("Could not match getImagesPrompt regex in " + filePath);
    }

    // 5. Add UI visual feedback for Random selection
    // In the Country button, we need it to look active if params.environment is 'random_country_' + country.id OR activeCountry
    // Actually the current UI uses activeCountry for the column expansion.
    // Let's just make the "Select Location" main button show "Randomizing [Country]"
    // Instead of doing that, the "🌍 Location Settings" button could display the active state.
    
    fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Random logic injected.");
