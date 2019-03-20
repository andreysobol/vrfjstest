const {utils, ecvrf, sortition} = require('vrf.js')
const X = Buffer.from("00000000000000000009214fe51ec7c750826ef82e5d692e3ae6a052dd4a67fe", "hex")

const [publicKey, privateKey] = utils.generatePair()

const {value, proof} = ecvrf.vrf(publicKey, privateKey, X)

if(ecvrf.verify(publicKey, X, proof, value)){
    console.log("Priv:")
    console.log(privateKey.toString('hex'))
    console.log("Pub:")
    console.log(publicKey.toString('hex'))
    console.log("Value")
    console.log(value.toString('hex'))
}
