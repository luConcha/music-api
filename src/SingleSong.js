import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Loading from './Loading';

const SingleSong = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [info, setInfo] = useState(null);
  const [error, setError] = useState({ show: false, msg: '' });
  const url_api = `https://genius.p.rapidapi.com/songs/${id}`;

  var options = {
    method: 'GET',
    url: url_api,
    headers: {
      'x-rapidapi-host': 'genius.p.rapidapi.com',
      'x-rapidapi-key': process.env.REACT_APP_GENIUS_API_KEY,
    },
  };

  const fetchData = async (options) => {
    try {
      setLoading(true);
      const response = await axios(options).catch((err) => console.log(err));
      if (response) {
        const data = response.data.response.song;
        setInfo(data);
        setError({ show: false, msg: '' });
        setLoading(false);
      } else {
        setError({ show: true, msg: info.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(options);
  }, [id]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section className='section'>
      <div className='section-title'>
        <h1> {loading ? 'loading...' : 'Details'}</h1>
      </div>
      <div>
        {error.show && <div className='error'>{error.msg}</div>}
        <div className='info-margin'>
          <Link to='/' className='btn'>
            Back Home
          </Link>
        </div>
        <div className='info-margin'>
          <h4>Album</h4>
          {info.album.name}
        </div>
        <div className='info-margin'>
          <h4>Title</h4>
          {info.title}
        </div>

        {/* {info.description.dom.children.map((item, index) => {
            console.log(item.children);
            item.children.map((childItem, childIndex) => {
              return <p key={childIndex}>{childItem}</p>;
            });
            return <p key={index}>{item.children}</p>;
          })} */}
        <div className='info-margin'>
          <h4>Lyrics</h4>
          <a href={info.url} className='btnMedia'>
            {info.url}
          </a>
        </div>
        <div className='info-margin'>
          {info.media.map((item, index) => {
            var youtubeID = item.url.split('=')[1];
            return item.provider === 'youtube' ? (
              <div key={index} className='info-margin'>
                <h4>{item.provider}</h4>
                <iframe
                  title={youtubeID}
                  width='560'
                  height='315'
                  src={`https://www.youtube.com/embed/${youtubeID}`}
                  frameBorder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <div key={index} className='info-margin'>
                <h4>{item.provider}</h4>
                <a href={item.url} className='btnMedia'>
                  {item.url}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SingleSong;
