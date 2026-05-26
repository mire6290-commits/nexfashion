const fs = require('fs');

function updateFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');

    // 1. Add Copy Result button next to Regenerate
    const regenerateBtn = `<button @click="randomize()" class="text-xs bg-white/5 hover:bg-white/10 border border-white/10 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                            Regenerate
                        </button>`;
                        
    const replacementBtns = `<button @click="copyPrompt()" class="text-xs bg-lux-gold/10 hover:bg-lux-gold/20 text-lux-gold border border-lux-gold/30 px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 font-semibold">
                            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                            Copy Result
                        </button>
                        ` + regenerateBtn;
                        
    if(content.includes(regenerateBtn) && !content.includes('Copy Result')) {
        content = content.replace(regenerateBtn, replacementBtns);
    }

    // 2. Extract Location Mega Menu and move it to the top
    const regexExtract = /(?:<!-- Location & Light Engine -->|<!-- Location & Light Engine \/ Mega Menu -->)\s*<div class="space-y-3">\s*<!-- Mega Menu Dropdown -->[\s\S]*?(?=\s*(?:<div class="flex flex-col gap-2 mt-4 pt-4 border-t border-white\/10">|<!-- Sequence Settings -->))/;
    
    let match = content.match(regexExtract);
    if(match) {
        let megaMenuHTML = match[0];
        // Remove it from current location
        content = content.replace(match[0], '');
        
        // Remove the old "Select Location" title and "space-y-3" wrapper so it can be a full width bar
        // We will make it sleek and full width
        megaMenuHTML = megaMenuHTML.replace('<label class="text-[10px] text-gray-400 block uppercase tracking-wider flex items-center gap-2">\n                                        <span class="w-3 h-[1px] bg-lux-gold"></span> Select Location\n                                    </label>', '');
        
        // Let's create the final HTML
        const topMenuHTML = `
            <!-- Global Mega Menu -->
            <div class="w-full mb-6 relative z-50">
                ${megaMenuHTML}
            </div>
`;
        // Insert right above the columns wrapper
        const columnsWrapperStr = `<div class="flex flex-col lg:flex-row gap-6 h-[calc(100vh-7rem)]">`;
        if(content.includes(columnsWrapperStr) && !content.includes('<!-- Global Mega Menu -->')) {
            content = content.replace(columnsWrapperStr, topMenuHTML + '\n            ' + columnsWrapperStr);
        }
    }

    fs.writeFileSync(filePath, content, 'utf8');
}

updateFile('resources/views/prompt-builder/index.blade.php');
updateFile('preview.html');

console.log("Moved mega menu and added copy button successfully.");
