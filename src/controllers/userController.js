import * as userService from '../services/userService.js';

export const getUsers = async (req, res) => {
  try {
    const users = await userService.fetchAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    
    const newUser = await userService.createNewUser(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const deleted = await userService.deleteUser(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }
    res.status(200).json({ message: 'Usuário excluído com sucesso.' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};