import axios from 'axios'

export function getThemeTitle(){
  return axios.get('api/themes').then((response) => {
    return Promise.resolve(response);
  })
}