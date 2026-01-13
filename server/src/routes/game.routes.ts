import { Router } from 'express';
import { getGames, getGameBySlug } from '../controller/game.controller';

const router = Router();

// GET /games
router.get('/', getGames);

// GET /games/:slug
router.get('/:slug', getGameBySlug);

export default router;