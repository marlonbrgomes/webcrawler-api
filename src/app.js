import celebrate    from 'celebrate';
import cors         from 'cors';
import morgan       from 'morgan';
import express      from 'express';
import bodyParser   from 'body-parser';

// Utils
import db from './utils/mongoose';
import logger       from './utils/logger';
import * as constants from './utils/constants';
import { syntaxHandler } from './utils/handlers';

// Routes Import
import sites from './v1/services/sites/service';
import products from './v1/services/products/service';

db.connect();

const port = process.env.PORT || 3030;
const graphPort = process.env.GRAPH_PORT || 4000;
const app  = express();

// Express Configurations
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev', { stream: logger.stream }));

// Routes Invoked
app.use('/v1/services/sites', sites);
app.use('/v1/services/products', products)

// REST Schema Handler
app.use(celebrate.errors());

// Syntax Handler (400)
app.use(syntaxHandler);

// Router Handler (404)
app.use((req, res) => res.status(404).json(constants.NOT_FOUND_MESSAGE));

app.listen(port, () => logger.info(`${constants.REST_STARTED} ${port}`));

export default app;
