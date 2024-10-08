import Header from '../Components/Header'
import Footer from '../Components/Footer'

export default function DefaultLayout({ children }) {
    return(
        <>
            <Header/>

            <main>{children}</main>

            <Footer/>
        </>
    )
}
