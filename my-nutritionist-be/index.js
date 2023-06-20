const express = require('express');
const mysql = require('mysql2');
// per risolvere il problema CORS importo il modulo 'cors'
const cors = require('cors');


const app = express();

// Abilita le richieste CORS solo dall'origine specificata
app.use(cors({
    origin: 'http://localhost:4200'
  }));


app.use(express.static('../my-nutritionist'));


// Configurazione della connessione al database
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'my_nutritionist'
  });

// Connessione al database
connection.connect((err) => {
    if (err) {
      console.error('Errore di connessione al database:', err.message);
    } else {
      console.log('Connessione al database riuscita');
    }
  });  

// Gestore della richiesta GET per la radice del server
app.get('/', (req, res) => {
    res.send('Benvenuto nella mia applicazione!');
});

// Definizione delle API
app.get('/products', (req, res) => {
  const query = 'SELECT * FROM products';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Errore durante l\'esecuzione della query:', err);
      res.status(500).json({ error: 'Errore del server' });
    } else {
      res.json(results);
    }
  });
});

app.get('/users', (req, res) => {
  const query = 'SELECT * FROM users';
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Errore durante l\'esecuzione della query:', err);
      res.status(500).json({ error: 'Errore del server' });
    } else {
      res.json(results);
    }
  });
});

// Avvio del server
app.listen(3000, () => {
  console.log('Server avviato sulla porta 3000');
});
