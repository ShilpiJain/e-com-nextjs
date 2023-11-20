import Image from "next/image";
import Copyright from "../../components/layout/copy-right";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Topheader from "../../components/layout/top-header";
import Card from "../../components/shared/card";
import Button from "../../components/shared/button";

export default function Home() {
  return (
    <>
      <Image
        src="https://images4.alphacoders.com/130/1307940.png"
        layout="responsive"
        width={100}
        height={500}
        loading={"lazy"}
        alt="Picture of the author"
      />
      <div className="continer">
        <h1>Autonomous Coder Collection</h1>
        <p>
          Boost your coding efficiency with our Autonomous Coder collection. Our
          products are engineered to enhance focus and optimize workflow.
        </p>
        <Card />
        <Card />
      </div>
      <div className="continer text-center">
        <Button text={"View All"} />
      </div>

      <Image
        src="https://images4.alphacoders.com/130/1307940.png"
        layout="responsive"
        width={100}
        height={500}
        loading={"lazy"}
        alt="Picture of the author"
      />
      {/* one row in block starts */}
      <div className="continer">
        <h1>Autonomous Coder Collection</h1>
        <p>
          Boost your coding efficiency with our Autonomous Coder collection. Our
          products are engineered to enhance focus and optimize workflow.
        </p>
        <Card />
        <div className="continer text-center">
          <Button text={"View All"} />
        </div>
      </div>
      {/* one row in block ends */}
      {/* two row in block starts */}
      <div className="continer">
        <h1>Autonomous Coder Collection</h1>
        <p>
          Boost your coding efficiency with our Autonomous Coder collection. Our
          products are engineered to enhance focus and optimize workflow.
        </p>
        <Card />
        <Card />
      </div>
      <div className="continer text-center">
        <Button text={"View All"} />
      </div>
      {/* two row in block ends */}
      {/* grey block starts */}
      <div className="grey-background">
        <div className="continer">
          <h1>Autonomous Coder Collection</h1>
          <p>
            Boost your coding efficiency with our Autonomous Coder collection.
            Our products are engineered to enhance focus and optimize workflow.
          </p>
          <Card />

          <div className="text-center">
            <div className="continer">
              <Button text={"View All"} />
            </div>
          </div>
        </div>
      </div>
      {/* grey block ends */}
    </>
  );
}
