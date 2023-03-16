/* tslint:disable */
/* eslint-disable */
import { NoteDto } from './note-dto';
export interface UserDto {
  email?: null | string;
  notes?: null | Array<NoteDto>;
  registerDate?: string;
}
