import Copyright from "../../components/layout/copy-right";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Topheader from "../../components/layout/top-header";

export default function Home() {
  return (
    <>
      <Topheader/>
      <Header/>
        <div>
          <img className="sliderBanner" src="https://images4.alphacoders.com/130/1307940.png"/>
        </div>
      <Footer/>
      <Copyright/>
    </>
  )
}
