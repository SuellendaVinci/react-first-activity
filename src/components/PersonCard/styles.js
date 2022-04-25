import styled from 'styled-components'

export const Container = styled.div`
    background-color:  #231e3c;
    width: 210px;
    min-height: 290px;
    position: relative;
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.7);
    border-radius: 3px;
    margin-top: 10px ;
`

export const LogoPro = styled.div`
    position: absolute;
    background-color: #face3f;
    width: 32px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #150501;
    left: 16px;
    z-index: 10;
    font-size: 10px;
    border: 1px solid #251b09;
    border-radius: 2px;
`

export const Photo = styled.img`
    display: block;
    border-radius: 50%;
    padding: 4px;
    border: 1px solid #4d687d;
    width: 85px;
    height: 85px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 130px;
    align-items: center;
    text-align: center;
    font-family: monospace;
`

export const TextName = styled.span`
    color: #a49fbd;
    font-size: 12px;
    margin-top: 8px;
    margin-bottom: 4px;
    font-weight: bold;

`
export const TextCity = styled.span`
    color: #a49fbd;
    font-size: 9px;
    margin-bottom: 8px;
`
export const TextInfo = styled.div`
    color: #a49fbd;
    font-size: 10px;
`
export const WrapperButton = styled.div`
    display: flex;
    margin-top: 12px;
    margin-bottom: 20px;
`
