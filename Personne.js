
export class Personne {
    constructor(nom, prenom) {
        this.id = Math.random() * 49494;
        this.nom = nom;
        this.prenom = prenom;
        this.age = Math.random() * 60 + 20;
    }
    afficher() {
        console.log("id=", this.id, ", nom:", this.nom)
    }
}