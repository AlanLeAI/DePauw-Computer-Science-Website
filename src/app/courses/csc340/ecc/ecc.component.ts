// import { Component, OnInit } from '@angular/core';
// import * as crypto from 'crypto';

// @Component({
//   selector: 'app-ecc',
//   templateUrl: './ecc.component.html',
//   styleUrls: ['./ecc.component.css']
// })

// export class EccComponent{
//   public ec: crypto.ECDH= crypto.createECDH('secp256k1');
//   const privateKeyBuffer = this.ec.generateKeys();
//   const privateKeyHexString = privateKeyBuffer.toString('hex');

//   this.privateKey = {
//     type: 'pk',
//     data: Buffer.from(privateKeyHexString, 'hex'),
//     // Add the required properties
//     export: true,
//     type: 'secp256k1'
//   };
  
//   private publicKey: crypto.KeyObject = this.ec.getPublicKey();

//   public message: string = '';
//   public publicKeyText: string = '';
//   public privateKeyText: string = '';
//   public encryptedMessage: string = '';

//   constructor() { }

//   ngOnInit(): void {

//     this.publicKeyText = this.publicKey.toString('hex');
//     this.privateKeyText = this.privateKey.toString('hex');
//   }

//   encryptMessage(): void {
//     if (!this.message) {
//       return;
//     }

//     const remotePublicKey = crypto.createECDH('secp256k1');
//     remotePublicKey.setKey(new crypto.KeyObject({
//       type: 'pk',
//       data: Buffer.from(this.message, 'hex')
//     }));

//     const sharedSecret = remotePublicKey.computeSecret(this.privateKey);
//     const cipher = crypto.createCipheriv('aes256', sharedSecret, Buffer.alloc(16, 0));
//     const encryptedMessage = cipher.update(this.message) + cipher.final();
//     this.encryptedMessage = encryptedMessage.toString('hex');
//   }

//   decryptMessage(): void {
//     if (!this.encryptedMessage) {
//       return;
//     }

//     const sharedSecret = this.ec.computeSecret(crypto.createECDH('secp256k1').setKey({
//       type: 'pk',
//       data: Buffer.from(this.encryptedMessage, 'hex')
//     }));

//     const decipher = crypto.createDecipheriv('aes256', sharedSecret, Buffer.alloc(16, 0));
//     const decryptedMessage = decipher.update(Buffer.from(this.encryptedMessage, 'hex')) + decipher.final();
//     this.message = decryptedMessage.toString('utf8');
//   }
// }
