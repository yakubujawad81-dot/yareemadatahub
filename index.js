const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Yareema Data Hub | Dashboard</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    </head>
    <body class="bg-gray-50 pb-24 font-sans">
        <header class="bg-white p-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
            <div class="flex items-center space-x-2">
                <div class="bg-blue-100 p-2 rounded-lg text-blue-700"><i class="fas fa-bars"></i></div>
                <div>
                    <p class="text-[10px] text-gray-400 font-bold uppercase">Good Morning</p>
                    <h2 class="text-xs font-bold text-gray-800">Welcome back, Jawad</h2>
                </div>
            </div>
            <div class="flex space-x-4 text-gray-500">
                <i class="far fa-bell text-lg"></i>
                <i class="fas fa-sync-alt text-lg"></i>
            </div>
        </header>

        <main class="p-4 max-w-md mx-auto">
            <div class="bg-[#1e3a8a] text-white p-6 rounded-[2rem] shadow-xl mb-6 relative overflow-hidden">
                <p class="text-xs opacity-80 mb-1">Available Balance</p>
                <h2 class="text-4xl font-extrabold mb-5 flex items-center">₦500.00 <i class="far fa-eye-slash text-lg ml-3 opacity-40"></i></h2>
                
                <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center border border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="bg-white p-2 rounded-lg text-blue-900"><i class="fas fa-university text-sm"></i></div>
                        <div>
                            <p class="text-[9px] uppercase opacity-70 leading-none mb-1">Globus Bank <span class="bg-blue-400 text-white px-1 rounded ml-1">PRIMARY</span></p>
                            <p class="text-sm font-bold tracking-wider">8060279448</p>
                            <p class="text-[9px] opacity-60">YAREEMA DATA HUB LIMITED</p>
                        </div>
                    </div>
                    <button class="bg-blue-600 px-3 py-1 rounded-md text-[10px] font-bold shadow-sm">Copy</button>
                </div>
            </div>

            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-gray-800 text-sm">Quick Services</h3>
                <span class="text-blue-700 text-[10px] font-bold">View All <i class="fas fa-chevron-right ml-1"></i></span>
            </div>

            <div class="grid grid-cols-4 gap-3 mb-8">
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 mb-1"><i class="fas fa-wifi text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Buy Data</p>
                </div>
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-green-500 mb-1"><i class="fas fa-phone-alt text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Airtime</p>
                </div>
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-cyan-500 mb-1"><i class="fas fa-comments text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Bulk SMS</p>
                </div>
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-purple-500 mb-1"><i class="fas fa-sim-card text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Airtime PIN</p>
                </div>
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-yellow-500 mb-1"><i class="fas fa-lightbulb text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Electricity</p>
                </div>
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-indigo-500 mb-1"><i class="fas fa-tv text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Cable TV</p>
                </div>
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-red-500 mb-1"><i class="fas fa-graduation-cap text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Education</p>
                </div>
                <div class="text-center">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-orange-500 mb-1"><i class="fas fa-history text-lg"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">A2Cash</p>
                </div>
            </div>

            <div class="flex justify-between items-center mb-4">
                <h3 class="font-bold text-gray-800 text-sm">Recent Activity</h3>
                <span class="text-blue-700 text-[10px] font-bold uppercase">View All</span>
            </div>
            
            <div class="bg-white rounded-2xl p-4 shadow-sm border border-gray-50 flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                    <div class="bg-gray-50 p-3 rounded-full text-blue-600"><i class="fas fa-receipt"></i></div>
                    <div>
                        <p class="text-xs font-bold text-gray-800">Airtel Airtime for 0806...</p>
                        <p class="text-[9px] text-gray-400 font-medium">Just now</p>
                    </div>
                </div>
                <p class="text-xs font-bold text-red-500">-₦100.00</p>
            </div>
        </main>

        <nav class="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 pb-6 shadow-2xl z-50">
            <div class="text-center text-blue-700"><i class="fas fa-home text-lg"></i><p class="text-[9px] font-bold">Home</p></div>
            <div class="text-center text-gray-400"><i class="fas fa-list text-lg"></i><p class="text-[9px] font-bold">Services</p></div>
            <div class="text-center text-gray-400 relative">
                <div class="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center -mt-8 border-4 border-gray-50 shadow-lg"><i class="fas fa-plus text-xl"></i></div>
            </div>
            <div class="text-center text-gray-400"><i class="fas fa-wallet text-lg"></i><p class="text-[9px] font-bold">Wallet</p></div>
            <div class="text-center text-gray-400"><i class="fas fa-user text-lg"></i><p class="text-[9px] font-bold">Account</p></div>
        </nav>
    </body>
    </html>
  `);
});

module.exports = app;
