import {getRepository} from 'typeorm';
import Usuario from '../models/usuario';
import { request, Request, Response} from 'express';

export const getUsuarios = async(request: Request, response: Response)=>{

    const usuarios = await getRepository(Usuario).find();
    return response.json(usuarios);
    }