import { IContent } from './content.interface';
import { ReferenceLink } from './reference-link.interface';

export interface IData {
  title: string;
  description: string;
  content: IContent[];
  referenceLinks?: ReferenceLink[];
}
