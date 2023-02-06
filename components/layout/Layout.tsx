import Header from '../../components/layout/header/Header'

export default function Layout({ preview, children }) {
    return (
      <>

        <div className="App">
          <Header/>
          <main>{children}</main>
        </div>
      </>
    )
  }