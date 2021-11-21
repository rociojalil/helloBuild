const axios = require('axios');
const querystring = require('query-string')

var repoInfo = []

async function getToken(code) {

    const gitToken = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=a3b0deff790f5d29c56f&client_secret=74d4b0868b7fced82e2f074d9a8089e467b65396&code=${code}`)
        .then((res) => { 
            return (res.data) 
        })
        // obtengo el token de github
        .catch((err) => { throw err  })


    const parseado = querystring.parse(gitToken)
    // objeto decodificado

    const token = parseado.access_token
    // obtengo el token de acceso
    // console.log(accessToken)

    return axios.get("https://api.github.com/user", {
        headers: { 
            Authorization: `Bearer ${token}` 
        }
        })
        .then((res) => { 
            return (res.data) 
        })
        .catch((err) => { throw err })
        }


        const allRepos = async (req, res) => {
            const { code } = req.query
            // codigo del usuario en especifico

            if (!code) {
                throw new Error("no accediste al code")
            }
            const githubUser = await getToken(code)
            // obtengo el usuario
        //   console.log(githubUser);

            let userId = repoInfo.map(e => e.user_id)
    

            if (!userId.includes(githubUser.id)) {
                // si el usuario no esta en la base 
                // lo agrego 
                let obj = {
                    id: githubUser.id,
                    repos: []
                }
                
        
        await axios.get(githubUser.repos_url).then(response => {
                // console.log(response.data)
            response.data.map(repo => {
                let repoObj = {
                    id: repo.id,
                    name: repo.name,
                    language: repo.language,
                    url: repo.html_url,
                  
                }
                
                obj.repos.push(repoObj)})
            repoInfo.push(obj)

            // console.log(usersInfo[0].repos[0])
            // si me trae informacion de los repositorios
            // console.log(obj)
            return (obj)
            // guardo el objeto en el arreglo de usuarios vacio de arriba inicializado
        })

   
    res.redirect('http://localhost:3000/repositories')
        }
    }

const showRepos = async (req, res) => { 


    res.send(repoInfo[0].repos)
}

module.exports = {  allRepos, showRepos }



