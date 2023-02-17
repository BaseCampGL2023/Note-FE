export class TagNote {
  constructor(tagId: number, noteId: number) {
    this.tagId = tagId;
    this.noteId = noteId;
  }
  noteId: number;
  tagId: number;
}
