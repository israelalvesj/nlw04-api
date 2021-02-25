import {Request, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../repositories/SurveysRepository';

class SurveysController {
  async create(req: Request, res: Response){
   const surveysRepository = getCustomRepository(SurveysRepository);
  }
}

export { SurveysController }