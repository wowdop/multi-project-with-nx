import { Button, Flex } from '@mpnx/atom'

const Index = () => {
  return (
    <div>
      <h1>Math for Kids</h1>

      <Flex>
        <Button kind="primary" color="primary">
          Join now!
        </Button>
        <Button kind="primary" color="primary">
          Read more
        </Button>
        <Button kind="primary" color="primary">
          Call
        </Button>
      </Flex>
    </div>
  )
}

export default Index
