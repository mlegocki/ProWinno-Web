import axios from 'axios'
import history from '../history'

const GET_PROJECTS = 'GET_PROJECTS'

const getProjects = projects => ({ type: GET_PROJECTS, projects })

export const loadProjects = () =>
  dispatch =>
    axios.get('/api/projects')
      .then(res =>
        dispatch(getProjects(res.data)))
      .catch(err => console.log(err))

export default function (state = [], action) {
  switch (action.type) {
    case GET_PROJECTS:
      return action.projects
    default:
      return state
  }
}
