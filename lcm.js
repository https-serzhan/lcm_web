const http = require('http')
const url = require('url')

const server = http.createServer((req, res) => {
    const parsed = new URL(req.url, 'http://localhost');
    let x = Number(parsed.searchParams.get('x'));
    let y = Number(parsed.searchParams.get('y'));
    if (parsed.pathname !== '/serzhansrsnbv_gmail_com') {
        res.end('404')
    }
    else if(!isNatural(x) || !isNatural(y)){
        res.end('NaN');
    }
    else{
        res.end(String(lcm(x,y)))
    }
})

server.listen(process.env.PORT || 3000, () => {
    console.log('Server started')
})

const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

const lcm = (a, b) => (a*b) / gcd(a,b);

const isNatural = (val) => {
    let num = Number(val);
    if(isNaN(num)) return false;
    if(num <= 0) return false;
    if(num%1 !== 0) return false;
    return true;
}