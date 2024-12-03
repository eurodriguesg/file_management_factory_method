import { Arquivo } from './Arquivo';

export class ArquivoXLSX implements Arquivo {
    abrir(): void {
        console.log('Abrindo arquivo XLSX...');
    }

    salvar(): void {
        console.log('Salvando arquivo XLSX...');
    }
}