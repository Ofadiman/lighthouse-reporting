import { createServer } from '@lhci/server'

console.log('Starting server...')

createServer({
  port: 9001,
  storage: {
    storageMethod: 'sql',
    sqlDialect: 'sqlite',
    sqlDatabasePath: 'sql.db',
  },
  basicAuth: {
    username: 'admin',
    password: 'password',
  },
}).then(({ port }) => console.log('LHCI listening on port', port))
