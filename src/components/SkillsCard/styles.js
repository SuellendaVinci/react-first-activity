import styled from "styled-components";

export const Container = styled.div`
  background-color: #201a38;
  padding-left: 8px;
  display: flex;
  flex-direction: column;
  padding-top: 16px;
`;

export const WrapperSkills = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 10px;
  padding-bottom: 10px;
`

export const Title = styled.span`
  border: 1px solid #231f3d;
  border-radius: 3px;
  color: #a49fbd;
  font-size: 10px;
  height: 12px;
  font-family: 'Times New Roman', Times, serif;
  padding: 0 2px 0 2px;
  width: fit-content;
`

export const SkillButton = styled.div`
  border: 1px solid #231f3d;
  border-radius: 3px;
  color: #a49fbd;
  font-size: 8px;
  font-family: 'Times New Roman', Times, serif;
  padding: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
`;
