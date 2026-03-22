const express = require('express');
const app = express();

// Home route - tana dauke da dukkan Forms (Register/Login/PIN)
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

        <div id="register-card" class="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl transition-all border border-blue-50">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-extrabold text-blue-700">Create Account</h1>
                <p class="text-gray-400 text-sm italic">Yareema Data Hub & Services Ltd</p>
            </div>
            <div class="space-y-4">
                <input type="text" placeholder="Full Name" class="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <input type="email" placeholder="Email Address" class="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <input type="password" placeholder="Create Password" class="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <input type="number" placeholder="Set 4-Digit PIN" class="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none focus:ring-2 focus:ring-blue-500">
                <button onclick="showLogin()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold hover:bg-blue-800 shadow-lg">Register Now</button>
            </div>
            <p class="text-center mt-6 text-sm text-gray-500">Already have an account? <span onclick="showLogin()" class="text-blue-700 font-bold cursor-pointer underline">Login</span></p>
        </div>

        <div id="login-card" class="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl hidden">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-extrabold text-blue-700">Welcome Back</h1>
                <p class="text-gray-400 text-sm">Sign in to continue</p>
            </div>
            <div class="space-y-4">
                <input type="email" placeholder="Email Address" class="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none">
                <input type="password" placeholder="Password" class="w-full p-4 bg-gray-50 border border-gray-200 rounded-2xl outline-none">
                <button onclick="showPin()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold">Login</button>
            </div>
            <p class="text-center mt-6 text-sm text-gray-500 italic font-bold">Yareema Data Hub</p>
        </div>

        <div id="pin-card" class="bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl hidden text-center border-t-4 border-blue-700">
            <div class="mb-6 text-blue-700 text-5xl"><i class="fas fa-shield-alt"></i></div>
            <h1 class="text-xl font-bold text-gray-800">Security PIN</h1>
            <p class="text-gray-400 text-sm mb-8 italic">Enter your 4-digit transaction PIN</p>
            <div class="flex justify-center space-x-3 mb-8">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border-2 rounded-xl focus:border-blue-500 outline-none bg-gray-50">
            </div>
            <button onclick="window.location.href='/dashboard'" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold">Unlock Dashboard</button>
        </div>

        <script>
            function showLogin() {
                document.getElementById('register-card').classList.add('hidden');
                document.getElementById('login-card').classList.remove('hidden');
            }
            function showPin() {
                document.getElementById('login-card').classList.add('hidden');
                document.getElementById('pin-card').classList.remove('hidden');
            }
        </script>
    </body>
    </html>
  `);
});

// Dashboard route - wannan ne asalin kyan aikin
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
        <header class="bg-white p-4 flex justify-between items-center shadow-sm sticky top-0 z-50 rounded-b-2xl">
            <div class="flex items-center space-x-2">
                <div class="bg-blue-100 p-2 rounded-xl text-blue-700"><i class="fas fa-user-circle"></i></div>
                <div>
                    <p class="text-[10px] text-gray-400 font-bold uppercase leading-none">Hello,</p>
                    <h2 class="text-xs font-bold text-gray-800">Jawad Yakubu</h2>
                </div>
            </div>
            <div class="flex space-x-4 text-gray-400"><i class="far fa-bell text-lg"></i><i class="fas fa-cog text-lg"></i></div>
        </header>

        <main class="p-4 max-w-md mx-auto">
            <div class="bg-[#1e3a8a] text-white p-6 rounded-[2.5rem] shadow-xl mb-6 relative overflow-hidden border-b-4 border-blue-500">
                <p class="text-xs opacity-80 mb-1">Available Balance</p>
                <h2 class="text-4xl font-extrabold mb-5 flex items-center tracking-tight">₦500.00 <i class="far fa-eye text-lg ml-3 opacity-30"></i></h2>
                
                <div class="bg-white/10 backdrop-blur-md p-4 rounded-3xl flex justify-between items-center border border-white/20">
                    <div class="flex items-center space-x-3">
                        <div class="bg-white p-2 rounded-xl text-blue-900 shadow-sm"><i class="fas fa-university text-sm"></i></div>
                        <div>
                            <p class="text-[9px] uppercase opacity-70 leading-none mb-1">Globus Bank (Automated)</p>
                            <p class="text-sm font-bold tracking-wider leading-none">8060279448</p>
                            <p class="text-[8px] opacity-60 mt-1 uppercase">Yareema Data Hub Limited</p>
                        </div>
                    </div>
                    <button class="bg-blue-500 px-3 py-1 rounded-lg text-[10px] font-bold border border-white/20 shadow-lg active:scale-90">Copy</button>
                </div>
            </div>

            <h3 class="font-bold text-gray-800 text-sm mb-4 px-1">Main Services</h3>
            <div class="grid grid-cols-4 gap-4 mb-8">
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-blue-500 mb-1 border border-gray-100"><i class="fas fa-wifi text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">Data</p></div>
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-green-500 mb-1 border border-gray-100"><i class="fas fa-phone-alt text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">Airtime</p></div>
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-yellow-500 mb-1 border border-gray-100"><i class="fas fa-lightbulb text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">Electric</p></div>
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-indigo-500 mb-1 border border-gray-100"><i class="fas fa-tv text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">Cable</p></div>
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-red-500 mb-1 border border-gray-100"><i class="fas fa-graduation-cap text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">Exam</p></div>
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-purple-500 mb-1 border border-gray-100"><i class="fas fa-print text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">Print Card</p></div>
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-cyan-500 mb-1 border border-gray-100"><i class="fas fa-comments text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">Bulk SMS</p></div>
                <div class="text-center"><div class="bg-white aspect-square rounded-2xl shadow-sm flex items-center justify-center text-gray-400 mb-1 border border-gray-100"><i class="fas fa-ellipsis-h text-xl"></i></div><p class="text-[9px] font-bold text-gray-500">More</p></div>
            </div>

            <div class="flex justify-between items-center mb-4 px-1">
                <h3 class="font-bold text-gray-800 text-sm">Recent Activity</h3>
                <span class="text-blue-700 text-[10px] font-bold">History</span>
            </div>
            <div class="bg-white rounded-3xl p-4 shadow-sm border border-gray-100 flex items-center justify-between mb-3">
                <div class="flex items-center space-x-3">
                    <div class="bg-blue-50 p-3 rounded-2xl text-blue-600"><i class="fas fa-arrow-down text-xs"></i></div>
                    <div>
                        <p class="text-xs font-bold text-gray-800 italic">Wallet Funded</p>
                        <p class="text-[9px] text-gray-400">Via Globus Bank • Success</p>
                    </div>
                </div>
                <p class="text-xs font-bold text-green-500">+₦500.00</p>
            </div>
        </main>

        <nav class="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around p-3 pb-8 shadow-2xl z-50 rounded-t-[2.5rem]">
            <div class="text-center text-blue-700"><i class="fas fa-home text-xl"></i><p class="text-[9px] font-bold uppercase">Home</p></div>
            <div class="text-center text-gray-400"><i class="fas fa-wallet text-xl"></i><p class="text-[9px] font-bold uppercase">Wallet</p></div>
            <div class="text-center relative"><div class="bg-blue-700 text-white w-12 h-12 rounded-full flex items-center justify-center -mt-9 border-4 border-gray-50 shadow-xl"><i class="fas fa-plus text-xl"></i></div></div>
            <div class="text-center text-gray-400"><i class="fas fa-history text-xl"></i><p class="text-[9px] font-bold uppercase">History</p></div>
            <div class="text-center text-gray-400"><i class="fas fa-user text-xl"></i><p class="text-[9px] font-bold uppercase">Profile</p></div>
        </nav>
    </body>
    </html>
  `);
});

// DO NOT USE app.listen() FOR VERCEL
module.exports = app;
