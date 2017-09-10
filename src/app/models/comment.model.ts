export class Comment {
    text: string;
    author: string;
    authorPictureUrl: string;

    constructor(text = '') {
        this.text = text;
    }
}
