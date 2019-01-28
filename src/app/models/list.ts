import { Applicant } from './applicant';

export class List {
    id: number;
    name: string;
    order: number;
    disabled: boolean;
    color: string;
    applicants: Applicant[];
}
