import { Transaction } from "./Transaction.js";
import { TypeCompte } from "./TypeCompte.js";
import { TypeTransaction } from "./TypeTransaction.js";

export class Compte {
    constructor(typeCompte, proprietaire) {
        this.numeroCompte = Math.floor(Math.random() * 4949455455) + 4040
        this.solde = 0
        this.transactions = []
        this.proprietaire = proprietaire;
        this.typeCompte = typeCompte
        if (typeCompte === TypeCompte.PROFESSIONNEL)
            this.plafondDecouvert = Math.floor(Math.random() * 250) + 40
        else this.plafondDecouvert = 0;
    }

    deposer() {
        //[-1500 , 2500] max-min
        let somme = Math.floor(Math.random() * 4001) - 1500
        let tr = new Transaction(somme, TypeTransaction.DEPOT)
        this.transactions.push(tr)
        this.solde += somme
    }
    retirer() {
        //[-1500 , 2500] max-min
        let somme = Math.floor(Math.random() * 4001) - 1500
        if ((this.solde + this.plafondDecouvert) >= somme) {
            let tr = new Transaction(somme, TypeTransaction.RETRAIT)
            this.transactions.push(tr)
            this.solde -= somme
        } else
            console.log("Solde insuffisant")
    }
    virement(compte) {
        let somme = Math.floor(Math.random() * 4001) - 1500
        if (compte.numeroCompte !== this.numeroCompte && (this.solde - somme <= -this.plafondDecouvert)) {
            let tr = new Transaction(somme, TypeTransaction.VIREMENT_SORTANT)
            this.transactions.push(tr)
            let tr2 = new Transaction(somme, TypeTransaction.VIREMENT_ENTRANT)
            compte.transactions.push(tr2)
            this.solde -= somme;
            compte.solde += somme;
        }
    }
    afficherTransactions() {
        this.transactions.forEach(tr => {
            tr.afficherTransaction()
        })
    }
    afficherCompte() {
        console.log('Compte:#', this.numeroCompte, "-", this.typeCompte,
            " solde", this.solde, "€, plafond decouvert :", this.plafondDecouvert, "€")
    }

}