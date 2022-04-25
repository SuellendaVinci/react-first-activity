import { Container } from "./styles";

const Button = ({backgroundColor, children, color, onClick}) => {

    return(
        <Container onClick={onClick} backgroundColor={backgroundColor} color={color}>{children}</Container>
    )
}

export default Button;