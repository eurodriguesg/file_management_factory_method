import { EditorArquivo } from './EditorArquivo';
import { ArquivoPDF }    from '../models/ArquivoPDF';

export class EditorPDF extends EditorArquivo {
    criarArquivo() {
        return new ArquivoPDF();
    }
}