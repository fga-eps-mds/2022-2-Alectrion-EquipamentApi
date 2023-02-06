import axios from 'axios'
import { CreateAxiosDefaults } from 'axios'

const schedulaOptions: CreateAxiosDefaults = {
  baseURL: process.env.SCHEDULA_BASE_URL,
  timeout: 1500
}

export const schedulaAxiosClient = axios.create(schedulaOptions)