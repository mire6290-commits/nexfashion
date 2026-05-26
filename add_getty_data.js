const fs = require('fs');

const gettyCities = `
                                {
                                    id: 'getty_riad',
                                    name: 'Getty: Riad & Interior',
                                    icon: '🏡',
                                    envs: [
                                        { name: 'Family Tagine Meal', icon: '🍲', prompt: 'Inside a traditional home, multi-generational Moroccan family sitting together around a dining table sharing a hot tagine meal, warm family lifestyle, authentic documentary photography, populated background' },
                                        { name: 'Riad Alcove Relaxing', icon: '🛋️', prompt: 'Relaxing on a built-in cushion seat in an alcove decorated with blue zellij mosaic tiles, peaceful riad interior lifestyle, authentic documentary photography, natural light' },
                                        { name: 'Riad Patio Laptop', icon: '💻', prompt: 'Working on a laptop while sitting on a sunlit balcony patio with ornate white railings, palm plants, and zellij tiles, modern Moroccan remote work lifestyle, authentic documentary' },
                                        { name: 'Courtyard Mint Tea', icon: '🍵', prompt: 'Traditional riad courtyard with columns, a waiter serving Moroccan mint tea from a silver teapot on a silver brass tray to a couple sitting on low chairs, luxurious hospitality lifestyle, authentic documentary' },
                                        { name: 'Pouring Mint Tea', icon: '🫖', prompt: 'Older Moroccan man wearing a light djellaba, meticulously pouring Moroccan mint tea from a silver teapot held high into small glass cups on a brass tray, inside a cozy plaster room with red cushions, authentic documentary' },
                                        { name: 'Bellman with Luggage', icon: '🛎️', prompt: 'Hotel bellman wearing a traditional red Fez hat pushing a golden brass luggage trolley through a lush sun-drenched riad courtyard, luxury hospitality lifestyle, authentic documentary' },
                                        { name: 'Zellij Fountain Aerial', icon: '⛲', prompt: 'High-angle top-down view walking across a highly intricate yellow-and-blue zellij pattern floor in a riad courtyard, with a small central fountain containing floating flowers, authentic documentary' },
                                        { name: 'Rustic Hostel Room', icon: '🛏️', prompt: 'Relaxing on twin beds inside a rustic, stone-walled hostel room, checking smartphones, cozy travel lifestyle, authentic documentary' },
                                        { name: 'Grandfather Serving Feast', icon: '🥖', prompt: 'Older Moroccan grandfather in an orange wool djellaba standing up to serve tajine and fresh bread to his family sitting around a large dining table, warm family feast, authentic documentary' }
                                    ]
                                },
                                {
                                    id: 'getty_souk',
                                    name: 'Getty: Souk & Medina',
                                    icon: '🏺',
                                    envs: [
                                        { name: 'Spice & Olive Stall', icon: '🫒', prompt: 'Narrow bustling souk alley, merchant looking at large conical mounds of colorful spices (paprika, cumin, turmeric) and big bowls of green and black olives, vibrant market lifestyle, authentic documentary, crowd' },
                                        { name: 'Gnawa Street Musician', icon: '🪕', prompt: 'Narrow medina alley in Fes or Marrakech, an older street musician playing traditional Gnawa music, crowd of real locals watching, cultural lifestyle, authentic documentary' },
                                        { name: 'Carpet Boutique Shopping', icon: '🧶', prompt: 'Rustic Moroccan rug boutique surrounded by massive stacks of colorful woven Berber carpets, talking with a local shop owner, vibrant shopping lifestyle, authentic documentary' },
                                        { name: 'Souk Walk under Rugs', icon: '🚶', prompt: 'Walking through a narrow souk corridor while looking at beautiful hand-woven colorful Moroccan carpets hanging on both sides of the walls, warm sunlight, authentic documentary, populated background' },
                                        { name: 'Canopy Alley Sunbeams', icon: '🌞', prompt: 'Quiet, authentic medina alley covered with a traditional arched wooden latticed canopy roof allowing sunbeams to filter through, slow travel lifestyle, cinematic lighting, authentic documentary' },
                                        { name: 'Blue Village Remote Work', icon: '💙', prompt: 'Working on a laptop while sitting outside in a street surrounded by traditional white-washed and blue painted buildings in Chefchaouen, modern nomad lifestyle, authentic documentary' }
                                    ]
                                },
                                {
                                    id: 'getty_street',
                                    name: 'Getty: Street & Nature',
                                    icon: '📸',
                                    envs: [
                                        { name: 'Rooftop Lantern Dining', icon: '🍽️', prompt: 'Medina rooftop terrace overlooking the city at dusk, friends laughing, talking, and dining under warm hanging brass lanterns, cinematic evening lifestyle, authentic documentary, social crowd' },
                                        { name: 'Nomad Camel Caravan', icon: '🐪', prompt: 'Nomad wearing a traditional blue Tagelmust turban leading a caravan of camels over orange Sahara sand dunes, deep desert lifestyle, harsh sunlight, authentic documentary' },
                                        { name: 'Rooftop Juice Social', icon: '🍹', prompt: 'Trendy medina rooftop restaurant with brass lanterns, group of young friends laughing, looking at a phone screen, and drinking fresh juices, vibrant social lifestyle, authentic documentary' },
                                        { name: 'Kasbah Ramparts Ocean', icon: '🌊', prompt: 'Walking along historic stone ramparts overlooking the ocean at Kasbah des Oudayas, peaceful coastal lifestyle, blue sky, authentic documentary, passing locals' },
                                        { name: 'Fishermen Knitting Nets', icon: '🎣', prompt: 'Moroccan fishermen sitting on the concrete ground in the Essaouira port in traditional warm weather gear, carefully mending massive red fishing nets with wood tools, working lifestyle, authentic documentary' },
                                        { name: 'Desert Fairy Light Dinner', icon: '✨', prompt: 'Authentic dinner sitting cross-legged on a large colorful patterned Berber rug spread directly on the sand dunes, with low tables, surrounded by warm string lights at sunset, authentic documentary' },
                                        { name: 'Hot Air Balloon Selfie', icon: '🎈', prompt: 'Floating in a hot air balloon over the arid, rugged Moroccan mountains, capturing a selfie with a phone as the sun rises, adventurous travel lifestyle, authentic documentary' }
                                    ]
                                },`;

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // Find the Morocco country object
    const casablancaIndex = content.indexOf("{", content.indexOf("id: 'casablanca'"));
    
    if (casablancaIndex > -1 && !content.includes("Getty: Riad & Interior")) {
        // Insert the getty cities right before casablanca
        const insertPos = content.lastIndexOf("{", casablancaIndex - 1);
        content = content.slice(0, insertPos) + gettyCities + "\n" + content.slice(insertPos);
        fs.writeFileSync(filePath, content, 'utf8');
        console.log("Updated " + filePath);
    } else {
        console.log("Skipped " + filePath + " (already added or not found)");
    }
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Done");
