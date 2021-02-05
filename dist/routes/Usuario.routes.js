"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UsuarioRepository_1 = __importDefault(require("../repositories/UsuarioRepository"));
var usuarioRouter = express_1.Router();
var usuarioRepository = new UsuarioRepository_1.default();
//usuarioRouter.get('/', (request, response )=>{
//    return response.json({message:'Hello God'})
//});
usuarioRouter.get('/', function (request, response) {
    var usuarioRepo = usuarioRepository.all();
    return response.json(usuarioRouter);
});
usuarioRouter.post('/', function (request, response) {
    var _a = request.body, id = _a.id, email = _a.email, nome = _a.nome, senha = _a.senha;
    var usuarioRepo = usuarioRepository.create(id, email, nome, email);
    return response.json(usuarioRepo);
});
exports.default = usuarioRouter;
