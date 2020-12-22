import './App.css';
import Sidenav from './components/Sidenav';

function MainHeader() {
  return (
    <section className="px-7 py-3 bg-white w-full flex flex-row justify-between">
      <h3 className="self-center font-bold">OpenC</h3>
      <input
        type="text"
        value={null}
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

function App() {
  return (
    <main className="flex flex-row w-full h-full bg-gray-200">
      <Sidenav />
      <div className="flex flex-col w-full">
        <MainHeader />
      </div>
    </main>
  );
}

export default App;
