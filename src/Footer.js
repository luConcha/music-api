import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section className='footer'>
      <div className='row'>
        <div className='col-six tab-full pull-right social'>
          <ul className='footer-social'>
            <li>
              <a href='https://twitter.com/lucy_dev9'>
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href='https://www.linkedin.com/in/lucyconcha'>
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href='https://github.com/luConcha'>
                <FaGithub />
              </a>
            </li>
          </ul>
        </div>
        <div className='col-six tab-full'>
          <div className='copyright'>
            <span>© Copyright LCProjects 2021.</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
