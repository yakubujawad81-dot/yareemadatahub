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
        <title>Yareema Data Hub | Login</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
            .hidden { display: none; }
        </style>
    </head>
    <body class="bg-gray-100 font-sans h-screen flex items-center justify-center p-4">

        <div id="register-card" class="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-extrabold text-blue-700">Create Account</h1>
                <p class="text-gray-400 text-sm">Join Yareema Data Hub today</p>
            </div>
            <div class="space-y-4">
                <input type="text" placeholder="Full Name" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-blue-500">
                <input type="email" placeholder="Email Address" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-blue-500">
                <input type="password" placeholder="Create Password" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-blue-500">
                <input type="number" placeholder="Set 4-Digit PIN" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-blue-500">
                <button onclick="showLogin()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold hover:bg-blue-800 transition">Register Now</button>
            </div>
            <p class="text-center mt-6 text-sm text-gray-500">Already have an account? <span onclick="showLogin()" class="text-blue-700 font-bold cursor-pointer">Login</span></p>
        </div>

        <div id="login-card" class="bg-white w-full max-w-md p-8 rounded-3xl shadow-2xl hidden">
            <div class="text-center mb-8">
                <h1 class="text-2xl font-extrabold text-blue-700">Welcome Back</h1>
                <p class="text-gray-400 text-sm">Enter your details to login</p>
            </div>
            <div class="space-y-4">
                <input type="email" id="login-email" placeholder="Email Address" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-blue-500">
                <input type="password" id="login-pass" placeholder="Password" class="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-blue-500">
                <button onclick="showPin()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold hover:bg-blue-800 transition">Login</button>
            </div>
            <p class="text-center mt-6 text-sm text-gray-500">Don't have an account? <span onclick="showRegister()" class="text-blue-700 font-bold cursor-pointer">Register</span></p>
        </div>

        <div id="pin-card" class="bg-white w-full max-w-sm p-8 rounded-3xl shadow-2xl hidden text-center">
            <div class="mb-6 text-blue-700 text-4xl"><i class="fas fa-lock"></i></div>
            <h1 class="text-xl font-bold text-gray-800">Enter Security PIN</h1>
            <p class="text-gray-400 text-sm mb-8">Confirm your identity</p>
            <div class="flex justify-center space-x-3 mb-8">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border rounded-xl focus:border-blue-500 outline-none bg-gray-50">
                <input type="password" maxlength="1" class="w-12 h-12 text-center text-2xl font-bold border rounded-xl focus:border-blue-500 outline-none bg-gray-50">
            </div>
            <button onclick="goToDashboard()" class="w-full bg-blue-700 text-white p-4 rounded-2xl font-bold hover:bg-blue-800 transition">Unlock & Enter</button>
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

app.get('/dashboard', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send(\`
        \`);
});

module.exports = app;
