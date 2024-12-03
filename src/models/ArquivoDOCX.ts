import { Arquivo } from './Arquivo';

export class ArquivoDOCX implements Arquivo {
    abrir(): void {
        console.log('Abrindo arquivo DOCX...');
    }

    salvar(): void {
        console.log('Salvando arquivo DOCX...');
    }
}