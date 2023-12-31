import { Request, Response, Router } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardController = new LeaderboardController();

const router = Router();

router.get('/', (req: Request, res: Response) =>
  leaderboardController.getAllInfo(req, res));

router.get('/home', (req: Request, res: Response) =>
  leaderboardController.getAllHomeInfo(req, res));

router.get('/away', (req: Request, res: Response) =>
  leaderboardController.getAwayInfo(req, res));

export default router;
