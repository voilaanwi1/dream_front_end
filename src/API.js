import axios from 'axios'

export const LOGIN_USER_KEY = 'HOME_LOGIN_USER_KEY'

let baseURL;
if(process.env.REACT_REACT_APP_ENVIRONMENT && process.env.REACT_REACT_APP_ENVIRONMENT === 'PRODUCTION') {
    baseURL = process.env.REACT_APP_API_BASE_URL
} else{
    baseURL='http://127.0.0.1:8000';
}


const api = axios.create({
    baseURL:baseURL,
    headers:{
        'Content-Type':'application/json'
    }
})

api.interceptors.request.use(
    config => {
        if(config.requireToken && localStorage.getItem(LOGIN_USER_KEY)){
            config.headers.common['authorization'] = JSON.parse(localStorage.getItem(LOGIN_USER_KEY)).token
        }
        return config
    },
    err => {
        console.error(err)
    }

)


export default class API{
    signUp = async (user_name,email,password) => {
        const savedPost = await api
        .post('/users/signup',{
            user_name: user_name,
            email:email,
            password:password
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw new Error(error)
        });
        return savedPost
    }


    signIn = async(email,password) => {
        const savedPost = await api
        .post('/users/signin',{
            email:email,
            password:password
        })
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw new Error(error)
        });
        return savedPost
    }
    getHomes = async(search,tagId) => {
        let url ='/house/'
        let query= new URLSearchParams()
        if(tagId){
            query.append('tag',tagId)

        }
         if(search){
            query.append('search',search)
         }
         if(query.toString() !== ''){
            url += '?'+ query.toString()  //url=url?key1=value1&key2=value2  
         }

         const homes= await api.get(url).then(response=>{
            return response.data
         }).catch(error=>{
            throw new Error(error)
         })
         return homes
    }
    getHome = async id =>{
        const homes = await api.get('/house/'+ id +'/').then(response=>{ // /house/2/
            return response.data
        }).catch(error =>{
            throw new Error(error)
        })
        return homes
       
    } 

    getFavorites = async () => {
        const favorites = await api
        .get('/favorites/',{requireToken:true})
        .then(response =>{
            return response.data
        })
        .catch(error => {
            throw new Error(error)
        })
        return favorites
    }

    addFavorites = async (addFavoritesBody) => {
        const savedPost = await api
        .post('/favorites/add/', addFavoritesBody, {requireToken: true})
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw new Error(error)
        })
        return savedPost
        
    }

    deleteFavorites = id => {
        return api.delete(`favorites/delete/${id}`, {requireToken:true})
    }

    sellRequest = async data => {
        const savedPost = await api
        .post('/sellRequest/add/',
        {
            address: data.address,
            sqft: data.sqft,
            age_building: data.age_building
        },
        {requireToken: true}
        )
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw new Error(error)
        })
        return savedPost
        
    }

    getTags = async () => {
        const tags= await api 
        .get('/tags/')
        .then (response => {
            return response.data
        })
        .catch(error => {
            throw new Error(error)
        })
        return tags

    }

}




