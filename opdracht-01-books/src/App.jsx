import './App.css'
import BookList from './components/BookList'
import Header from './components/Header'
import Layout from './components/Layout'

function App() {

  return (
    <Layout>
      <Header />
      <h1>Opdracht 1 - Books</h1>
      <BookList />
    </Layout>
  )
}

export default App
