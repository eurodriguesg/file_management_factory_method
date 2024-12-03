// src/factories/FileTXTFactory.ts
import { FileFactory } from './FileFactory';
import { FileTXT }     from '../models/FileTXT.model';

export class FileTXTFactory extends FileFactory {
    // Cria uma instância de FileTXT
    createFile() {
        return new FileTXT();
    }
}
