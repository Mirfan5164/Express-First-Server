//step#01: IMPORT EXPRESS REQUEST RESPONSE
import Express, {request, Request, response, Response} from "express";
import userData from "./userList/UserList";

//step#02: EXPRESS FUNTION
const app = Express();

//step#03: JSON DATA FORMATE FOR HUMAN UNDERSTABLE
app.use(Express.json());

//step#04: FRONTEND-BACKEND | REQUEST & RESPONSE

//(a): GET METHOD
app.get("/users", (req: Request, res: Response) => {
    res.json(userData) && res.status(200); 
});

//(b): POST METHOD
app.post("/users", (req: Request, res: Response) => {
    const newUser = req.body;
    userData.push(newUser);
    res.json(userData) && res.status(201); 
});

//(c): DELETE METHOD
app.delete("/users/:id", (req: Request, res: Response) => {
    const result = userData.filter(user => user.id !== Number(req.params.id));
    res.json(result) && res.status(200); 
});

//(d): PUT METHOD
app.put("/users/:id", (req: Request, res: Response) => {
    const updateUser = req.body;
    const objIndex = userData.findIndex(user => user.id === Number(req.params.id));
    userData[objIndex] = updateUser
    res.json(userData) && res.status(200); 
});

//(e): PATCH METHOD
app.patch("/users/:id", (req: Request, res: Response) => {
    const updateUser = req.body;
    const objIndex = userData.findIndex(user => user.id === Number(req.params.id));
    userData[objIndex].name = updateUser.name;
    res.json(userData) && res.status(200); 
});

//step#05: LISTEN FUNCTION
const port = 8001;
app.listen(port, ()=>{
    console.log(`This server is running on http://localhost:${port}`);
});