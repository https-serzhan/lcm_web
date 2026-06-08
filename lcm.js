const http = require('http')

const server = http.createServer((req, res) => {
    const parsed = new URL(req.url, 'http://localhost');
    const xRaw = parsed.searchParams.get('x');
    const yRaw = parsed.searchParams.get('y');
    if(!isNatural(xRaw) || !isNatural(yRaw)){
        res.end('NaN');
    }
    else{
        const x = BigInt(xRaw);
        const y = BigInt(yRaw);
        res.end(String(lcm(x, y)))
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server started')
})

const gcd = (a, b) => b === 0n ? a : gcd(b, a % b);

const lcm = (a, b) => (a * b) / gcd(a, b);

const isNatural = (val) => {
    try{
        const num = BigInt(val);
        return num > 0n;
    }
    catch(err){
        return false;
    }
}