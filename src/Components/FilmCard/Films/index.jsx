import React from 'react'
import './style.css'
import PropTypes from 'prop-types'

const FilmCard = ({ title, image, description }) => {
    // console.log(props);

    return (
        <div className='card-box'>
            <h3>{title}</h3>
            <img src={image} />
            <p>{description}</p>
        </div>
    )
}

FilmCard.propTypes = {
    tile: PropTypes.string,
    image: PropTypes.string,
    descerption: PropTypes.string
}

export default FilmCard