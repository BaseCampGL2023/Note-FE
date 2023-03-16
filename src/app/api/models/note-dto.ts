/* tslint:disable */
/* eslint-disable */
import { ImageDto } from './image-dto';
import { TagDto } from './tag-dto';
import { TagNoteDto } from './tag-note-dto';
import { UserDto } from './user-dto';
export interface NoteDto {
  creationDate?: string;
  images?: null | Array<ImageDto>;
  lastChangeDate?: string;
  tagNotes?: null | Array<TagNoteDto>;
  tags?: null | Array<TagDto>;
  text?: null | string;
  user?: UserDto;
  userId?: string;
}
