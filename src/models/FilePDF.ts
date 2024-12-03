// src/models/FilePDF.ts
import { File } from './File';

export class FilePDF implements File {
    open(): void {
        console.log('Opening PDF file...');
    }

    save(): void {
        console.log('Saving PDF file...');
    }
}
