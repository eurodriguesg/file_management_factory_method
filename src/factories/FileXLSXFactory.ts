import { FileFactory } from './FileFactory';
import { FileXLSX }    from '../models/FileXLSX';

export class FileXLSXFactory extends FileFactory {
    createFile(): FileXLSX {
        return new FileXLSX();
    }
}