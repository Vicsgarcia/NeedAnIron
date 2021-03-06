import http from './BaseService';

const register = (user) => http.post('/register', user)
  .then(res => Promise.resolve(res.data));

const authenticate = (user) => http.post(`/profile`, user)
  .then(res => Promise.resolve(res.data));


const getProfile = (id) => http.get(`/profile/${id}`)
  .then(res => Promise.resolve(res.data));
  
const logout = () => {
    return http.get('/logout')
      .then(res => Promise.resolve(res.data));
  }



export default {
  register,
  authenticate,
  getProfile,
  logout
 
}