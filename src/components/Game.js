import React from 'react'
//Styling
import styled from 'styled-components'
import { motion } from 'framer-motion'
//redux
import { useDispatch } from 'react-redux'
import { loadDetail } from '../redux/actions/detailAction'

const Game = ({ name, released, image, id }) => {
  const dispatch = useDispatch()

  const loadDetailhandler = () => {
    console.log(id)
    dispatch(loadDetail(id))
  }
  return (
    <StyledGame onClick={loadDetailhandler}>
      <h3>{name}</h3>
      <p>{released}</p>
      <img src={image} alt={name} />
    </StyledGame>
  )
}

const StyledGame = styled(motion.div)`
  min-height: 30h;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
`

export default Game
