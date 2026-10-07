import Home from "./Home"

function App() {


  return (
    <div>
    <nav>
      <ul>
        <li><a href="default.asp">Home</a></li>
        <li><a href="news.asp">News</a></li>
        <li><a href="contact.asp">Contact</a></li>
        <li><a href="about.asp">About</a></li>
      </ul>
      </nav>

    {/* egyéb */}

    <Home/>

    <footer>
      <p>Footer</p>
    </footer>
    </div>
  )
}

export default App
