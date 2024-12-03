// src/factories/FilePDFFactory.ts
import { FileFactory } from './FileFactory';
import { FilePDF }     from '../models/FilePDF.model';

export class FilePDFFactory extends FileFactory {
    // Cria uma instância de FilePDF
    createFile() {
        return new FilePDF();
    }
}
