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
            const factory = await FileFactory.getFactory(fileType);
            const file = factory.createFile();
            
            // Chamando os métodos do objeto 'file' correto
            file.open();  // Exibe: 'Opening file...'
            file.save();  // Exibe: 'Saving file...'

            res.status(200).json({
                message: "File created successfully",
                type: fileType,
                instance: file
            });

        } catch (error: any) {
            res.status(500).json({ message: error.message });
        }
    }
}
