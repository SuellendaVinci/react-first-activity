import PersonCard from '../PersonCard'
import { peopleData } from '../../peopleData'
import {Container} from './styles'

export const PersonCardList = () => (

    <>
    <Container>
      {peopleData.map((person, index) => {
          return <PersonCard key={index} name={person.name} city={person.city} info={person.info}/>
      })}
      </Container>
    </>



)