import dotenv from 'dotenv';
dotenv.config()
import app from './index';



const PORT: number = Number(process.env.PORT) || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));