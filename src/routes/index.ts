// import newsRouter from "./news.route";
import siteRouter from "./site.route";
import taskRouter from "./task.route"
import { Express } from "express";

function route(app: Express) {
    app.use('/tasks', taskRouter);
    app.use('/', siteRouter);
}

export default route;