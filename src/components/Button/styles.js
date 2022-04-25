import styled from 'styled-components'

export const Container = styled.div`
    padding: 8px 16px 8px 16px;
    font-family: 'Times New Roman', Times, serif;
    font-size: 8px;
    color: #a49fbd;
    border: 1px solid #a49fbd;
    border-radius: 2px;
    background-color: ${({backgroundColor}) => backgroundColor};
    color: ${({color}) => color}; 
    margin-right: 4px;
    cursor: pointer;
`
