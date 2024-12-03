// src/models/FilePDF.ts
import { File } from './File';

export class FilePDF implements File {
    open(): void {
        console.log('[FILE ✅] Opening PDF file...');
    }

    save(): void {
        console.log('[FILE ✅] Saving PDF file...');
    }
}
