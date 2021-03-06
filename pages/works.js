import { Container, Heading} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import univolen from '../public/images/works/univolen.png'

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      {/* <SimpleGrid columns={[1, 1, 2]} gap={6}> */}
        <Section>
          <WorkGridItem id="univolen" title="univolen" thumbnail={univolen}>
            A Wordpress application
          </WorkGridItem>
        </Section>
        {/* </SimpleGrid> */}
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
