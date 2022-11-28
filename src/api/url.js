export let BASE_URL = 'http://localhost:8000/api'
if(process.env.NODE_ENV === 'production'){
    BASE_URL=process.env.REACT_APP_URL
}