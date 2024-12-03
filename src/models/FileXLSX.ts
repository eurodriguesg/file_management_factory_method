// src/models/FileXLSX.ts
import { File } from './File';

export class FileXLSX implements File {
    open(): void {
        console.log('[FILE ✅] Opening XLSX file...');
    }

    save(): void {
        console.log('[FILE ✅] Saving XLSX file...');
    }
}
