import mysql from "mysql2/promise"; // Importa el módulo mysql2 con soporte para promesas

const pool = mysql.createPool({ // Crea un pool de conexiones a la base de datos
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "restaurantedb",
  waitForConnections: true,
  connectionLimit: 10, // Número máximo de conexiones en el pool
  queueLimit: 0, // Sin límite en la cola de espera
});

export default pool; // Exporta el pool para ser usado en otras partes de la aplicación