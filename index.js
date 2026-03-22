const express = require('express');
const app = express();

// Main Route (Login/Register/PIN Screen)
app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Yareema Data Hub | Secure Access</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>.hidden { display: none; }</style>
    </head>
    <body class="bg-gray-100 font-sans h-screen flex items-center justify-center p-4">

        <div id="register-card" class="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-extrabold text-blue-700">Create Account</h1>
                <p class="text-gray-400 text-sm">Join Yareema Data Hub today</p>
            </div>
            <div class="space-y-4">
                <input type="text" placeholder="Full Name" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <input type="email" placeholder="Email Address" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <input type="password" placeholder="Create Password" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <input type="number" placeholder="Set 4-Digit PIN" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <button onclick="showLogin()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-lg">Register Now</button>
            </div>
            <p class="text-center mt-6 text-sm text-gray-500">Already have an account? <span onclick="showLogin()" class="text-blue-700 font-bold cursor-pointer underline">Login</span></p>
        </div>

        <div id="login-card" class="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl hidden">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-extrabold text-blue-700 text-center uppercase tracking-wider">Welcome Back</h1>
                <p class="text-gray-400 text-sm text-center">Login to your dashboard</p>
            </div>
            <div class="space-y-4">
                <input type="email" placeholder="Email Address" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <input type="password" placeholder="Password" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <button onclick="showPin()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-lg">Login</button>
            </div>
            <p class="text-center mt-6 text-sm text-gray-500">Don't have an account? <span onclick="showRegister()" class="text-blue-700 font-bold cursor-pointer underline">Register</span></p>
        </div>

        <div id="pin-card" class="bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl hidden text-center">
            <div class="mb-6 text-blue-700 text-5xl"><i class="fas fa-shield-alt"></i></div>
            <h1 class="text-xl font-bold text-gray-800">Security PIN</h1>
            <p class="text-gray-400 text-sm mb-8">Confirm your 4-digit PIN</p>
            <div class="flex justify-center space-x-3 mb-8">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
            </div>
            <button onclick="goToDashboard()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold hover:bg-blue-800 transition shadow-lg">Unlock Dashboard</button>
        </div>

        <script>
            function showLogin() {
                document.getElementById('register-card').classList.add('hidden');
                document.getElementById('pin-card').classList.add('hidden');
                document.getElementById('login-card').classList.remove('hidden');
            }
            function showRegister() {
                document.getElementById('login-card').classList.add('hidden');
                document.getElementById('register-card').classList.remove('hidden');
            }
            function showPin() {
                document.getElementById('login-card').classList.add('hidden');
                document.getElementById('pin-card').classList.remove('hidden');
            }
            function goToDashboard() {
                window.location.href = '/dashboard';
            }
        </script>
    </body>
    </html>
  `);
});

// Dashboard Route
app.get('/dashboard', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dashboard | Yareema Data Hub</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    </head>
    <body class="bg-gray-50 pb-24 font-sans">
        <header class="bg-white p-4 flex justify-between items-center shadow-sm sticky top-0 z-50">
            <div class="flex items-center space-x-2">
                <div class="bg-blue-100 p-2 rounded-lg text-blue-700"><i class="fas fa-bars"></i></div>
                <div>
                    <p class="text-[10px] text-gray-400 font-bold uppercase leading-none">Good Morning</p>
                    <h2 class="text-xs font-bold text-gray-800">Welcome back, Jawad</h2>
                </div>
            </div>
            <div class="flex space-x-4 text-gray-500"><i class="far fa-bell text-lg"></i><i class="fas fa-sync-alt text-lg"></i></div>
        </header>

        <main class="p-4 max-w-md mx-auto">
            <div class="bg-[#1e3a8a] text-white p-6 rounded-[2.5rem] shadow-xl mb-6 relative overflow-hidden">
                <p class="text-xs opacity-80 mb-1">Available Balance</p>
                <h2 class="text-4xl font-extrabold mb-5 flex items-center tracking-tight">₦500.00 <i class="far fa-eye-slash text-lg ml-3 opacity-40"></i></h2>
                <div class="bg-white/10 backdrop-blur-md p-4 rounded-2xl flex justify-between items-center border border-white/10">
                    <div class="flex items-center space-x-3">
                        <div class="bg-white p-2 rounded-lg text-blue-900 shadow-sm"><i class="fas fa-university text-sm"></i></div>
                        <div>
                            <p class="text-[9px] uppercase opacity-70 leading-none mb-1">Globus Bank <span class="bg-blue-400 text-white px-1 rounded ml-1">PRIMARY</span></p>
                            <p class="text-sm font-bold tracking-wider leading-none">8060279448</p>
                            <p class="text-[9px] opacity-60 mt-1">YAREEMA DATA HUB LIMITED</p>
                        </div>
                    </div>
                    <button class="bg-blue-600 px-3 py-1 rounded-md text-[10px] font-bold shadow-sm border border-white/20">Copy</button>
                </div>
            </div>

            <div class="flex justify-between items-center mb-4 px-1">
                <h3 class="font-bold text-gray-800 text-sm">Quick Services</h3>
                <span class="text-blue-700 text-[10px] font-bold uppercase tracking-wide">View All <i class="fas fa-chevron-right ml-1 text-[8px]"></i></span>
            </div>

            <div class="grid grid-cols-4 gap-3 mb-8">
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-blue-500 mb-1 transition group-active:scale-95"><i class="fas fa-wifi text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Buy Data</p>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-green-500 mb-1 transition group-active:scale-95"><i class="fas fa-phone-alt text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Airtime</p>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-cyan-500 mb-1 transition group-active:scale-95"><i class="fas fa-comments text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Bulk SMS</p>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-purple-500 mb-1 transition group-active:scale-95"><i class="fas fa-sim-card text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Airtime PIN</p>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-yellow-500 mb-1 transition group-active:scale-95"><i class="fas fa-lightbulb text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Electricity</p>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-indigo-500 mb-1 transition group-active:scale-95"><i class="fas fa-tv text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Cable TV</p>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-red-500 mb-1 transition group-active:scale-95"><i class="fas fa-graduation-cap text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">Education</p>
                </div>
                <div class="text-center group cursor-pointer">
                    <div class="bg-white aspect-square rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-orange-500 mb-1 transition group-active:scale-95"><i class="fas fa-history text-xl"></i></div>
                    <p class="text-[9px] font-bold text-gray-500">A2Cash</p>
                </div>
            </div>

            <div class="flex justify-between items-center mb-4 px-1">
                <h3 class="font-bold text-gray-800 text-sm">Recent Activity</h3>
                <span class="text-blue-700 text-[10px] font-bold uppercase tracking-wide">History</span>
            </div>
            
            <div class="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                    <div class="bg-gray-100 p-3 rounded-2xl text-blue-600"><i class="fas fa-receipt"></i></div>
                    <div>
                        <p class="text-xs font-bold text-gray-800">Airtel Airtime for 0806...</p>
                        <p class="text-[9px] text-gray-400 font-medium">Just now • Success</p>
                    </div>
                </div>
                <p class="text-xs font-bold text-red-500">-₦100.00</p>
            </div>
        </main>

        <nav class="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 pb-8 shadow-2xl z-50 rounded-t-[2rem]">
            <div class="text-center text-blue-700 active:scale-90 transition"><i class="fas fa-home text-xl"></i><p class="text-[9px] font-bold">Home</p></div>
            <div class="text-center text-gray-400 active:scale-90 transition"><i class="fas fa-list text-xl"></i><p class="text-[9px] font-bold">Services</p></div>
            <div class="text-center relative">
                <div class="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center -mt-9 border-4 border-gray-50 shadow-blue-200 shadow-xl active:scale-95 transition"><i class="fas fa-plus text-xl"></i></div>
            </div>
            <div class="text-center text-gray-400 active:scale-90 transition"><i class="fas fa-wallet text-xl"></i><p class="text-[9px] font-bold">Wallet</p></div>
            <div class="text-center text-gray-400 active:scale-90 transition"><i class="fas fa-user text-xl"></i><p class="text-[9px] font-bold">Account</p></div>
        </nav>
    </body>
    </html>
  `);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server is running on port ' + PORT));
