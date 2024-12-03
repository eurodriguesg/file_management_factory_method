import { File } from '../models/File';

export abstract class FileFactory {
    abstract createFile(): File;

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
