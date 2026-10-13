import { Client } from "./CLient.js"

export class Banque {
    constructor() {
        this.nom = "Banque " + Math.floor(Math.random() * 43094)
        this.clients = []
    }
    ajouterClient() {
        let m = Math.floor(Math.random() * 43094)
        let cl = new Client("nom" + m, "prenom" + m)
        this.clients.push(cl)

    }

}