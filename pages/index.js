import Header from '../components/Header'
import Modal from '../components/Modal'
import Feed from '../components/Feed'

function Home() {
  return (
    <div className="h-screen overflow-y-scroll bg-gray-50 scrollbar-hide">
      <Header />
      <Feed />
      <Modal />
    </div>
  )
}

export default Home
