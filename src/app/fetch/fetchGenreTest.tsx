import React from 'react';
import { useQuery } from '@tanstack/react-query/build/lib/useQuery';
import apiService from '../apiService';
import { APIKEY } from '../config';

const fetchGenreTest = async () => {
  const response = await apiService.get(`/genre/movie/list?api_key=${APIKEY}&language=en-US`);
  return response.data;
};

export default fetchGenreTest;
