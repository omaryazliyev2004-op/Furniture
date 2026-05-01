import { Card, Button } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import SendIcon from "@mui/icons-material/Send"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Main from "./components/Main/Main"

function App() {
  return (
    <div className="max-w-[1560px]">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App