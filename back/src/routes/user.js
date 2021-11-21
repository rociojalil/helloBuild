const  { allRepos, showRepos}  = require( '../controllers/index')

const { Router } = require('express')
const router = Router()

router.get('/repo',allRepos)
router.get('/info',showRepos)

module.exports = router;