// src/factories/FileFactory.ts
import { File } from '../models/File.model';

export abstract class FileFactory {
    // Método abstrato para criar o arquivo
    abstract createFile(): File;

    // Método para gerenciar o arquivo (abrir e salvar)
    async manageFile(): Promise<void> {
        const file = this.createFile();  // Cria o arquivo usando a fábrica concreta
        await file.open();  // Abre o arquivo
        await file.save();  // Salva o arquivo
    }

    // Método estático para obter a fábrica correta com base no tipo de arquivo
    static async getFactory(fileType: string): Promise<FileFactory> {
        switch (fileType.toLowerCase()) {
            case 'pdf': {
                const { FilePDFFactory } = await import('./FilePDFFactory');
                return new FilePDFFactory();
            }
            case 'docx': {
                const { FileDOCXFactory } = await import('./FileDOCXFactory');
                return new FileDOCXFactory();
            }
            case 'xlsx': {
                const { FileXLSXFactory } = await import('./FileXLSXFactory');
                return new FileXLSXFactory();
            }
            case 'txt': {
                const { FileTXTFactory } = await import('./FileTXTFactory');
                return new FileTXTFactory();
            }
            default:
                throw new Error("Invalid file type");
        }
    }
}
