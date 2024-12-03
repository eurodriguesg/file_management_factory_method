// src/factories/FileFactory.ts
import { ArquivoPDF } from '../models/ArquivoPDF';
import { ArquivoDOCX } from '../models/ArquivoDOCX';
import { ArquivoXLSX } from '../models/ArquivoXLSX';
import { ArquivoTXT } from '../models/ArquivoTXT';

export class FileFactory {

    static criarArquivo(tipo: string) {
        switch (tipo) {
            case 'pdf':
                return new ArquivoPDF();
            case 'docx':
                return new ArquivoDOCX();
            case 'xlsx':
                return new ArquivoXLSX();
            case 'txt':
                return new ArquivoTXT();
            default:
                throw new Error("Tipo de arquivo inválido");
        }
    }
}
