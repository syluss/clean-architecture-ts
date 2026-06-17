import { checkHealth } from './src/shared/health.js';
import { buildServer } from './src/infrastructure/http/server.js';

const health = checkHealth();
console.log(`Status: ${health.status}, Timestamp: ${health.timestamp}`);

const app = buildServer();

app.listen({ port: 3000 }, () => {
  console.log('Server listening on http://localhost:3000');
});