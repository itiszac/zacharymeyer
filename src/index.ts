import {config} from 'dotenv';
import {app} from './app';

config();

const PORT: number = parseInt(process.env.PORT as string) || 8081;

// Start server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}!`));
