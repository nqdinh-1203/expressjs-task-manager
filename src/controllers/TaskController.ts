import { Request, Response, NextFunction } from 'express';

class TaskController {
    // [GET] /
    getAllTasks(req: Request, res: Response, next: NextFunction) {
        res.send("Get all tasks");
    }

    // [POST] /
    createTask(req: Request, res: Response, next: NextFunction) {
        res.send("Create 1 task");
    }

    // [GET] /:id
    getTask(req: Request, res: Response, next: NextFunction) {
        res.send("Get 1 task");
    }

    // [PATCH] /:id
    updateTask(req: Request, res: Response, next: NextFunction) {
        res.send("Update 1 task");
    }

    // [DELETE] /:id
    deleteTask(req: Request, res: Response, next: NextFunction) {
        res.send("Delete 1 task");
    }
}

export default new TaskController;