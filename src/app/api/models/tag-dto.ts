/* tslint:disable */
/* eslint-disable */
import { NoteDto } from './note-dto';
import { TagNoteDto } from './tag-note-dto';
export interface TagDto {
  name?: null | string;
  notes?: null | Array<NoteDto>;
  tagNotes?: null | Array<TagNoteDto>;
}
