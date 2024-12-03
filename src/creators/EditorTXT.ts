import { EditorArquivo } from './EditorArquivo';
import { ArquivoTXT }    from '../models/ArquivoTXT';

export class EditorTXT extends EditorArquivo {
    criarArquivo() {
        return new ArquivoTXT();
    }
}