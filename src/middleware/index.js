const bodyParser = require('body-parser');
const cors = require('cors');

const constants = require('../config/constants');
const env = process.env.NODE_ENV;
const isDev = env === 'development';
const isProd = env === 'production';

module.exports = (app) => {
    if (isProd) {
        // app.use(compression());
        // app.use(helmet());
        // app.use(morgan('tiny'));
    }

    app.use(bodyParser.json());

    if (isDev) {
        const corsOptions = {
            origin: '*'
        }

        app.use(cors(corsOptions));
        // app.use(morgan('dev'));
    }
}
