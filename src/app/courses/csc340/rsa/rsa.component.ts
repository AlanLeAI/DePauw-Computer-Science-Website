import { Component, OnInit } from '@angular/core';
import * as bigInt from 'big-integer';

@Component({
  selector: 'app-rsa',
  templateUrl: './rsa.component.html',
  styleUrls: ['./rsa.component.css']
})
export class RsaComponent implements OnInit{
  p: number = 3;
  q: number = 7;
  message: string = 'hello';
  result: string = '';
  memory: any[] = []

  ngOnInit(){
    this.generateKeys()
  }

  // Public key
  e: bigInt.BigInteger = bigInt(0);
  n: bigInt.BigInteger = bigInt(0);

  // Private key
  d: bigInt.BigInteger = bigInt(0);

  // Generate keys
  generateKeys() {
    const p = bigInt(this.p);
    const q = bigInt(this.q);
    const phi = p.subtract(1).multiply(q.subtract(1)); // Euler's totient function
    this.n = p.multiply(q); // Compute modulus
    this.e = bigInt(this.choose(parseInt(phi.toString()))); // Choose public exponent
    this.d = this.modeinv(this.e, phi); // Compute modular multiplicative inverse of e mod phi
    console.log(phi.toString())
    console.log(this.n.toString());
    console.log(this.e.toString());
    console.log(this.d.toString());
  }

  modeinv(e: any, phi: any){
    let temp = e.modInv(phi)
    let res = bigInt(0)
    if(temp.toString() == e.toString()){
      res = temp.add(phi)
    }
    return res
  }

  choose(phi: number){
    for(let i = 2; i < phi ; i++){
      if(this.gcd(i,phi) == 1){
        return i;
      }
    }
    return 0;
  }

  gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }

  // Encrypt message
  encrypt() {
    this.memory = []
    let result = '';
    for (let i = 0; i < this.message.length; i++) {
      const m = bigInt(this.message.charCodeAt(i)-32); // Convert character to integer (subtract 32 to limit the range of characters)
      console.log(m)
      const c = m.modPow(this.e, this.n); // Encrypt character using public key
      let mint = m.toJSNumber()
      let nint = this.n.toJSNumber()
      this.memory.push(Math.floor(mint/nint))
      result += c.toString() + ' '; // Add encrypted character to result (separated by space)
    }
    this.result = result.trim(); // Trim the last space
  }

  // Decrypt message
  decrypt() {
    const ciphertextArray = this.result.trim().split(' ');
    console.log(this.memory)
    // Get array of ciphertext integers from input
    let message = '';
    for (let i = 0; i < ciphertextArray.length; i++) {
      const c = bigInt(ciphertextArray[i]); // Get ciphertext integer
      let m = c.modPow(this.d, this.n)
      let temp = m.toJSNumber()
      for(let j = 1; j <= this.memory[i]; j++){
        temp += this.n.toJSNumber()
      }
      m = bigInt(temp)
      console.log(m)
      console.log(m.toJSNumber())
      message += String.fromCharCode(m.toJSNumber()+32); // Convert decrypted integer to character (add 32 to undo the subtraction in encryption)
    }
    this.result = message.trim(); // Trim the decrypted message
  }
}
