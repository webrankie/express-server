import infoRouter from '../info/Routes';

export default function foutes(app) {
  app.use('/info', infoRouter);
}
