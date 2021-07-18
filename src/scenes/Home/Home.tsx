import { FC, useEffect, useState } from 'react';
import { fetchData } from '../../api';
import { CardRow } from '../../components';

export const Home: FC<{}> = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchData()
      .then(setData)
      .catch(e => setError(true));
  }, []);

  return <CardRow data={data} error={error} />;
};
