import { EditorArquivo } from './EditorArquivo';
import { ArquivoDOCX }   from '../models/ArquivoDOCX';

export class EditorDOCX extends EditorArquivo {
    criarArquivo() {
        return new ArquivoDOCX();
    }
}