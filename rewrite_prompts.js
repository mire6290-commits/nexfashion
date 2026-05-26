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
                                        { name: 'Twin Center Business', icon: '🏢', prompt: 'Casablanca modern lifestyle, Twin Center business district crowded with professionals, real people walking in background, fast-paced urban life, candid documentary photography, natural daylight' },
                                        { name: 'Maarif Cafe Terrace', icon: '☕', prompt: 'Casablanca Maarif district, stylish youth sitting at a trendy cafe terrace, busy street with authentic locals passing by, real crowd, cosmopolitan lifestyle, cinematic warm lighting' },
                                        { name: 'Corniche Luxury Beach', icon: '🌅', prompt: 'Casablanca Corniche luxury beach club, crowded with real people sunbathing and walking, modern Moroccan coastal lifestyle, authentic background subjects, elegant summer fashion, golden hour sunset' },
                                        { name: 'Tramway Urban Snap', icon: '🚊', prompt: 'Casablanca tramway station, busy urban street crossing filled with real people, casual chic streetwear, dynamic candid lifestyle photography, authentic documentary vibe' },
                                        { name: 'Vintage Art-Deco', icon: '🏛️', prompt: 'Casablanca downtown art-deco architecture, nostalgic yet modern lifestyle, street photography with real locals in the background, moody cinematic vibe, deep shadows' }
                                    ]
                                },
                                {
                                    id: 'marrakech',
                                    name: 'Marrakech',
                                    icon: '🏜️',
                                    envs: [
                                        { name: 'Medina Motorbike', icon: '🛵', prompt: 'Marrakech Medina narrow alleys, crowded with real locals on motorbikes and pedestrians, vibrant chaotic lifestyle, authentic documentary photography, warm dusty sunlight, cinematic street photography' },
                                        { name: 'Gueliz Modern Cafe', icon: '☕', prompt: 'Trendy Gueliz district Marrakech, stylish expats and real locals chatting at a modern cafe, lively background crowd, chic bohemian lifestyle, bright natural light' },
                                        { name: 'Riad Tea Time', icon: '🍵', prompt: 'Luxury Riad courtyard, relaxed Moroccan lifestyle, real people pouring mint tea and conversing in background, slow living, elegant caftans, dappled sunlight' },
                                        { name: 'Jemaa el-Fnaa Night', icon: '🌙', prompt: 'Jemaa el-Fnaa square at night, heavily crowded with real people, vibrant food stalls, smoke rising, lively authentic street culture, cinematic moody lighting' },
                                        { name: 'Palmeraie Bohemian', icon: '🌴', prompt: 'Palmeraie Marrakech, bohemian chic lifestyle, tourists and real locals riding camels in the distance, dusty warm atmosphere, golden hour, relaxed romantic vibe' }
                                    ]
                                },
                                {
                                    id: 'tangier',
                                    name: 'Tangier',
                                    icon: '🌊',
                                    envs: [
                                        { name: 'Café Hafa Youth', icon: '☕', prompt: 'Tangier Café Hafa terrace, crowded with young intellectuals and real people drinking mint tea, bohemian expat lifestyle, sea breeze, bright sunny day, authentic documentary feel' },
                                        { name: 'Kasbah Winding Alleys', icon: '🐈', prompt: 'Tangier Kasbah white and blue walls, relaxed Mediterranean lifestyle, real locals walking, cats lounging, candid cinematic street photography, populated background' },
                                        { name: 'Marina Bay Stroll', icon: '🛥️', prompt: 'Tanger modern Marina Bay, young professionals and real tourists strolling, lively coastal promenade, luxury yachts, chic coastal summer fashion, deep blue water' },
                                        { name: 'Grand Socco Exchange', icon: '🛍️', prompt: 'Grand Socco Tangier, traditional and modern lifestyle blending, lively market exchange crowded with real people, vendors, tall palm trees, golden hour' },
                                        { name: 'Corniche Evening Walk', icon: '🌅', prompt: 'Tangier beachfront promenade at sunset, families and youth walking in large numbers, cinematic coastal evening, real background subjects, elegant casual wear' }
                                    ]
                                },
                                {
                                    id: 'chefchaouen',
                                    name: 'Chefchaouen',
                                    icon: '💙',
                                    envs: [
                                        { name: 'Blue Stairs Daily Life', icon: '🪜', prompt: 'Chefchaouen blue medina, slow mountain village lifestyle, real locals in djellabas walking up stairs, authentic populated street, vibrant contrasting colors' },
                                        { name: 'Plaza Uta el-Hammam', icon: '🏰', prompt: 'Plaza Uta el-Hammam Chefchaouen, relaxed tourist and real local lifestyle, crowded cafe terraces, sipping coffee under trees, authentic documentary vibe, golden hour' },
                                        { name: 'Ras El Ma Spring', icon: '💧', prompt: 'Ras El Ma spring Chefchaouen, traditional rural lifestyle, real women washing clothes and children playing, fresh mountain air, authentic cinematic vibe' },
                                        { name: 'Artisan Blue Alleys', icon: '🎨', prompt: 'Narrow blue alleys Chefchaouen, artisan shops displaying woven blankets, real shopkeepers and tourists interacting, intimate and colorful lifestyle photography' },
                                        { name: 'Spanish Mosque View', icon: '🌅', prompt: 'Sunset view from Spanish Mosque Chefchaouen, crowded with real people watching the sunset, panoramic golden light over the blue city, peaceful mountain lifestyle' }
                                    ]
                                },
                                {
                                    id: 'fez',
                                    name: 'Fez',
                                    icon: '🏺',
                                    envs: [
                                        { name: 'Fes el Bali Donkeys', icon: '🫏', prompt: 'Fes el Bali narrow ancient alleys, donkeys carrying goods, crowded with real locals, intense cultural immersion, authentic traditional lifestyle, documentary photography' },
                                        { name: 'Copper Souk Artisans', icon: '🔨', prompt: 'Fez artisans working in copper souks, real people hammering metal, bustling market crowd, moody cinematic lighting, rich heritage lifestyle' },
                                        { name: 'Courtyard Gathering', icon: '👨‍👩‍👧', prompt: 'Traditional Moroccan family courtyard in Fez, real people gathering and chatting, intricate zellige, rich heritage lifestyle, soft dappled sunlight, authentic lifestyle snap' },
                                        { name: 'Chouara Tannery Work', icon: '🟤', prompt: 'View over Chouara Tannery Fez, crowded with real workers treating leather, chaotic but structured traditional working lifestyle, strong colors, bright sun, documentary style' },
                                        { name: 'Ville Nouvelle Modernity', icon: '🏙️', prompt: 'Modern Fez ville nouvelle, tree-lined avenues, cafe culture, students and real people walking, modern Moroccan lifestyle, candid populated street snap' }
                                    ]
                                },
                                {
                                    id: 'agadir',
                                    name: 'Agadir',
                                    icon: '🏄',
                                    envs: [
                                        { name: 'Taghazout Surf Vibe', icon: '🌊', prompt: 'Taghazout surf culture near Agadir, laid-back beach lifestyle, real surfers and locals hanging out, VW vans, bohemian surf fashion, golden hour sunset, authentic crowd' },
                                        { name: 'Marina Luxury Living', icon: '⛵', prompt: 'Agadir Marina promenade, modern Moroccan beach resort lifestyle, crowded with real tourists and locals, luxury yachts, bright sun, chic resort fashion' },
                                        { name: 'Souk El Had Bargaining', icon: '🛍️', prompt: 'Agadir Souk El Had, massive vibrant market, heavily crowded with real locals bargaining for spices, authentic modern Moroccan lifestyle, documentary photography' },
                                        { name: 'Beachfront Volleyball', icon: '🏐', prompt: 'Agadir wide sandy beach, youth playing volleyball, real families relaxing in background, relaxed tourist atmosphere, hazy ocean mist, lifestyle photography' },
                                        { name: 'Oufella Night Drive', icon: '🌙', prompt: 'Agadir Oufella panoramic city view at night, romantic evening lifestyle, real people taking photos at the viewpoint, twinkling city lights, cinematic dark blue hour' }
                                    ]
                                },
                                {
                                    id: 'rabat',
                                    name: 'Rabat',
                                    icon: '🏛️',
                                    envs: [
                                        { name: 'Hassan Tower Tramway', icon: '🚊', prompt: 'Rabat modern tramway near Hassan Tower, blend of history and fast-paced capital lifestyle, real professionals walking by, chic business attire, authentic urban crowd' },
                                        { name: 'Parliament Professionals', icon: '💼', prompt: 'Rabat parliament district, politicians and real professionals walking in groups, clean wide streets, sophisticated urban lifestyle, documentary street photography' },
                                        { name: 'Oudayas Beach Youth', icon: '🏖️', prompt: 'Surfers and real youth hanging out at Oudayas beach Rabat, relaxed coastal lifestyle against ancient fortress walls, busy background, bright sunlight' },
                                        { name: 'Museum Art Scene', icon: '🖼️', prompt: 'Mohammed VI Museum Rabat, contemporary art scene, crowded with real sophisticated urbanites and artists, chic urban fashion, natural daylight' },
                                        { name: 'Chellah Jazz Vibe', icon: '🎷', prompt: 'Chellah ruins Rabat during a cultural festival, real crowd enjoying music, historical ruins mixed with modern evening lifestyle, moody cinematic lighting' }
                                    ]
                                },
                                {
                                    id: 'essaouira',
                                    name: 'Essaouira',
                                    icon: '🌬️',
                                    envs: [
                                        { name: 'Windy Port Fishermen', icon: '🛥️', prompt: 'Essaouira windy port, real fishermen actively unloading daily catch, busy working crowd, blue boats, seagulls, salty sea air, authentic coastal lifestyle, documentary photography' },
                                        { name: 'Kite Surf Beach', icon: '🪁', prompt: 'Essaouira wide beach, real kite surfers and locals walking dogs, sporty and bohemian lifestyle, hazy ocean mist, relaxed boho chic fashion' },
                                        { name: 'Gnawa Street Music', icon: '🎸', prompt: 'Essaouira medina squares, real Gnawa musicians playing for a lively crowd of locals and tourists, spiritual and artistic lifestyle vibe, warm glowing lanterns' },
                                        { name: 'Thuya Wood Artisans', icon: '🪚', prompt: 'Essaouira artisan shops, real craftsmen carving Thuya wood while tourists watch, slow relaxed coastal pace, bright natural light, populated lifestyle photography' },
                                        { name: 'Skala Romantic Walk', icon: '🏰', prompt: 'Essaouira Skala de la Ville ramparts, heavily crowded with real couples and tourists walking, romantic cinematic sunset over the Atlantic, dramatic lighting' }
                                    ]
                                },
                                {
                                    id: 'merzouga',
                                    name: 'Merzouga',
                                    icon: '🐪',
                                    envs: [
                                        { name: 'Berber Camel Caravan', icon: '🐫', prompt: 'Merzouga Sahara, real Berber guides leading camel caravans with tourists, deep desert lifestyle connection, sweeping wind patterns, authentic documentary photography' },
                                        { name: 'Desert Camp Stargazing', icon: '🌌', prompt: 'Luxury desert camp Merzouga, real groups of people sitting around fire pit under the Milky Way, stargazing lifestyle, bohemian luxury, lively background chatting' },
                                        { name: '4x4 Dune Bashing', icon: '🚙', prompt: 'Merzouga 4x4 dune bashing, adventurous high-energy desert lifestyle, real drivers and excited tourists, flying sand, harsh bright sunlight' },
                                        { name: 'Golden Hour Tea', icon: '🍵', prompt: 'Drinking mint tea on an Erg Chebbi sand dune, real locals serving tea to groups, golden hour sunset, relaxed desert lifestyle, authentic interactions' },
                                        { name: 'Khamlia Gnawa Culture', icon: '🥁', prompt: 'Khamlia village near Merzouga, real crowd dancing to vibrant Gnaoua music rhythms, deep cultural desert lifestyle, authentic cinematic documentary feel' }
                                    ]
                                },
                                {
                                    id: 'oujda',
                                    name: 'Oujda',
                                    icon: '🎵',
                                    envs: [
                                        { name: 'Bab Sidi Abdelouahab', icon: '🏰', prompt: 'Oujda Bab Sidi Abdelouahab, bustling evening market crowded with real locals shopping, traditional eastern Moroccan lifestyle, warm city lights, documentary street photography' },
                                        { name: 'Parc Lalla Aicha', icon: '🌳', prompt: 'Parc Lalla Aicha Oujda, peaceful afternoon walk, real families relaxing and children playing under trees, slow suburban lifestyle, soft dappled light' },
                                        { name: 'Reggada Music Street', icon: '🥁', prompt: 'Oujda old streets, Reggada folklore musicians performing for a real crowd of cheering locals, joyful dancing lifestyle, candid cultural photography, vibrant energy' },
                                        { name: 'Grand Mosque Center', icon: '🕌', prompt: 'Oujda city center near the Grand Mosque, crowded with real worshippers and pedestrians, respectful traditional lifestyle, beautiful architectural backdrop, golden hour' },
                                        { name: 'Cafe Culture', icon: '☕', prompt: 'Oujda busy boulevard cafe, heavily crowded with real men drinking strong coffee, intense conversations, lively intellectual lifestyle, natural daylight, authentic documentary vibe' }
                                    ]
                                },
                                {
                                    id: 'dakhla',
                                    name: 'Dakhla',
                                    icon: '🪁',
                                    envs: [
                                        { name: 'Lagoon Kite Surf', icon: '🏄', prompt: 'Dakhla lagoon, crowded with real dynamic kite surfers jumping and instructors, energetic beach lifestyle, bright contrasting colors, sunny sky, active background' },
                                        { name: 'White Dune Walk', icon: '🏜️', prompt: 'Dakhla white dune crashing into the ocean, real tourists walking in the distance, pristine nature, cinematic aerial perspective, authentic lifestyle' },
                                        { name: 'Oyster Farm Dining', icon: '🦪', prompt: 'Dakhla oyster farms, real groups of friends enjoying fresh seafood at crowded tables, relaxed coastal gastronomy lifestyle, late afternoon sun, lively chatting' },
                                        { name: 'Desert to Sea Road', icon: '🚙', prompt: 'Driving 4x4 along Dakhla coastal road, real road trip lifestyle with other vehicles and travelers, vast open space, warm atmospheric haze' },
                                        { name: 'Eco Lodge Sunrise', icon: '🌅', prompt: 'Dakhla wooden eco lodge, real people practicing morning yoga facing the lagoon, calm peaceful energy, soft dawn lighting, authentic background' }
                                    ]
                                },
                                {
                                    id: 'ifrane',
                                    name: 'Ifrane',
                                    icon: '❄️',
                                    envs: [
                                        { name: 'Michlifen Snow Walk', icon: '🏔️', prompt: 'Ifrane Michlifen snow forest, winter lifestyle, real families and couples playing in the snow, wearing thick stylish winter coats, romantic snowy walk, bright alpine light' },
                                        { name: 'University Campus', icon: '🎓', prompt: 'Al Akhawayn University Ifrane, modern student lifestyle, crowded with real students walking with books under red-roofed buildings, crisp mountain air, candid documentary' },
                                        { name: 'Lion Statue Park', icon: '🦁', prompt: 'Ifrane city center near the lion stone statue, heavily crowded with real families taking pictures, relaxed tourist lifestyle, European architecture, lively atmosphere' },
                                        { name: 'Chalet Fireplace', icon: '🔥', prompt: 'Cozy wooden chalet in Ifrane, real groups of friends drinking hot chocolate by the fireplace, luxurious winter cabin lifestyle, warm interior glow, lively interactions' },
                                        { name: 'Vittel Water Spring', icon: '💧', prompt: 'Ain Vittel spring Ifrane, lush green forest picnic, crowded with real Moroccan families having picnics, relaxed outdoor lifestyle, cinematic nature photography' }
                                    ]
                                },
                                {
                                    id: 'meknes',
                                    name: 'Meknes',
                                    icon: '🐎',
                                    envs: [
                                        { name: 'Bab Mansour Grandeur', icon: '🏛️', prompt: 'Bab Mansour gate Meknes, vast historic scale, heavily crowded with real locals and tourists walking in foreground, majestic heritage lifestyle, deep afternoon shadows, documentary photography' },
                                        { name: 'Heri es-Souani Granaries', icon: '🌾', prompt: 'Inside Heri es-Souani Meknes, massive stone arches, real tourists exploring in the background, cinematic moody lighting piercing through windows, mysterious historical vibe' },
                                        { name: 'El Hedim Square', icon: '🎪', prompt: 'Place El Hedim Meknes, lively evening crowd, real street performers surrounded by large groups of people, authentic traditional Moroccan lifestyle, vibrant sunset' },
                                        { name: 'Volubilis Ruins Stroll', icon: '🏛️', prompt: 'Volubilis Roman ruins near Meknes, exploring ancient pillars, crowded with real guided tour groups, educational tourist lifestyle, bright clear blue sky' },
                                        { name: 'Royal Stables', icon: '🐴', prompt: 'Meknes Royal Stables, aristocratic equestrian lifestyle, real riders with horses training, majestic atmospheric lighting, dust in the air, authentic documentary feel' }
                                    ]
                                },
                                {
                                    id: 'asilah',
                                    name: 'Asilah',
                                    icon: '🎨',
                                    envs: [
                                        { name: 'Mural Art Medina', icon: '🖌️', prompt: 'Asilah white medina walls covered in colorful murals, artistic bohemian lifestyle, real artists painting and tourists taking photos, creative energy, bright contrasting colors' },
                                        { name: 'Ocean Ramparts', icon: '🌊', prompt: 'Asilah Portuguese ramparts overlooking the Atlantic, windy coastal lifestyle, real people walking and sitting on the walls, deep blue ocean, cinematic dramatic clouds' },
                                        { name: 'Summer Festival Vibe', icon: '🎉', prompt: 'Asilah Arts Festival, vibrant thick crowd of real artists and locals interacting, cultural summer lifestyle, festive street atmosphere, golden hour' },
                                        { name: 'Quiet Blue Alleys', icon: '🚶', prompt: 'Asilah narrow quiet alleys with blue accents, slow tranquil lifestyle, real local residents walking by, beautiful shadows playing on white walls, candid street snap' },
                                        { name: 'Seafood Port', icon: '🐟', prompt: 'Asilah small fishing port, crowded with real people eating fresh seafood by the water, relaxed Mediterranean coastal lifestyle, authentic candid street photography' }
                                    ]
                                }
                            ]
                        }`;

    const regex = /\{\s*id:\s*'morocco'[\s\S]*?id:\s*'france'/m;
    content = content.replace(regex, newMorocco + ',\n                        {\n                            id: \'france\'');

    fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Updated environments with real people crowds successfully.");
