// src/models/FileXLSX.ts
import { File } from './File';

export class FileXLSX implements File {
    open(): void {
        console.log('Opening XLSX file...');
    }

    save(): void {
        console.log('Saving XLSX file...');
    }
}
