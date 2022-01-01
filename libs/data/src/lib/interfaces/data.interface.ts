import { IContent } from './content.interface';
import { IReferenceLink } from './reference-link.interface';
import { IShortLinks } from './short-links.interface';

export interface IData {
  title: string;
  description: string;
  shortLinks: IShortLinks;
  content: IContent[];
  referenceLinks?: IReferenceLink[];
}
