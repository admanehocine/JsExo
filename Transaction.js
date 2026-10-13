
export class Transaction {
    constructor(montant, typeTransaction) {
        //let montant = Math.floor(Math.random() * 4001) - 100
        this.id = Math.floor(Math.random() * 49494)
        this.date = new Date()
        this.typeTransaction = typeTransaction;
        this.montant = montant
    }
    afficherTransaction() {
        console.log('TR:#', this.id, ",type: ", this.typeTransaction,
            " montant", this.montant, "€")
    }
    verifierTransaction() {
        if (this.montant <= 0) console.log("TR invalide, id:", this.id)
    }
}