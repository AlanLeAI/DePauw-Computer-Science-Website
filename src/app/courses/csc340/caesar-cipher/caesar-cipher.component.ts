import { Component } from '@angular/core';

@Component({
  selector: 'app-caesar-cipher',
  templateUrl: './caesar-cipher.component.html',
  styleUrls: ['./caesar-cipher.component.css']
})
export class CaesarCipherComponent {
  plainText = '';
  shiftValue = 0;
  cipherText = '';

  encrypt() {
    this.cipherText = this.shift(this.plainText, this.shiftValue);
  }

  decrypt() {
    this.cipherText = this.shift(this.cipherText, -this.shiftValue);
  }
  shift(text: string, shift: number) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const alphabetUpper = alphabet.toUpperCase();

    let result = '';
    for (const char of text) {
      const charLower = char.toLowerCase();
      if (alphabet.indexOf(charLower) === -1) {
        result += char;
        continue;
      }

      const shiftAlphabet = char === charLower ? alphabet : alphabetUpper;
      const shiftedIndex = (alphabet.indexOf(charLower) + shift + alphabet.length) % alphabet.length;
      result += shiftAlphabet[shiftedIndex];
    }

    return result;
  }
}
