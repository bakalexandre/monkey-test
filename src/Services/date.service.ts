import { Injectable } from "@nestjs/common";

@Injectable()
export class DateService {
  getRomanDate(arabicDate): string {
    var response =
      this.convertToRoman(arabicDate.getDate()) +
      '.' +
      this.convertToRoman(arabicDate.getMonth() + 1) +
      '.' +
      this.convertToRoman(arabicDate.getFullYear());

    return response;
  }

  convertToRoman(num) {
    //Correspondance des chiffres romains
    const roman = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };

    var str = '';

    //Pour chaque chiffre romain définit
    for (var i of Object.keys(roman)) {
      //On récupère le nombre de fois que le chiffre apparait
      var q = Math.floor(num / roman[i]);
      //On soustrait ce qu'on a déjà traduit
      num -= q * roman[i];
      //On ajoute le chiffre romain *q
      str += i.repeat(q);
    }

    return str;
  }
}
