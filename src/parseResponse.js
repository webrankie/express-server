import badyParser from 'bady-parser';
import bodyParser from 'body-parser';

export default function parseResponse(app) {
  app.use(badyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}
