import './style.scss';

import PropTypes from 'prop-types';




function Header({title, money}) {

  return (
    <>
    <div className='header'>
   <header>
   <div className= "header-content">
    <h1 className="header-content__title">{title}</h1>
    <p className="header-content__info">{money}</p>
    </div>
    </header>
    </div>
   </>
  );
}

Header.propTypes = {
title: PropTypes.string.isRequired,
money : PropTypes.string.isRequired,
};

export default Header;