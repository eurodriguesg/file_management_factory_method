// src/models/FileTXT.ts
import { File } from './File';

export class FileTXT implements File {
    open(): void {
        console.log('[FILE ✅] Opening TXT file...');
    }

    save(): void {
        console.log('[FILE ✅] Saving TXT file...');
    }
}
