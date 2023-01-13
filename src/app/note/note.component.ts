import { Component} from '@angular/core';
import { Note } from '../Models/Note';
import { Tag } from '../Models/Tag';
import { ImageInNote } from '../Models/Image';
@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {
  constructor() {
    this.note = new Note(1, 1, "This is a note.", new Date(), new Date(), [new Tag(1, "Tag1"), new Tag(2, "Tag2")], new ImageInNote(1, 1, 'https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'));

  }
  public note: Note;
}
