const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(`
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
                    <a href="#" class="bg-blue-700 text-white px-5 py-2 rounded-full font-bold hover:bg-blue-800 transition">Sign Up</a>
                </div>
            </div>
        </nav>

        <section class="hero-bg text-white py-20 px-6 text-center">
            <h2 class="text-4xl md:text-5xl font-extrabold mb-4 uppercase tracking-tight">Affordable Data & Airtime</h2>
            <p class="text-lg mb-8 opacity-90 max-w-2xl mx-auto">Purchase high-speed data, airtime top-ups, and pay utility bills at the most affordable rates in Nigeria.</p>
            <div class="flex justify-center space-x-4">
                <button class="bg-white text-blue-700 px-8 py-3 rounded-lg font-bold shadow-lg hover:bg-gray-100 transition">Get Started</button>
                <button class="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-blue-700 transition">View Pricing</button>
            </div>
        </section>

        <section class="container mx-auto py-16 px-6">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition">
                    <div class="text-blue-600 text-5xl mb-4">📶</div>
                    <h3 class="text-xl font-bold mb-2">Cheap Data</h3>
                    <p class="text-gray-500 text-sm">Instant activation for MTN, GLO, AIRTEL, and 9MOBILE SME & Gifting data.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition">
                    <div class="text-blue-600 text-5xl mb-4">💳</div>
                    <h3 class="text-xl font-bold mb-2">Airtime Top-up</h3>
                    <p class="text-gray-500 text-sm">Recharge your phone instantly with our automated VTU services.</p>
                </div>
                <div class="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition">
                    <div class="text-blue-600 text-5xl mb-4">💡</div>
                    <h3 class="text-xl font-bold mb-2">Utility Bills</h3>
                    <p class="text-gray-500 text-sm">Pay Electricity bills and Cable TV subscriptions (DSTV, GOTV & Startimes).</p>
                </div>
            </div>
        </section>

        <footer class="bg-gray-900 text-gray-400 py-10 text-center">
            <div class="container mx-auto px-6">
                <p class="mb-2 font-bold text-white">Yareema Data Hub</p>
                <p class="text-sm">&copy; 2026. All Rights Reserved. Developed by Jawad Yakubu.</p>
            </div>
        </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log('Server is running on port ' + port);
});
