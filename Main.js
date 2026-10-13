import { Banque } from "./Banque.js";
import { Transaction } from "./Transaction.js";
import { TypeTransaction } from "./TypeTransaction.js";

let banque = new Banque();
for (let i = 0; i < 1; i++) {
    banque.ajouterClient();
    banque.clients.forEach(c => {
        c.AjouterCompte()
        c.AfficherComptes()
        c.comptes.forEach(compte => {
            let r = Math.floor(Math.random() * 3)
            switch (r) {
                case 0://deposer
                    compte.deposer()
                    break;
                case 1://retirer
                    compte.retirer()
                    break;
                default://virement
                    compte.virement(banque.clients[0].comptes[0])
                    break;
            }
            compte.afficherTransactions()
            console.log("solde actuel", compte.solde);
        })


    })
}
