// src/models/FileDOCX.ts
import { File } from './File.model';

export class FileDOCX implements File {
    open(): void {
        console.log('[FILE ✅] Opening DOCX file...');
    }

    save(): void {
        console.log('[FILE ✅] Saving DOCX file...');
    }
}
