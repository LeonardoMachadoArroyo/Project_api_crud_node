import db from '../config/db.js';

// Buscar todos os registros
export const findAll = async () => {
  const [rows] = await db.query('SELECT * FROM usuarios');
  return rows;
};

export const findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
  return rows[0]; // Retorna apenas o usuário encontrado (ou undefined)
};

// Buscar por e-mail
export const findByEmail = async (email) => {
  const [rows] = await db.query('SELECT * FROM usuarios WHERE email = ?', [email]);
  return rows[0]; // Retorna apenas o usuário encontrado (ou undefined)
};

export const create = async (user) => {
  const { nome, email, fone, data_nasc, foto } = user;
  const [result] = await db.query(
    'INSERT INTO usuarios (nome, email, fone, data_nasc, foto) VALUES (?, ?, ?, ?, ?)',
    [nome, email, fone, data_nasc, foto]
  );

  return {
    id: result.insertId,
    nome,
    email,
    fone,
    data_nasc,
    foto
  };
};

// Atualizar um registro existente
export const update = async (id, user) => {
  const { nome, email, data_nasc, fone } = user;
  const [result] = await db.query(
    'UPDATE usuarios SET nome = ?, email = ?, data_nasc = ?, fone = ? WHERE id = ?',
    [nome, email, data_nasc, fone, id]
  );
  return result.affectedRows > 0; // Retorna true se a atualização foi bem-sucedida
};

// Excluir um registro
export const deleteById = async (id) => {
  const [result] = await db.query('DELETE FROM usuarios WHERE id = ?', [id]);
  return result.affectedRows > 0; // Retorna true se a exclusão foi bem-sucedida
};