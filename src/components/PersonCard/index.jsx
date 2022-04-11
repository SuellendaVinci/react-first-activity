import { Container, LogoPro, Photo, Content, TextName, TextCity, TextInfo, WrapperButton} from "./styles"
import Button from "../Button"
import SkillsCard from "../SkillsCard"

const PersonCard = () => {
    
    return (
        <Container>
            <LogoPro>PRO</LogoPro>
            <Content>
                <Photo src={require("../../assets/photo_suellen.jpg")} /> 
                <TextName>Suellen Camargo</TextName>
                <TextCity>CURITIBA</TextCity>
                <TextInfo>Web Full Stack Developer</TextInfo>
            </Content>
            <WrapperButton>
            <Button backgroundColor="#29bdcc" color="#087285">Message</Button> 
            <Button backgroundColor="#221f38" color="#344a62">Following</Button>
            </WrapperButton>
            <SkillsCard />

        </Container>
    )
}

export default PersonCard