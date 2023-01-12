class User {
  constructor(id: number, name: string, email: string, date: Date) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.created_at = date;
  }

  id: number;
  name: string;
  email: string;
  created_at: Date;
}
