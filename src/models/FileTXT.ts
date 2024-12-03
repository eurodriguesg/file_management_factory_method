// src/models/FileTXT.ts
import { File } from './File';

export class FileTXT implements File {
    open(): void {
        console.log('Opening TXT file...');
    }

    save(): void {
        console.log('Saving TXT file...');
    }
}