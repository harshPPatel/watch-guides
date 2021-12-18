import { ReferenceLink } from './reference-link.interface';

export interface Data {
  title: string;
  description: string;
  content: any[];
  referenceLinks?: ReferenceLink[];
}
