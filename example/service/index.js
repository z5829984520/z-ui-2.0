import axios from 'axios'

export const mdService = {
  getMd(path='scroll') {
    return axios.get(`static/md/${path}.md`)
  }
};
