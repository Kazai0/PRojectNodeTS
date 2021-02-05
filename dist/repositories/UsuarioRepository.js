"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var usuario_1 = __importDefault(require("../models/usuario"));
var UsuarioRepository = /** @class */ (function () {
    function UsuarioRepository() {
        this.usuario = [];
    }
    UsuarioRepository.prototype.create = function (id, email, nome, senha) {
        var usuario = new usuario_1.default(id, email, nome, senha);
        this.usuario.push(usuario);
        return usuario;
    };
    UsuarioRepository.prototype.all = function () {
        return this.usuario;
    };
    return UsuarioRepository;
}());
exports.default = UsuarioRepository;
