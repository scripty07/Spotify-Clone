import { useTranslation } from 'react-i18next';

import { useGetPostsQuery } from '../services/baseApi';

const Sample = () => {
  const { t } = useTranslation();
  const { data, error, isSuccess } = useGetPostsQuery();

  return (
    <div style={{ maxWidth: '500px', margin: '1rem auto' }}>
      <h3>{t('Components.Sample Component')}</h3>
      {isSuccess && (
        <ul>
          {data?.map((post) => (
            <li>{post.title}</li>
          ))}
        </ul>
      )}
      {error && <h5 style={{ color: 'red' }}>Something went wrong</h5>}
    </div>
  );
};

export default Sample;
