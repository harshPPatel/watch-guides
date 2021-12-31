import { IContent } from './content.interface';
import { IReferenceLink } from './reference-link.interface';

export interface IData {
  title: string;
  description: string;
  content: IContent[];
  referenceLinks?: IReferenceLink[];
}
