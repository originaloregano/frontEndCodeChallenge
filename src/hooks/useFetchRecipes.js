import { useState, useEffect } from 'react';
import hellofreshBox from '../data/BoxofRecipes';

const useFetchRecipes = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(hellofreshBox);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [data]);

  return { data, loading };
};

export default useFetchRecipes;
