/* tslint:disable */
/* eslint-disable */
import { NoteDto } from './note-dto';
import { TagDto } from './tag-dto';
export interface TagNoteDto {
  note?: NoteDto;
  noteId?: string;
  tag?: TagDto;
  tagId?: string;
}
