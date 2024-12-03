// src/controllers/FileController.ts
import { Request, Response } from 'express';
import { FileFactory }       from '../factories/FileFactory';

export class FileController {

    // Marque a função como assíncrona
    async manageFile(req: Request, res: Response): Promise<void> {

        try {
            const fileType = req.params.type;

            if (!fileType) {
                res.status(400).json({
                    message: "File type is required",
                    fields: "fileType"
                });
                return;
            }

            // Use await corretamente em uma função async
            const factory = await FileFactory.getFactory(fileType);  // Obter a fábrica correta
            await factory.manageFile();  // Gerenciar o arquivo (abrir e salvar)

            res.status(200).json({
                message: "File created and managed successfully",
                type: fileType
            });

        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
