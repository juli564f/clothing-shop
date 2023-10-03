// Definerer en klasse for at kunne oprette objekter med
// samme struktur på tværs af objekter.
export class Cart {
    constructor(img, title, text, size, price) {
        this.isCompleted = false;
        this.content = img;
        this.created = title;
        this.deadline = text;
        this.priority = size;
        this.labels = price;
    }

}