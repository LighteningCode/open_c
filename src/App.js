import './App.css';
import Sidenav from './components/Sidenav';

function MainHeader() {
  return (
    <section className="px-7 py-3 bg-white w-full flex flex-row">
      <h3 className="self-center text-lg font-bold mr-4">OpenC</h3>
      <input
        type="text"
        value={null}
        placeholder="Search"
        style={{ width: "350px" }}
        className="bg-gray-200 rounded-md py-0.5 px-3 mr-auto" />

      <i className="fa fa-bell self-center text-gray-700 mx-2"></i>
      <div className="flex flex-row self-center">
        <p className="mr-3 text-lg self-center font-bold text-gray-600">Elvis Agbesi</p>
        <img src="./me.jpg" width="30" height="30" className="rounded-full" />
      </div>

    </section>
  )
}

function HeroStat(props) {
  return (
    <div className="flex flex-col mr-14">
      <h6 className="text-xl font-bold text-white">{props.value}</h6>
      <p className="text-base font-thin text-white self-center">{props.title}</p>
    </div>
  )
}

function Hero() {
  return (
    <section style={{height:"350px"}} className="relative w-full rounded-md h-64 px-10 mb-3 shadow-lg">
      <div className="absolute flex flex-col justify-between h-full py-6" style={{ zIndex: 300 }}>
        <h3 className="text-white  mt-5 text-5xl font-bold" >Solar eclipses: <br /> When is the next one?</h3>

        <aside className="flex flex-row mt-5">
          <HeroStat title="questions" value="1,360" />
          <HeroStat title="answers" value="615" />
          <HeroStat title="views" value="90k" />
        </aside>

        <aside className="flex flex-row mt-8">
          <button className="bg-red-400 text-white px-4 py-2 rounded-md text-sm mr-4 font-medium">Ask a question</button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm mr-4 font-medium"><i className="fa fa-copy mr-1"></i> Subscribe <small className="bg-red-900 rounded-md ml-2 px-2 py-0.5 text-white">3235</small></button>
          <button className="bg-white text-blue-900 px-4 py-2 rounded-md text-sm mr-4 font-medium"> <i class="fa fa-hand-o-left mr-1"></i> I'm an expert <small className="bg-red-900 rounded-md ml-2 px-2 py-0.5 text-white">232</small></button>
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
        <ul className="list-none flex flex-row self-center cursor-pointer text-xs font-medium pl-7 text-gray-500">
          <li className="mr-6">Answers</li>
          <li className="mr-6">Questions</li>
          <li className="mr-6 block">Experts <div className="h-0.5 w-full mt-1 bg-blue-800 rounded-md"></div></li>
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
    <span className="py-1 px-3 mx-2 cursor-pointer bg-gray-100 hover:bg-gray-300 transition-colors duration-300 rounded-xl font-semibold text-gray-500 hover:text-gray-700" style={{ fontSize: "10px" }}>{props.name}</span>
  )
}

function ContentItem({ upvotes, question, tags, answersCount, imgSrc }) {
  return (
    <div className="bg-white px-3 py-2 rounded-md flex flex-col shadow-md mr-4 mb-2 justify-between">

      <div className="flex flex-row">
        <div className="flex flex-col text-gray-300 hover:text-gray-500 cursor-pointer mr-3">
          <i class="fa fa-chevron-up self-center" aria-hidden="true"></i>
          <p className="text-xs self-center" style={{ fontSize: "12px" }}>{upvotes}</p>
          <i class="fa fa-chevron-down self-center" aria-hidden="true"></i>
        </div>

        <div className="mr-auto">
          <p className="font-semibold text-gray-600 text-xl">{question}</p>
          <aside className="flex flex-row mt-3">
            {tags}
          </aside>
        </div>
    
        <div className="border border-gray-300 px-4 py-2 rounded-md">
          <h3 className="text-center text-xl font-bold text-gray-700">{answersCount}</h3>
          <h3 className="text-center text-xs">answers</h3>
        </div>
      </div>

      <div className="relative w-full rounded-md h-40 px-10 mb-3 mt-3">
        <img src={imgSrc} className="absolute rounded-md top-0 left-0 object-cover w-full h-full" />
      </div>

    </div>
  )
}

function RelatedQuestion(props) {
  return (
    <div className="flex flex-row mt-2">
      <div className="flex flex-col text-gray-300 mr-3">
        <i class="fa fa-chevron-up self-center" aria-hidden="true" style={{ fontSize: "9px" }}></i>
        <p className="text-xs self-center" style={{ fontSize: "9px" }}>{props.count}</p>
        <i class="fa fa-chevron-down self-center" aria-hidden="true" style={{ fontSize: "9px" }}></i>
      </div>

      <div className="self-center">
        <p style={{ fontSize: "9px" }}>{props.question}</p>
        <button style={{ fontSize: "9px" }} className="px-2 py-0.5 bg-blue-200 rounded-md">Reply</button>
      </div>
    </div>
  );
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
              <ContentItem
                imgSrc="./blackhole.jpg"
                answersCount="30"
                tags={(
                  <>
                    <Tag name="space" />
                    <Tag name="galaxies" />
                    <Tag name="planet" />
                  </>
                )
                }
                question="Can we survive a blackhole?"
                upvotes="50"
              />

              <ContentItem
                imgSrc="./earth.jpg"
                answersCount="27"
                tags={(
                  <>
                    <Tag name="night" />
                    <Tag name="earth" />
                    <Tag name="planet" />
                  </>
                )
                }
                question="How dark is the night side of the earth?"
                upvotes="125"
              />
             
            </div>

            <div className="bg-white px-3 py-2 rounded-md shadow-md w-1/3">
              <nav className="flex flex-row justify-between mb-2">
                <p className="font-semibold text-xs self-center">Related questions</p>
                <button className="text-xs text-blue-500 self-center transition-all p-1 rounded-md hover:bg-blue-400 hover:text-white">View <i class="fa fa-chevron-right" style={{ fontSize: "9px" }} aria-hidden="true"></i></button>
              </nav>
              <hr />

              <div>
                <RelatedQuestion count="30" question="How to the galaxies move around each other with so much precision?" />
                <RelatedQuestion count="12" question="Why is the sky blue?" />
                <RelatedQuestion count="2" question="Where does the sun come from?" />
              </div>

            </div>

          </section>
        </div>
      </div>
    </main>
  );
}

export default App;
