import './styles/index.scss'
import Home from './components/home/Home'
import Services from './components/services/Services'
import Info from './components/info/Info'
import Opinions from './components/opinions/Cards'
import FooterPage from './components/footer/FooterPage'
import Form from './components/form/Form'
function App() {
  return (
    <div className="App">
      <Home/>
      <Services/>
      <Info/>
      <Opinions/>
      <Form/>
      <FooterPage/>
    </div>
  );
}

export default App;
