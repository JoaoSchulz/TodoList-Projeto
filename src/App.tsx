import { Content } from "./pages/ToDo/components/Content"
import { Header } from "./pages/ToDo/components/Header"
import { ToDoContextProvider } from "./contexts/ToDo"
import { ToastProvider } from "./contexts/Toast"

function App() {

  return (
    <>
      <Header />
      <ToastProvider>
        <ToDoContextProvider>
          <Content />
        </ToDoContextProvider>
      </ToastProvider>
    </>

  )
}

export default App
