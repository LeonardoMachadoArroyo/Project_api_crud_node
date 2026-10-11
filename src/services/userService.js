import * as userModel from '../models/userModel.js';

export const fetchAllUsers = async () => {
  return await userModel.findAll();
};

export const createNewUser = async (userData) => {
  console.log('Request body:', userData); 
  // Regra de negócio: validação básica
  if (userData.email == "" || userData.name == "") {
    throw new Error('Nome e e-mail são obrigatórios.');
  }

  // Regra de negócio: verificar se e-mail já existe
  const existingUser = await userModel.findByEmail(userData.email);
  if (existingUser) {
    throw new Error('Este e-mail já está em uso.');
  }

  return await userModel.create(userData);
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