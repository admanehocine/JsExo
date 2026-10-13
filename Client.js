import { Compte } from "./Compte.js";
import { Personne } from "./Personne.js";
import { TypeCompte } from "./TypeCompte.js";

export class Client extends Personne {
    constructor(nom, prenom) {
        super(nom, prenom)
        this.comptes = []
    }
    AjouterCompte() {
        let r = Math.floor(Math.random() * 3)
        let cp
        switch (r) {
            case 0://courrant
                cp = new Compte(TypeCompte.COURANT, this)
                break;
            case 1://EPARGNE
                cp = new Compte(TypeCompte.EPARGNE, this)
                break;
            default://pro
                cp = new Compte(TypeCompte.PROFESSIONNEL, this)
                break;
        }
        this.comptes.push(cp)

    }

    SupprimerCompte(num) {
        const l = this.comptes.findIndex(c => {
            c.numeroCompte === num
        })
        if (l !== -1)
            this.comptes.splice(l, 1)
    }
    AfficherComptes() {
        console.log("Client:  ", this.nom, " - ", this.prenom)
        this.comptes.forEach(c => {
            c.afficherCompte()
        })
    }
    CalculerPatrimoine() {
        let s = 0;
        this.comptes.forEach(c => {
            s += c.solde
        })
        console.log("Client:", this.nom, " - ", this.prenom, " ,Patrimoine est:", s, " €");
    }
}