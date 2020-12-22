import './App.css';
import Sidenav from './components/Sidenav';

function MainHeader() {
  return (
    <section className="px-7 py-3 bg-white w-full flex flex-row justify-between">
      <h3 className="self-center font-bold">OpenC</h3>
      <input
        type="text"
        value={null}
        placeholder="Search"
        style={{ width: "350px" }}
        className="bg-gray-200 rounded-md py-0.5 px-3" />
      <i className="fa fa-bell self-center text-gray-700"></i>

      <div className="flex flex-row self-center">
        <p className="mr-3 text-xs self-center font-bold text-gray-600">Elvis Agbesi</p>
        <img src="./me.jpg" width="30" height="30" className="rounded-full" />
      </div>
    </section>
  )
}

function HeroStat(props) {
  return (
    <div className="flex flex-col mr-14">
      <h6 className="text-sm font-bold text-white">{props.value}</h6>
      <p className="text-xs font-normal text-white self-center">{props.title}</p>
    </div>
  )
}

function Hero() {
  return (
    <section className="relative w-full rounded-md h-64 px-10 mb-3 shadow-lg">
      <div className="absolute" style={{ zIndex: 300 }}>
        <h3 className="text-white  mt-10 text-3xl font-bold" >Solar eclipses: <br /> When is the next one?</h3>

        <aside className="flex flex-row mt-8">
          <HeroStat title="questions" value="1,360" />
          <HeroStat title="answers" value="615" />
          <HeroStat title="views" value="90k" />
        </aside>

        <aside className="flex flex-row mt-8">
          <button className="bg-red-400 text-white px-4 py-2 rounded-md text-xs mr-4 font-medium">Ask a question</button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md text-xs mr-4 font-medium"><i className="fa fa-copy mr-1"></i> Subscribe <small className="bg-red-900 rounded-md ml-2 px-2 py-0.5 text-white">3235</small></button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md text-xs mr-4 font-medium"> <i class="fa fa-hand-o-left mr-1"></i> I'm an expert</button>
        </aside>
      </div>
      <img src="./galaxy.jpg" className="absolute rounded-md top-0 left-0 object-cover w-full h-full" />
    </section>
  )
}

function Tabs(props) {
  return (
    <section className="w-full h-12 rounded-md bg-white shadow-lg">
      <nav className="flex flex-row h-full px-3 justify-between">
        <ul className="list-none flex flex-row self-center text-xs font-medium pl-7 text-gray-500">
          <li className="mr-6">Answers</li>
          <li className="mr-6">Questions</li>
          <li className="mr-6">Experts</li>
          <li className="mr-6">Related Tags</li>
        </ul>

        <span className="flex flex-row text-xs">
          <p className="self-center mr-3 text-gray-500 font-medium" style={{ fontSize: "9px" }}>Sorting</p>
          <select className="self-center bg-gray-100 rounded-lg px-2 py-1 w-28">
            <option>Rating</option>
          </select>
        </span>
      </nav>
    </section>
  );
}

function Tag(props) {
  return (
    <span className="py-1 px-3 mx-2 bg-gray-100 rounded-xl font-semibold text-gray-500" style={{ fontSize: "10px" }}>{props.name}</span>
  )
}

function ContentItem(props) {
  return (
    <div className="bg-white px-3 py-2 rounded-md flex flex-col shadow-md mr-4 mb-2 justify-between">

      <div className="flex flex-row">
        <div className="flex flex-col text-gray-200 mr-3">
          <i class="fa fa-chevron-up self-center" aria-hidden="true"></i>
          <p className="text-xs self-center" style={{ fontSize: "9px" }}>216</p>
          <i class="fa fa-chevron-down self-center" aria-hidden="true"></i>
        </div>

        <div className="mr-auto">
          <p className="font-semibold text-gray-600 text-sm">It is possible to survive in a black hole?</p>
          <aside className="flex flex-row mt-3">
            <Tag name="Food" />
            <Tag name="Querying" />
            <Tag name="Pace" />
          </aside>
        </div>

        <div className="border border-gray-400 p-2 rounded-md">
          <h3 className="text-center font-bold text-gray-700">24</h3>
          <h3 className="text-center text-xs">answers</h3>
        </div>
      </div>

      <div className="relative w-full rounded-md h-40 px-10 mb-3 mt-3">
        <img src="./galaxy.jpg" className="absolute rounded-md top-0 left-0 object-cover w-full h-full" />
      </div>

    </div>
  )
}

function App() {
  return (
    <main className="flex flex-row w-full h-full bg-gray-200">
      <div className="relative">
        <Sidenav />
      </div>

      <div className="flex flex-col w-full">
        <MainHeader />
        <div className="p-6 w-full h-full">
          <Hero />
          <Tabs />

          <section className="w-full mt-4 flex flex-row">
            <div className="w-2/3">
              <ContentItem />
              <ContentItem />
            </div>
            <div className="bg-white px-3 py-2 rounded-md shadow-md w-1/3">
              Related
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
