"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var Usuario_routes_1 = __importDefault(require("../routes/Usuario.routes"));
var app = express_1.default();
app.use(express_1.default.json());
app.use(Usuario_routes_1.default);
app.listen(8080, function () {
    console.log("Deus é bom");
});
