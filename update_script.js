const fs = require('fs');

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Replace countries array
    const newMorocco = `                        {
                            id: 'morocco',
                            name: 'Morocco',
                            icon: '🇲🇦',
                            cities: [
                                {
                                    id: 'casablanca',
                                    name: 'Casablanca',
                                    icon: '🌆',
                                    envs: [
                                        { name: 'Twin Center Business', icon: '🏢', prompt: 'Casablanca modern lifestyle, Twin Center business district, professionals in chic streetwear, fast-paced urban life, natural daylight' },
                                        { name: 'Maarif Cafe Terrace', icon: '☕', prompt: 'Casablanca Maarif district, stylish youth sitting at a trendy cafe terrace, cosmopolitan lifestyle, cinematic warm lighting' },
                                        { name: 'Corniche Luxury Beach', icon: '🌅', prompt: 'Casablanca Corniche luxury beach club, modern Moroccan coastal lifestyle, elegant summer fashion, golden hour sunset' },
                                        { name: 'Tramway Urban Snap', icon: '🚊', prompt: 'Casablanca tramway station, busy urban street crossing, casual chic streetwear, dynamic candid lifestyle photography' },
                                        { name: 'Vintage Art-Deco', icon: '🏛️', prompt: 'Casablanca downtown art-deco architecture, nostalgic yet modern lifestyle, moody cinematic street photography, deep shadows' }
                                    ]
                                },
                                {
                                    id: 'marrakech',
                                    name: 'Marrakech',
                                    icon: '🏜️',
                                    envs: [
                                        { name: 'Medina Motorbike', icon: '🛵', prompt: 'Marrakech Medina narrow alleys, locals on motorbikes, vibrant chaotic lifestyle, warm dusty sunlight, cinematic street photography' },
                                        { name: 'Gueliz Modern Cafe', icon: '☕', prompt: 'Trendy Gueliz district Marrakech, stylish expats and locals at a modern cafe, chic bohemian lifestyle, bright natural light' },
                                        { name: 'Riad Tea Time', icon: '🍵', prompt: 'Luxury Riad courtyard, relaxed Moroccan lifestyle, pouring mint tea, slow living, elegant caftans, dappled sunlight' },
                                        { name: 'Jemaa el-Fnaa Night', icon: '🌙', prompt: 'Jemaa el-Fnaa square at night, vibrant food stalls, smoke rising, lively street culture, cinematic moody lighting' },
                                        { name: 'Palmeraie Bohemian', icon: '🌴', prompt: 'Palmeraie Marrakech, bohemian chic lifestyle, dusty warm atmosphere, golden hour, relaxed romantic vibe' }
                                    ]
                                },
                                {
                                    id: 'tangier',
                                    name: 'Tangier',
                                    icon: '🌊',
                                    envs: [
                                        { name: 'Café Hafa Youth', icon: '☕', prompt: 'Tangier Café Hafa terrace, young intellectuals drinking mint tea, bohemian expat lifestyle, sea breeze, bright sunny day' },
                                        { name: 'Kasbah Winding Alleys', icon: '🐈', prompt: 'Tangier Kasbah white and blue walls, relaxed Mediterranean lifestyle, cats lounging, candid cinematic street photography' },
                                        { name: 'Marina Bay Stroll', icon: '🛥️', prompt: 'Tanger modern Marina Bay, young professionals strolling, luxury yachts, chic coastal summer fashion, deep blue water' },
                                        { name: 'Grand Socco Exchange', icon: '🛍️', prompt: 'Grand Socco Tangier, traditional and modern lifestyle blending, lively market exchange, tall palm trees, golden hour' },
                                        { name: 'Corniche Evening Walk', icon: '🌅', prompt: 'Tangier beachfront promenade at sunset, families and youth walking, cinematic coastal evening, elegant casual wear' }
                                    ]
                                },
                                {
                                    id: 'chefchaouen',
                                    name: 'Chefchaouen',
                                    icon: '💙',
                                    envs: [
                                        { name: 'Blue Stairs Daily Life', icon: '🪜', prompt: 'Chefchaouen blue medina, slow mountain village lifestyle, locals in djellabas walking, vibrant contrasting colors' },
                                        { name: 'Plaza Uta el-Hammam', icon: '🏰', prompt: 'Plaza Uta el-Hammam Chefchaouen, relaxed tourist and local lifestyle, sipping coffee under trees, golden hour' },
                                        { name: 'Ras El Ma Spring', icon: '💧', prompt: 'Ras El Ma spring Chefchaouen, traditional rural lifestyle, washing clothes, fresh mountain air, authentic cinematic vibe' },
                                        { name: 'Artisan Blue Alleys', icon: '🎨', prompt: 'Narrow blue alleys Chefchaouen, artisan shops displaying woven blankets, intimate and colorful lifestyle photography' },
                                        { name: 'Spanish Mosque View', icon: '🌅', prompt: 'Sunset view from Spanish Mosque Chefchaouen, panoramic golden light over the blue city, peaceful mountain lifestyle' }
                                    ]
                                },
                                {
                                    id: 'fez',
                                    name: 'Fez',
                                    icon: '🏺',
                                    envs: [
                                        { name: 'Fes el Bali Donkeys', icon: '🫏', prompt: 'Fes el Bali narrow ancient alleys, donkeys carrying goods, intense cultural immersion, authentic traditional lifestyle' },
                                        { name: 'Copper Souk Artisans', icon: '🔨', prompt: 'Fez artisans working in copper souks, rhythmic hammering, moody cinematic lighting, rich heritage lifestyle' },
                                        { name: 'Courtyard Gathering', icon: '👨‍👩‍👧', prompt: 'Traditional Moroccan family courtyard in Fez, intricate zellige, rich heritage lifestyle, soft dappled sunlight' },
                                        { name: 'Chouara Tannery Work', icon: '🟤', prompt: 'View over Chouara Tannery Fez, chaotic but structured traditional leather working lifestyle, strong colors, bright sun' },
                                        { name: 'Ville Nouvelle Modernity', icon: '🏙️', prompt: 'Modern Fez ville nouvelle, tree-lined avenues, cafe culture, students and modern Moroccan lifestyle, candid snap' }
                                    ]
                                },
                                {
                                    id: 'agadir',
                                    name: 'Agadir',
                                    icon: '🏄',
                                    envs: [
                                        { name: 'Taghazout Surf Vibe', icon: '🌊', prompt: 'Taghazout surf culture near Agadir, laid-back beach lifestyle, VW vans, bohemian surf fashion, golden hour sunset' },
                                        { name: 'Marina Luxury Living', icon: '⛵', prompt: 'Agadir Marina promenade, modern Moroccan beach resort lifestyle, luxury yachts, bright sun, chic resort fashion' },
                                        { name: 'Souk El Had Bargaining', icon: '🛍️', prompt: 'Agadir Souk El Had, massive vibrant market, locals bargaining for spices, authentic modern Moroccan lifestyle' },
                                        { name: 'Beachfront Volleyball', icon: '🏐', prompt: 'Agadir wide sandy beach, youth playing volleyball, relaxed tourist atmosphere, hazy ocean mist, lifestyle photography' },
                                        { name: 'Oufella Night Drive', icon: '🌙', prompt: 'Agadir Oufella panoramic city view at night, romantic evening lifestyle, twinkling city lights, cinematic dark blue hour' }
                                    ]
                                },
                                {
                                    id: 'rabat',
                                    name: 'Rabat',
                                    icon: '🏛️',
                                    envs: [
                                        { name: 'Hassan Tower Tramway', icon: '🚊', prompt: 'Rabat modern tramway near Hassan Tower, blend of history and fast-paced capital lifestyle, chic business attire' },
                                        { name: 'Parliament Professionals', icon: '💼', prompt: 'Rabat parliament district, politicians and professionals walking, clean wide streets, sophisticated urban lifestyle' },
                                        { name: 'Oudayas Beach Youth', icon: '🏖️', prompt: 'Surfers and youth at Oudayas beach Rabat, relaxed coastal lifestyle against ancient fortress walls, bright sunlight' },
                                        { name: 'Museum Art Scene', icon: '🖼️', prompt: 'Mohammed VI Museum Rabat, contemporary art scene, sophisticated urbanites, chic urban fashion, natural daylight' },
                                        { name: 'Chellah Jazz Vibe', icon: '🎷', prompt: 'Chellah ruins Rabat during a cultural festival, historical ruins mixed with modern evening lifestyle, moody cinematic lighting' }
                                    ]
                                },
                                {
                                    id: 'essaouira',
                                    name: 'Essaouira',
                                    icon: '🌬️',
                                    envs: [
                                        { name: 'Windy Port Fishermen', icon: '🛥️', prompt: 'Essaouira windy port, fishermen unloading daily catch, blue boats, seagulls, salty sea air, authentic coastal lifestyle' },
                                        { name: 'Kite Surf Beach', icon: '🪁', prompt: 'Essaouira wide beach, kite surfers, sporty and bohemian lifestyle, hazy ocean mist, relaxed boho chic fashion' },
                                        { name: 'Gnawa Street Music', icon: '🎸', prompt: 'Essaouira medina squares, Gnawa musicians playing, spiritual and artistic lifestyle vibe, warm glowing lanterns' },
                                        { name: 'Thuya Wood Artisans', icon: '🪚', prompt: 'Essaouira artisan shops, carving Thuya wood, slow relaxed coastal pace, bright natural light, lifestyle photography' },
                                        { name: 'Skala Romantic Walk', icon: '🏰', prompt: 'Essaouira Skala de la Ville ramparts, couples walking, romantic cinematic sunset over the Atlantic, dramatic lighting' }
                                    ]
                                },
                                {
                                    id: 'merzouga',
                                    name: 'Merzouga',
                                    icon: '🐪',
                                    envs: [
                                        { name: 'Berber Camel Caravan', icon: '🐫', prompt: 'Merzouga Sahara, Berber guides leading camel caravans, deep desert lifestyle connection, sweeping wind patterns' },
                                        { name: 'Desert Camp Stargazing', icon: '🌌', prompt: 'Luxury desert camp Merzouga, sitting around fire pit under the Milky Way, stargazing lifestyle, bohemian luxury' },
                                        { name: '4x4 Dune Bashing', icon: '🚙', prompt: 'Merzouga 4x4 dune bashing, adventurous and high-energy desert lifestyle, flying sand, harsh bright sunlight' },
                                        { name: 'Golden Hour Tea', icon: '🍵', prompt: 'Drinking mint tea on an Erg Chebbi sand dune, golden hour sunset, complete silence and peace, relaxed desert lifestyle' },
                                        { name: 'Khamlia Gnawa Culture', icon: '🥁', prompt: 'Khamlia village near Merzouga, vibrant Gnaoua music rhythms, deep cultural desert lifestyle, authentic cinematic feel' }
                                    ]
                                },
                                {
                                    id: 'oujda',
                                    name: 'Oujda',
                                    icon: '🎵',
                                    envs: [
                                        { name: 'Bab Sidi Abdelouahab', icon: '🏰', prompt: 'Oujda Bab Sidi Abdelouahab, bustling evening market, traditional eastern Moroccan lifestyle, warm city lights' },
                                        { name: 'Parc Lalla Aicha', icon: '🌳', prompt: 'Parc Lalla Aicha Oujda, peaceful afternoon walk, families relaxing under trees, slow suburban lifestyle, soft dappled light' },
                                        { name: 'Reggada Music Street', icon: '🥁', prompt: 'Oujda old streets, Reggada folklore musicians, joyful dancing lifestyle, candid cultural photography, vibrant energy' },
                                        { name: 'Grand Mosque Center', icon: '🕌', prompt: 'Oujda city center near the Grand Mosque, respectful traditional lifestyle, beautiful architectural backdrop, golden hour' },
                                        { name: 'Cafe Culture', icon: '☕', prompt: 'Oujda busy boulevard cafe, drinking strong coffee, intense conversations, lively intellectual lifestyle, natural daylight' }
                                    ]
                                },
                                {
                                    id: 'dakhla',
                                    name: 'Dakhla',
                                    icon: '🪁',
                                    envs: [
                                        { name: 'Lagoon Kite Surf', icon: '🏄', prompt: 'Dakhla lagoon, dynamic kite surfers jumping, energetic beach lifestyle, bright contrasting colors, sunny sky' },
                                        { name: 'White Dune Walk', icon: '🏜️', prompt: 'Dakhla white dune crashing into the ocean, solitary reflective lifestyle walk, pristine nature, cinematic aerial perspective' },
                                        { name: 'Oyster Farm Dining', icon: '🦪', prompt: 'Dakhla oyster farms, friends enjoying fresh seafood, relaxed coastal gastronomy lifestyle, late afternoon sun' },
                                        { name: 'Desert to Sea Road', icon: '🚙', prompt: 'Driving 4x4 along Dakhla coastal road, adventurous road trip lifestyle, vast open space, warm atmospheric haze' },
                                        { name: 'Eco Lodge Sunrise', icon: '🌅', prompt: 'Dakhla wooden eco lodge, morning yoga lifestyle facing the lagoon, calm peaceful energy, soft dawn lighting' }
                                    ]
                                },
                                {
                                    id: 'ifrane',
                                    name: 'Ifrane',
                                    icon: '❄️',
                                    envs: [
                                        { name: 'Michlifen Snow Walk', icon: '🏔️', prompt: 'Ifrane Michlifen snow forest, winter lifestyle, wearing thick stylish winter coats, romantic snowy walk, bright alpine light' },
                                        { name: 'University Campus', icon: '🎓', prompt: 'Al Akhawayn University Ifrane, modern student lifestyle, walking with books under red-roofed buildings, crisp mountain air' },
                                        { name: 'Lion Statue Park', icon: '🦁', prompt: 'Ifrane city center near the lion stone statue, families taking pictures, relaxed tourist lifestyle, European architecture' },
                                        { name: 'Chalet Fireplace', icon: '🔥', prompt: 'Cozy wooden chalet in Ifrane, drinking hot chocolate by the fireplace, luxurious winter cabin lifestyle, warm interior glow' },
                                        { name: 'Vittel Water Spring', icon: '💧', prompt: 'Ain Vittel spring Ifrane, lush green forest picnic, relaxed outdoor Moroccan family lifestyle, cinematic nature photography' }
                                    ]
                                },
                                {
                                    id: 'meknes',
                                    name: 'Meknes',
                                    icon: '🐎',
                                    envs: [
                                        { name: 'Bab Mansour Grandeur', icon: '🏛️', prompt: 'Bab Mansour gate Meknes, vast historic scale, locals walking in foreground, majestic heritage lifestyle, deep afternoon shadows' },
                                        { name: 'Heri es-Souani Granaries', icon: '🌾', prompt: 'Inside Heri es-Souani Meknes, massive stone arches, cinematic moody lighting piercing through windows, mysterious historical vibe' },
                                        { name: 'El Hedim Square', icon: '🎪', prompt: 'Place El Hedim Meknes, lively evening crowd, street performers, authentic traditional Moroccan lifestyle, vibrant sunset' },
                                        { name: 'Volubilis Ruins Stroll', icon: '🏛️', prompt: 'Volubilis Roman ruins near Meknes, exploring ancient pillars, educational tourist lifestyle, bright clear blue sky' },
                                        { name: 'Royal Stables', icon: '🐴', prompt: 'Meknes Royal Stables, aristocratic equestrian lifestyle, horse riding, majestic atmospheric lighting, dust in the air' }
                                    ]
                                },
                                {
                                    id: 'asilah',
                                    name: 'Asilah',
                                    icon: '🎨',
                                    envs: [
                                        { name: 'Mural Art Medina', icon: '🖌️', prompt: 'Asilah white medina walls covered in colorful murals, artistic bohemian lifestyle, creative energy, bright contrasting colors' },
                                        { name: 'Ocean Ramparts', icon: '🌊', prompt: 'Asilah Portuguese ramparts overlooking the Atlantic, windy coastal lifestyle, deep blue ocean, cinematic dramatic clouds' },
                                        { name: 'Summer Festival Vibe', icon: '🎉', prompt: 'Asilah Arts Festival, vibrant crowd of artists and locals, cultural summer lifestyle, festive atmosphere, golden hour' },
                                        { name: 'Quiet Blue Alleys', icon: '🚶', prompt: 'Asilah narrow quiet alleys with blue accents, slow tranquil lifestyle, beautiful shadows playing on white walls' },
                                        { name: 'Seafood Port', icon: '🐟', prompt: 'Asilah small fishing port, eating fresh seafood by the water, relaxed Mediterranean coastal lifestyle, authentic candid snap' }
                                    ]
                                }
                            ]
                        }`;

    const regex = /\{\s*id:\s*'morocco'[\s\S]*?id:\s*'france'/m;
    content = content.replace(regex, newMorocco + ',\n                        {\n                            id: \'france\'');

    // 2. Vehicles Lock update
    const oldVehicles = /Black Mercedes G-Class[\s\S]*?ALWAYS include at least one of these vehicles in the generated sequence\./m;
    const newVehicles = `Black Mercedes G-Class OR White Porsche 718 Boxster

Cars realistic
Background depth realistic
IMPORTANT: The vehicle MUST ONLY appear in EXACTLY ONE IMAGE (e.g. arriving or leaving).
DO NOT include the vehicle in the other images. Keep the rest of the images focused purely on the character and environment.`;
    content = content.replace(oldVehicles, newVehicles);

    // 3. Make sure the left panel copy button is present
    if(filePath.includes('preview.html') && !content.includes('>Copy Prompt</button>')) {
        content = content.replace('<!-- Sequence Settings -->', `
                            <div class="flex flex-col gap-2 mt-4 pt-4 border-t border-white/10">
                                <button @click="copyPrompt()" class="w-full bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-xl text-sm font-medium transition-all flex justify-center items-center gap-2 border border-white/10">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                                    Copy Prompt
                                </button>
                                <button class="w-full bg-gradient-to-r from-lux-gold to-yellow-500 text-black px-6 py-2.5 rounded-xl text-sm font-bold transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_30px_rgba(212,175,55,0.5)] transform hover:-translate-y-0.5 flex justify-center items-center gap-2">
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                                    Generate in API
                                </button>
                            </div>
                            
                            <!-- Sequence Settings -->`);
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Updated both files successfully.");
