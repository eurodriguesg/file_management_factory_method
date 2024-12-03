// src/models/FileDOCX.ts
import { File } from './File';

export class FileDOCX implements File {
    open(): void {
        console.log('Opening DOCX file...');
    }

    save(): void {
        console.log('Saving DOCX file...');
    }
}
