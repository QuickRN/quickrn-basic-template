import { Container, Title, Indigo, SubText, Code } from './styles'

export default function Home() {
  return (
    <Container>
      <Title>
        This is a <Indigo>QuickRN</Indigo> template
      </Title>
      <SubText>
        Go to <Code> src/screens/Home/index.js </Code> to start editing.
      </SubText>
    </Container>
  )
}
