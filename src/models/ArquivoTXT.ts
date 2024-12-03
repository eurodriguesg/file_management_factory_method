import { Arquivo } from './Arquivo';

export class ArquivoTXT implements Arquivo {
    abrir(): void {
        console.log('Abrindo arquivo TXT...');
    }

    salvar(): void {
        console.log('Salvando arquivo TXT...');
    }
}