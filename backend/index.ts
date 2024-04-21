import { HOSTNAME, PORT } from '@/utils/const';
import express from 'express';
import moment from 'moment-timezone';

// create an express application
const app = express();

// define the hostname and port to listen on
// const hostname = HOSTNAME
// const port = PORT;

// middleware to allow CORS
app.use((_, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
});

// middleware to parse request body as JSON 
app.use(express.json());

const TasksDB = [
    {
        id: 1,
        title: "Tarea 1",
        description: "Jose : Viernes 16:30 hs",
        completed: false,
        createdAt: moment().tz("America/Argentina/Buenos_Aires").format(),
        updatedAt: moment().tz("America/Argentina/Buenos_Aires").format()
    },
    {
        id: 2,
        title: "Tarea 2",
        description: "Colo: Lunes 17 hs",
        completed: true,
        createdAt: moment().tz("America/Argentina/Buenos_Aires").format(),
        updatedAt: moment().tz("America/Argentina/Buenos_Aires").format()
    },
    {
        id: 3,
        title: "Tarea 3",
        description: "Lilly: Padel Sábado 18:30 hs",
        completed: true,
        createdAt: moment().tz("America/Argentina/Buenos_Aires").format(),
        updatedAt: moment().tz("America/Argentina/Buenos_Aires").format()
    }
]

app.get('/', (_, res) => {
    res.json(TasksDB);
});

app.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});