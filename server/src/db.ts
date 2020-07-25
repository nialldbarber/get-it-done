import { connection, connect } from 'mongoose';

require('dotenv').config({ path: '.env' });

function runDb() {
  connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  });

  connection.once('open', () => {
    console.log('');
    console.log('||====================================================');
    console.log('||####################################################');
    console.log('||');
    console.log('|| 👉  Mongoose database connection established! 😎');
    console.log('||');
    console.log('||####################################################');
    console.log('||====================================================');
    console.log('');
  });
}

export { runDb };
