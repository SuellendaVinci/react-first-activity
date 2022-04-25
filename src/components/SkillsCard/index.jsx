import { Container, Title, SkillButton, WrapperSkills } from "./styles";

const SkillsCard = () => {
    return(
        <Container>
            <Title>SKILLS</Title>
            <WrapperSkills>
                <SkillButton>HTML</SkillButton>
                <SkillButton>CSS</SkillButton>
                <SkillButton>JavaScript</SkillButton>
                <SkillButton>React</SkillButton>
                <SkillButton>Git</SkillButton>
                <SkillButton>English</SkillButton>
                <SkillButton>German</SkillButton>
            </WrapperSkills>
        </Container>
    )
}

export default SkillsCard;