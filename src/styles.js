import styled from 'styled-components'
import img from './assets/rickandmorty.jpg'

export const Container = styled.div`
    background-image: url(${img}) ;
    background-repeat: no-repeat ;
    background-size: cover ;
    min-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
