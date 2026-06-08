const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const parsed = new URL(req.url, 'http://localhost');
    let x = parsed.searchParams.get('x');
    let y = parsed.searchParams.get('y');
    else if(!isNatural(x) || !isNatural(y)){
        res.end('NaN');
    }
    else{
        x=BigInt(x);
        y=BigInt(y);
        res.end(String(lcm(x,y)))
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server started')
})

const gcd = (a, b) => b === 0n ? a : gcd(b, a % b);

const lcm = (a, b) => (a*b) / gcd(a,b);

const isNatural = (val) => {
    try{
        let num = BigInt(val);
        return num > 0n;
    }
    catch(err){
        return false;
    }
}