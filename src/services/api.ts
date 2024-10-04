// src/api/api.ts

import axios from 'axios';
import { Target, Todo } from '../types';

const api = axios.create({
  baseURL: 'https://todo-caio.azurewebsites.net/api',
});

// Funções relacionadas a Targets
export const getAllTargets = async () => {
  const response = await api.get<Target[]>('/targets');
  return response.data;
};

export const getTargetById = async (id: number) => {
  const response = await api.get<Target>(`/targets/${id}`);
  return response.data;
};

export const createTarget = async (target: Omit<Target, 'id'>) => {
  const response = await api.post<Target>('/targets', target);
  return response.data;
};

export const updateTarget = async (id: number, target: Omit<Target, 'id'>) => {
  const response = await api.put<Target>(`/targets/${id}`, target);
  return response.data;
};

export const deleteTarget = async (id: number) => {
  await api.delete(`/targets/${id}`);
};

// Funções relacionadas a TODOs
export const getAllTodos = async () => {
  const response = await api.get<Todo[]>('/todos');
  return response.data;
};

export const getTodoById = async (id: number) => {
  const response = await api.get<Todo>(`/todos/${id}`);
  return response.data;
};

export const createTodo = async (todo: Omit<Todo, 'id'>) => {
  const response = await api.post<Todo>('/todos', todo);
  return response.data;
};

export const updateTodo = async (id: number, todo: Omit<Todo, 'id'>) => {
  const response = await api.put<Todo>(`/todos/${id}`, todo);
  return response.data;
};

export const deleteTodo = async (id: number) => {
  await api.delete(`/todos/${id}`);
};
