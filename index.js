const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Yareema Data Hub | Welcome</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <style>
            .hero-bg { background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); }
        </style>
    </head>
    <body class="bg-gray-50 font-sans">
        <nav class="bg-white shadow-md p-4">
            <div class="container mx-auto flex justify-between items-center">
                <h1 class="text-2xl font-bold text-blue-700">Yareema Data Hub</h1>
                <div class="space-x-4">
                    <a href="#" class="text-gray-600 font-medium hover:text-blue-700">Login</a>
                    <a href="#" class="bg-blue-700 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-800">Sign Up</a>
                </div>
            </div>
        </nav>

        <section class="hero-bg text-white py-20 px-6 text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4">Sayan Data da Airtime cikin Sauki</h2>
            <p class="text-lg mb-8 opacity-90">Muna ba ku damar sayan Data, Airtime, da biyan Bills akan farashi mafi rahusa a Nigeria.</p>
            <div class="flex justify-center space-x-4">
                <button class="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold shadow-lg">Fara Yanzu</button>
                <button class="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition">Farashinmu</button>
            </div>
        </section>

        <section class="container mx-auto py-16 px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
                    <div class="text-blue-600 text-4xl mb-4">📶</div>
                    <h3 class="text-xl font-bold mb-2">Mafi Saukin Data</h3>
                    <p class="text-gray-600 italic text-sm">Sami MTN, GLO, Airtel, da 9mobile SME & Gifting data akan farashi mai kyau.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
                    <div class="text-blue-600 text-4xl mb-4">💳</div>
                    <h3 class="text-xl font-bold mb-2">Airtime Top-up</h3>
                    <p class="text-gray-600 italic text-sm">Tura katin waya nan take zuwa kowane layi ba tare da bata lokaci ba.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-md transition">
                    <div class="text-blue-600 text-4xl mb-4">💡</div>
                    <h3 class="text-xl font-bold mb-2">Biyan Bills</h3>
                    <p class="text-gray-600 italic text-sm">Biyan wutar lantarki (AEDC, JED, etc) da kudin TV kamar DSTV, GOTV & Startimes.</p>
                </div>
            </div>
        </section>

        <footer class="bg-gray-900 text-gray-400 py-10 text-center">
            <p>&copy; 2026 Yareema Data Hub - Developed by Jawad Yakubu</p>
        </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('Server is running');
});
