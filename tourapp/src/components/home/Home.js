import './Home.css'
import Tours from "../tours/Tours"
import Header from "../header/Header"
import Footer from "../footer/Footer"
const data = require ('./../../data/db.json');


function Home() {
    return (
        <>
            <Header />
            <Tours arrayData={data} />
            <Footer />

        </>

    )
}
export default Home;

