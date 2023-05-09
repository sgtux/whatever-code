import axios from 'axios'
import {itemService} from './itemService'

const exportJson = () => {
    return axios.post('/export', itemService.getData(), { responseType: 'blob' })    
}

export const httpService = {
    exportJson
}