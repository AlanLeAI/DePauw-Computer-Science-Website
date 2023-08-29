import { Component,OnInit } from '@angular/core';
// import { AngularFirestore } from '@angular/fire/firestore';
// import * as eccrypto from 'eccrypto';

@Component({
  selector: 'app-ecc',
  templateUrl: './ecc.component.html',
  styleUrls: ['./ecc.component.css']
})

export class EccComponent{
  plaintext: string = '';
  publicKey: string = '';
  encrypted: string = '';

  // encryptedMessage: string = '';
  // decryptedMessage: string = '';

  // private privateKey: Uint8Array;
  // private publicKey: Uint8Array;

  // constructor() {
  //   // Generate an ECC key pair
  //   eccrypto.generatePrivate().then((privateKey) => {
  //     this.privateKey = privateKey;
  //     this.publicKey = eccrypto.getPublic(privateKey);
  //   });
  // }

  async encrypt() {
    // const publicKey = eccrypto.getPublic(Buffer.from(this.publicKey, 'hex'));
    // const message = Buffer.from(this.plaintext);
    // const encrypted = await eccrypto.encrypt(publicKey, message);
    // this.encrypted = encrypted.toString('hex');

    // // Convert the message to a buffer
    // const messageBuffer = Buffer.from(this.message);

    // // Encrypt the message with the recipient's public key
    // const encrypted = await eccrypto.encrypt(this.publicKey, messageBuffer);

    // // Convert the encrypted data to a string
    // this.encryptedMessage = JSON.stringify(encrypted);
  }

  async decrypt() {
    // const privateKey = Buffer.from('private key goes here', 'hex');
    // const encrypted = Buffer.from(this.encrypted, 'hex');
    // const decrypted = await eccrypto.decrypt(privateKey, encrypted);
    // this.plaintext = decrypted.toString();

    // // Parse the encrypted data from a string
    // const encrypted = JSON.parse(this.encryptedMessage);

    // // Decrypt the message with the recipient's private key
    // const decryptedBuffer = await eccrypto.decrypt(this.privateKey, encrypted);

    // // Convert the decrypted buffer to a string
    // this.decryptedMessage = decryptedBuffer.toString();
  }
}
