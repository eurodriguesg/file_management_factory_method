// src/factories/FileXLSXFactory.ts
import { FileFactory } from './FileFactory';
import { FileXLSX }     from '../models/FileXLSX.model';

export class FileXLSXFactory extends FileFactory {
    // Cria uma instância de FileXLSX
    createFile() {
        return new FileXLSX();
    }
}