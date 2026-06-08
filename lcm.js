const express = require('express')
const app = express()

const gcd = (a, b) => b === 0n ? a : gcd(b, a % b);
const lcm = (a, b) => (a / gcd(a, b)) * b;

const isNatural = (val) => {
    try {
        const num = BigInt(val);
        return num > 0n;
    } catch {
        return false;
    }
}

app.get('/serzhansrsnbv_gmail_com', (req, res) => {
    const xRaw = req.query.x;
    const yRaw = req.query.y;
    if (!isNatural(xRaw) || !isNatural(yRaw)) {
        res.send('NaN');
    } else {
        const x = BigInt(xRaw);
        const y = BigInt(yRaw);
        res.send(String(lcm(x, y)));
    }
})

app.listen(process.env.PORT || 3000, () => {
    console.log('Server started')
})