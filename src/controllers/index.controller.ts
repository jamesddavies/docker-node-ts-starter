    
import { Request, Response } from 'express';

class IndexController {

    //GET functions

    public handleGET = (req: Request, res: Response): void => {
        res.json({
            'message': 'Welcome to your new Node app, pal.'
        })
    }
    
}

export default new IndexController();