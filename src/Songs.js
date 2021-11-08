import React from 'react';
import { useGlobalContext } from './context';
import { Link } from 'react-router-dom';

const Songs = () => {
  const { loading, hits } = useGlobalContext();
  return (
    <main>
      <div className='section-title'>
        <h1> {loading ? 'loading...' : 'Hits'}</h1>
      </div>
      <article className='songs'>
        <div className='container'>
          {hits.map((songs, key) => {
            const { result } = hits[key];
            return (
              <article className='card' key={key}>
                <img
                  src={result.header_image_thumbnail_url}
                  alt={result.artist_names}
                />
                <h4>{result.title}</h4>
                <Link to={`/songs/${result.id}`} className='btn'>
                  Details
                </Link>
              </article>
            );
          })}
        </div>
      </article>
    </main>
  );
};

export default Songs;
