import pool from "./db.ts"; 

async function testConnection() {
  try {
    const [rows] = await pool.query("SELECT 1 + 1 AS result");
    console.log("✅ Conexión exitosa:", (rows as any)[0].result);
  } catch (error) {
    console.error("❌ Error en la conexión:", error);
  } finally {
    await pool.end(); // Es crucial usar 'await' con pool.end()
  }
}

testConnection();