import { Container } from "./styles";

const Button = ({backgroundColor, children, color}) => {
    return(
        <Container backgroundColor={backgroundColor} color={color}>{children}</Container>
    )
}

export default Button;