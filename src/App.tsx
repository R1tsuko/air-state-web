import { Provider } from "react-redux"
import { MainPage } from "./pages/MainPage"
import { store } from "./store/store"

function App() {

  return (
    <Provider store={store}>
      <div className="flex h-screen w-screen items-center justify-center overflow-x-hidden bg-white">
        <MainPage />
      </div>
    </Provider>
  )
}

export default App
