// src/factories/FileDOCXFactory.ts
import { FileFactory } from './FileFactory';
import { FileDOCX }    from '../models/FileDOCX.model';

export class FileDOCXFactory extends FileFactory {
    // Cria uma instância de FileDOCX
    createFile() {
        return new FileDOCX();
    }
}