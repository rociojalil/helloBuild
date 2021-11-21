const axios = require('axios');
const querystring = require('query-string')
// query string parsea datos para q pueda leer los datos de la url? elimina ? or #?

var usersInfo = []

async function getGithubUser(code) {

    const githubToken = await axios.post(
        `https://github.com/login/oauth/access_token?client_id=4fdf72fadddd06cc806f&client_secret=888e4b4fefe1896144b9db7dfc3cfe4f01fa08f6&code=${code}`)
        .then((response) => { 
            return (response.data) 
        })
        // obtengo el token de github
        .catch((err) => { throw err  })


    const decoded = querystring.parse(githubToken)
    // parseas la url

    const accessToken = decoded.access_token
    // obtienes el token de acceso
    // console.log(accessToken)

    return axios.get("https://api.github.com/user", {
        headers: { 
            Authorization: `Bearer ${accessToken}` 
        }
        })
        .then((res) => { 
            return (res.data) 
        })
        .catch((err) => { throw err })
}



const saveRepos = async (req, res) => {
    const { code } = req.query
    // codigo del usuario en especifico

    if (!code) {
        throw new Error("no accediste al code")
    }
    const githubUser = await getGithubUser(code)
    // obtengo el usuario
//   console.log(githubUser);

    let userId = usersInfo.map(e => e.user_id)

    if (!userId.includes(githubUser.id)) {
        let obj = {
            id: githubUser.id,
            repos: []
        }
        
        await axios.get(githubUser.repos_url).then(response => {
                // console.log(response.data)
            response.data.map(repo => {
                let repoObj = {
                    id: repo.id,
                    defaultBranch: repo.default_branch,
                    name: repo.name,
                    language: repo.language,
                    created: repo.created_at.slice(0,10),
                    url: repo.html_url,
                    visibility: repo.visibility,
                  
                }
                // creo un objeto con los datos que quiero mostrar del repo
                
                obj.repos.push(repoObj)})
            usersInfo.push(obj)

            // console.log(usersInfo[0].repos[0])
            // si me trae informacion de los repositorios
            // console.log(obj)
            return (obj)
            // guardo el objeto en el arreglo de usuarios vacio de arriba inicializado
        })

   
    res.redirect('http://localhost:3002/repositories')
        }
    // redirecciono a la pagina de repositorios
    }

const getRepos = async (req, res) => { 
  res.send(usersInfo[0].repos)
}


module.exports = {  saveRepos, getRepos }



