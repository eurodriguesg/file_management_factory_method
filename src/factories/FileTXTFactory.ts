import { FileFactory } from './FileFactory';
import { FileTXT }     from '../models/FileTXT';

export class FileTXTFactory extends FileFactory {
    createFile(): FileTXT {
        return new FileTXT();
    }
}