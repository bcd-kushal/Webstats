
// aspect ratio ======================================================
function getAspect({w,h}:{w:number,h:number}) {
    const aspect = w/h
    const gcd = (a:number, b:number):number => { return b === 0 ? a : gcd(b, a % b) }
    const divisor = gcd(w, h)
    const numerator = w / divisor
    const denominator = h / divisor
    return `${numerator}:${denominator}`
}