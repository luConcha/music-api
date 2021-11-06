import React from 'react';
import { useGlobalContext } from './context';

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
            console.log(result);
            return (
              <article className='card' key={key}>
                <img
                  src={result.header_image_thumbnail_url}
                  alt={result.artist_names}
                />
                <h4>{result.title}</h4>
                <a href={result.url} className='btn'>
                  Lyrics
                </a>

                {/* <iframe
                  id='player'
                  type='text/html'
                  width='640'
                  height='360'
                  src='http://www.youtube.com/embed/Bg59q4puhmg?enablejsapi=1'
                  frameborder='0'
                ></iframe> */}
              </article>
            );
          })}
        </div>
      </article>
    </main>
  );
};

export default Songs;
