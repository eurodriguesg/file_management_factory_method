import { EditorArquivo } from './EditorArquivo';
import { ArquivoXLSX }   from '../models/ArquivoXLSX';

export class EditorXLSX extends EditorArquivo {
    criarArquivo() {
        return new ArquivoXLSX();
    }
}