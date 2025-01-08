import {NextFunction, Request, Response} from "express";

export interface Routes {
    method: 'get' | 'post' | 'put' | 'delete';
    path: string;
    handler: (req: Request, res: Response, next: NextFunction) => void
}