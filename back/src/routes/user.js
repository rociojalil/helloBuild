const  { saveRepos, getRepos}  = require( '../controllers/index')

const { Router } = require('express')
const router = Router()

router.get('/repo',saveRepos)
router.get('/info',getRepos)

module.exports = router;