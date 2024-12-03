import { Request, Response } from 'express';
import { ArquivoPDF }        from '../models/ArquivoPDF';
import { ArquivoDOCX }       from '../models/ArquivoDOCX';
import { ArquivoXLSX }       from '../models/ArquivoXLSX';
import { ArquivoTXT }        from '../models/ArquivoTXT';

export class FileController {

    manageFile(req: Request, res: Response): void {

        try {
            
            const fileType = req.params.type;

            if (!fileType) {
                res.status(400).json({
                    message: "O tipo do arquivo é obrigatório",
                    fields: "fileType"
                });
                return;
            }

            let fileInstance;

            switch (fileType) {
                case 'pdf':
                    fileInstance = new ArquivoPDF();
                    break;
                case 'docx':
                    fileInstance = new ArquivoDOCX();
                    break;
                case 'xlsx':
                    fileInstance = new ArquivoXLSX();
                    break;
                case 'txt':
                    fileInstance = new ArquivoTXT();
                    break;
                default:
                    res.status(400).json({ message: "Tipo de arquivo inválido" });
                    return;
            }

            res.status(200).json({
                message: "Arquivo gerado com sucesso",
                type: fileType,
                instance: fileInstance
            });

        } catch (error: any) {
            console.error(`[SRV 🔴] Erro ao converter arquivo: ${error.message}`);
            res.status(500).json({
                message: "Erro interno do servidor",
                function: "manageFile",
                stage: "Erro ao converter arquivo",
                error: error.message
            });
        }
    }
}
