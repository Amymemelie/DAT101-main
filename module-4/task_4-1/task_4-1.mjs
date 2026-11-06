"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};

const AccountType = {
  Normal: "Brukskonto",
  Saving: "Sparekonto",
  Credit: "Kredittkonto",
  Pension: "Pensionkonto" 
}



class TAccount{
  #type;
  #balance;
  #withdrawCount;
  #currencyType;

  constructor(aType){
    this.#type = aType;
    this.#balance = 0.0;
    this.#withdrawCount = 0;
    this.#currencyType = CurrencyTypes.NOK;

  }
  #currencyConvert(aType){
    return CurrencyTypes.NOK.value/ this.#currencyType.value * aType.value;
  }

  toString(){
    return this.#type
  }

  setType(aType){
    printOut(`Kontotype endre fra ${this.type}til ${aType}`);
    this.#type = aType;
  }

  getBalance(){
    return this.#balance;
  }

  deposit(aAmount, aType = CurrencyTypes.NOK){
    const NewAmount = aAmount / this.#currencyConvert(aType);
    this.#balance += aAmount;
    this.#withdrawCount = 0;
    const den = this.#currencyType.denomination;
    const txtbalance = this.#balance.toFixed(2);
    printOut(`innskudd av ${aAmount}${aType.name}, ny saldo ${this.#balance}${den}`);
  }

  withdraw(aAmount, aType){
    if(aType === undefined){
      aType = CurrencyTypes.NOK;
    }
    let canWithdraw = true;
    switch(this.#type){
      case AccountType.Pension:
        canWithdraw = false;
        printout("Du kan ikke ta ut fra pensionkonto");
        break;
      case AccountType.Saving:
        if (this.#withdrawCount >= 3 ){
          canWithdraw = false
          printOut("Du kan ikke ta ut mer enn tre ganger fra en sparekonto");
        }
        break;
    }
    if(canWithdraw === true){
    const newAmount = aAmount / this.#currencyConvert(aType);
    this.#balance -= aAmount;
    this.#withdrawCount++;
    const den = this.#currencyType.denomination
    printOut(`uttak av ${aAmount}${den}, nysaldo er ${this.#balance}${den}`)
    }
  }

  setCurrencyType(aType){
    if (aType === this.#currencyType){
      return;
    }
    console.log(this.#currencyType)
    printOut(`Kontovaluta endret fra ${this.#currencyType.name} til ${aType.name}`);
    this.#currencyType = aType;
    this.#balance /= this.#currencyConvert(aType);
    const txtBalance = this.#balance.toFixed(2);
    printOut(`ny saldo er: ${txtBalance}${this.#currencyType.denomination}`);
  }

   


}

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
const accountTypeKeys = Object.keys(AccountType);
printOut(accountTypeKeys.toString())

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");

const myAccount = new TAccount(AccountType.Normal);
printOut(`myAccount = ${myAccount.toString()}`);
myAccount.setType(AccountType.Saving);

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");

myAccount.deposit(100);
myAccount.withdraw(25);
printOut(`Min konto har ${myAccount.getBalance}`)

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
myAccount.deposit(25);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);

printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");

myAccount.deposit(150);

printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");

myAccount.setCurrencyType(CurrencyTypes.SEK);


printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");

myAccount.deposit(12, CurrencyTypes.USD)
myAccount.withdraw(10, CurrencyTypes.GBP)
myAccount.setCurrencyType(CurrencyTypes.CAD)
myAccount.setCurrencyType(CurrencyTypes.INR)
myAccount.withdraw(150)


printOut(newLine);
