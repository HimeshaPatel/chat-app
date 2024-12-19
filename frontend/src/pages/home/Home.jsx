import MessageContainer from "../../components/messages/MessageContainer"
import Sidebar from "../../components/sidebar/Sidebar"

const Home = () => {
  return (
          <div className="flex sm:h-[450px] md:h-[500px] w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
<Sidebar />
<MessageContainer />
</div>
  )
}

export default Home