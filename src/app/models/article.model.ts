export class Article {

    constructor (public id: number, public title: string, public description: string, public content: string) {}

    public static MapArray (inputArray: any[]) : Article[] {

        const mappedArray: Article[] = [];
        let e: any;

        if (!inputArray) { return mappedArray; }
        for (let i=0; i<inputArray.length; i++) {
            e = inputArray[i];
            mappedArray.push(new Article(e.id, e.title, e.description, e.content));
        }

        return mappedArray;
    }
}
