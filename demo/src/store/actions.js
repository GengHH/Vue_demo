import api from "../api/Login"
import { USER_SIGNIN, USER_SIGNOUT, USER_REG } from "./type"

export const UserLogin = ({ commit }, data) => {
  api
    .localLogin(data)
    .then(function(response) {
      console.log('response',response)
      if (response.data.type == true) {
        commit(USER_SIGNIN, response.data.token)
        window.location = "/home"
      } else {
        window.location = "/api/login"
      }
    })
    .catch(function(error) {
      console.log('error',error);
    })
}

export const UserLogout = ({ commit }, data) => {
  api
    .localLogout(data)
    .then(function(response) {
      commit(USER_SIGNOUT);
      window.location = "/home"
    })
    .catch(function(error) {
      console.log(error);
    })
}

export const UserReg = ({ commit }, data) => {
  api
    .localReg(data)
    .then(function(response) {
      if (response.data.type == true) {
        commit(USER_REG, response.data.token)
        window.location = "/home"
      }
    })
    .catch(function(error) {
      console.log(error)
    })
}
