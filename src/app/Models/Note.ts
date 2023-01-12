class Note {
  constructor(id: number, userId: number, text: string, date: Date, updated: Date, tags: Tag[], image?: ImageInNote) {
    this.id = id;
    this.userId = userId;
    this.textContent = text;
    this.created_at = date;
    this.updated_at = updated;
    this.tags = tags;
    this.image = image;
  }

  id: number;
  userId: number;
  textContent: string;
  created_at: Date;
  updated_at: Date;
  tags: Tag[];
  image?: ImageInNote;
}
