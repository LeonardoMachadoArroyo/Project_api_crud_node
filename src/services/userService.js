import * as userModel from '../models/userModel.js';

export const fetchAllUsers = async () => {
  return await userModel.findAll();
};

export const createNewUser = async (userData) => {
  const { nome, email, senha, foto } = userData;

  // Validações de regra de negócio
  if (!nome || !email) {
    throw new Error('Nome e e-mail são obrigatórios.');
  }

  // Verifica se o e-mail já existe no banco
  const existingUser = await userModel.findByEmail(email);
  if (existingUser) {
    throw new Error('Este e-mail já está em uso.');
  }

  // Envia os dados completos para o Model
  return await userModel.create({ nome, email, senha, foto });
};

export const getUserById = async (id) => {
  const user = await userModel.findById(id);
  if (!user) {
    throw new Error('Usuário não encontrado.');
  }
  return user;
};

export const updateUser = async (id, userData) => {
  // Regra de negócio: validação básica
  if (userData.email == "" || userData.name == "") {
    throw new Error('Nome e e-mail são obrigatórios.');
  }

  return await userModel.update(id, userData);
};

export const deleteUser = async (id) => {
  return await userModel.deleteById(id);
}; 