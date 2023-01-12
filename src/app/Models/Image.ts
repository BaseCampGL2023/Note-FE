class ImageInNote {
    constructor(id: number, noteId: number, url: string) {
        this.id = id;
        this.noteId = noteId;
        this.url = url;
    }
    id: number;
    url: string;
    noteId: number;
}
