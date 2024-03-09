import express from "express";

const router = express.Router();

import Painel from "../../controllers/PainelController.js";
const painelController = new Painel();
import Fotos from "../../controllers/FotosController.js";
const fotosController = new Fotos();
import Videos from "../../controllers/VideosController.js";
const videosController = new Videos();
import Usuarios from "../../controllers/UsuariosController.js";
const usuariosController = new Usuarios();
import Assinantes from "../../controllers/AssinantesController.js";
const assinantesController = new Assinantes();
import Parceiros from "../../controllers/ParceirosController.js";
const parceirosController = new Parceiros();
import Editar from "../../controllers/EditarController.js";
const editarController = new Editar();
import Suporte from "../../controllers/SuporteController.js";
const suporteController = new Suporte();

router.get("/:id",painelController.index);
router.get("/fotos/:id",fotosController.index);
router.get("/videos/:id",videosController.index);
router.get("/usuarios/:id",usuariosController.index);
router.get("/assinantes/:id",assinantesController.index);
router.get("/parceiros/:id",parceirosController.index);
router.get("/editar/:id",editarController.index);
router.get("/suporte/:id",suporteController.index);
router.post("/:id",painelController.store);
router.put("/:id",painelController.put);
router.delete("/:id",painelController.delete);

export default router;