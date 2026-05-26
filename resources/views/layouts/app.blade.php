<!DOCTYPE html>
<html lang="en" class="dark">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NexiFashion - Cinematic AI Studio</title>
    <!-- Tailwind CSS (CDN for demo, replace with Vite in production) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap" rel="stylesheet">
    
    <script>
        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        serif: ['Playfair Display', 'serif'],
                    },
                    colors: {
                        brand: {
                            50: '#f4f6fc',
                            100: '#e5ebf8',
                            200: '#c5d3ef',
                            300: '#95b1e1',
                            400: '#5f88ce',
                            500: '#3b6ab9',
                            600: '#2b5198',
                            700: '#23417c',
                            800: '#203767',
                            900: '#1e3057',
                            950: '#0b1326',
                        },
                        lux: {
                            gold: '#D4AF37',
                            silver: '#C0C0C0',
                            dark: '#0A0A0A'
                        }
                    },
                    backgroundImage: {
                        'cinematic': 'radial-gradient(circle at 50% 0%, #1e3057 0%, #0b1326 50%, #000000 100%)',
                    }
                }
            }
        }
    </script>
    
    <style>
        body {
            background-color: #050505;
            color: #ffffff;
        }
        .glass-panel {
            background: rgba(255, 255, 255, 0.03);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }
        .glass-panel:hover {
            border-color: rgba(255, 255, 255, 0.15);
            background: rgba(255, 255, 255, 0.05);
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
            width: 6px;
            height: 6px;
        }
        ::-webkit-scrollbar-track {
            background: rgba(0, 0, 0, 0.2); 
        }
        ::-webkit-scrollbar-thumb {
            background: rgba(255, 255, 255, 0.1); 
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: rgba(255, 255, 255, 0.2); 
        }

        .animate-float {
            animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    </style>
</head>
<body class="antialiased min-h-screen bg-cinematic bg-fixed font-sans text-gray-200">

    <!-- Top Navigation -->
    <nav class="fixed w-full z-50 glass-panel border-b-0 border-t-0 border-x-0">
        <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex items-center">
                    <div class="flex-shrink-0 flex items-center gap-3">
                        <div class="w-8 h-8 rounded-full bg-gradient-to-tr from-lux-gold to-yellow-200 shadow-[0_0_15px_rgba(212,175,55,0.4)]"></div>
                        <span class="font-serif text-xl font-bold tracking-widest text-white uppercase">Nexi<span class="text-lux-gold">Fashion</span></span>
                    </div>
                    <div class="hidden md:ml-10 md:flex md:space-x-8">
                        <a href="#" class="text-white border-b-2 border-lux-gold px-1 pt-1 text-sm font-medium transition-colors">Studio</a>
                        <a href="#" class="text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 text-sm font-medium transition-colors">Gallery</a>
                        <a href="#" class="text-gray-400 hover:text-white border-b-2 border-transparent hover:border-gray-300 px-1 pt-1 text-sm font-medium transition-colors">Models</a>
                    </div>
                </div>
                <div class="flex items-center space-x-4">
                    <div class="text-sm text-gray-400">Tokens: <span class="text-lux-gold font-semibold">1,240</span></div>
                    <div class="h-8 w-8 rounded-full bg-brand-800 border border-brand-600 flex items-center justify-center text-xs font-bold cursor-pointer hover:ring-2 ring-lux-gold transition-all">
                        AD
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main class="pt-20 pb-10">
        @yield('content')
    </main>

</body>
</html>
