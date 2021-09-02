import React from 'react'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
//redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../redux/actions/detailAction'
import { Link } from 'react-router-dom'

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch()

  const loadDetailhandler = () => {
    console.log(id)
    dispatch(loadDetail(id))
  }
  return (
    <StyledGame onClick={loadDetailhandler}>
      <Link to={`game/${id}`}>
        <h3>{name}</h3>
        <p>{released}</p>
        <img src={image} alt={name} />
      </Link>
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30h;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  cursor: pointer;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
