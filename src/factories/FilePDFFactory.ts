import { FileFactory } from './FileFactory';
import { FilePDF }     from '../models/FilePDF';

export class FilePDFFactory extends FileFactory {
    createFile(): FilePDF {
        return new FilePDF();
    }
}