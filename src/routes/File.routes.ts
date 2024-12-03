import express            from 'express';
import { FileController } from '../controllers/File.controller';

const router         = express.Router();
const fileController = new FileController();

// Use a ligação explícita do método para o contexto correto.
router.post('/:type', fileController.manageFile.bind(fileController));

export default router;

