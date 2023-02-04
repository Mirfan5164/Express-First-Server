//step#01: IMPORT EXPRESS REQUEST RESPONSE
import Express, {request, Request, response, Response} from "express";

//step#02: EXPRESS FUNTION
const app = Express();

//step#03: JSON DATA FORMATE FOR HUMAN UNDERSTABLE
app.use(Express.json());

//step#04: FRONTEND-BACKEND | REQUEST & RESPONSE
app.get("/", (req: Request, res: Response) => {
    res.json("This is from get") && res.status(201);
});

//step#05: LISTEN FUNCTION
const port = 8001;
app.listen(port, ()=>{
    console.log(`This server is running on http://localhost:${port}`);
});