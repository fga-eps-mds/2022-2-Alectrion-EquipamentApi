export const workStationsApiOptions = {
  hostname: process.env.SCHEDULA_WORK_STATIONS_URL,
  port: process.env.SCHEDULA_WORK_STATIONS_PORT,
  path: '/workstations',
  method: 'GET'
}