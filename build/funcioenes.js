"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.calcularSueldo = void 0;
const empleado_1 = require("./model/empleado");
const viaje_1 = require("./model/viaje");
let calcularSueldo = (dni, salariobase) => __awaiter(void 0, void 0, void 0, function* () {
    let salariocalculado = 0;
    let query = yield empleado_1.Empleado.findOne({ _dni: dni });
    let query1 = yield viaje_1.Viaje.findOne({ _id: query._tren });
    if (query1._tipoObjeto == "pasajeros") {
        salariocalculado = salariobase * 1.5;
    }
    else {
        salariocalculado = salariobase * 1.25;
    }
    if (query._viajes >= 20) {
        salariocalculado = salariocalculado * 1.15;
    }
    else if (query._viajes >= 50) {
        salariocalculado = salariocalculado * 1.25;
    }
    return salariocalculado;
});
exports.calcularSueldo = calcularSueldo;
