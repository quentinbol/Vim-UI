import Avatar from './components/Avatar'
import Card from './components/Card'
import Typography from './components/Typography'

function App() {

  return (
    <div className="p-5">
      <Card children="Salut" size="xxl">
        <div className='flex items-center gap-5'>
          <Avatar src="https://picsum.photos/id/1033/400/400" size="lg" />
          <Typography type="h2" size='xl' weight='bold' color='secondary'>Hello World</Typography>
        </div>
      </Card>
    </div>
  )
}

export default App
