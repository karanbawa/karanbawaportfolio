import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => (
  <Layout title="univolen">
    <Container>
      <Title>
        Univolen <Badge>2018-</Badge>
      </Title>
      <P>
        A wordpress website for client which deals in  industrial paint
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://www.univolen.com/" target="_blank">
          https://www.univolen.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux/iOS/Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Wordress</span>
        </ListItem>
      </List>

      <WorkImage src="/images/works/univolen.png" alt="univolen" />
      <WorkImage src="/images/works/univolen.png" alt="univolen" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
