import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Avatar from './stories/Avatar'
import Card from './stories/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="">
      <Card children="Salut" size="xxl">
        <p></p>
        <Avatar src="https://picsum.photos/id/1033/400/400" size="lg" />
      </Card>
    </div>
  )
}

export default App
