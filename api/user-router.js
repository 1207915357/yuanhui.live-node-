const Router = require('koa-router');
const router = new Router();
const user_controller = require('../controllers/user_controller');

router.get('/get', user_controller.get);
router.post('/post', user_controller.post);
router.post('/login', user_controller.login);
router.post('/register', user_controller.register);
router.get('/getUserInfo', user_controller.getUserInfo);
router.post('/getAllUser', user_controller.getAllUser);

module.exports = router;