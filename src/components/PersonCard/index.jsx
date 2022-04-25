import { Container, LogoPro, Photo, Content, TextName, TextCity, TextInfo, WrapperButton} from "./styles"
import Button from "../Button"
import SkillsCard from "../SkillsCard"

const PersonCard = ({name, city, info}) => {
    
    return (
        <Container>
            <LogoPro>PRO</LogoPro>
            <Content>
                <Photo src={require("../../assets/rick-morty-5.jpg")} /> 
                <TextName>{name}</TextName>
                <TextCity>{city}</TextCity>
                <TextInfo>{info}</TextInfo>
            </Content>
            <WrapperButton>
            <Button backgroundColor="#face3f" color="#043d47" onClick={() =>{}}>Message</Button> 
            <Button backgroundColor="#221f38" color="#688fb8" onClick={() =>{}}>Following</Button>
            </WrapperButton>
            <SkillsCard />

        </Container>
    )
}

export default PersonCard