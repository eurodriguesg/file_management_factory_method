import { FileFactory } from './FileFactory';
import { FileDOCX }    from '../models/FileDOCX';

export class FileDOCXFactory extends FileFactory {
    createFile(): FileDOCX {
        return new FileDOCX();
    }
}