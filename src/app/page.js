import Image from "next/image";
import Copyright from "../../components/layout/copy-right";
import Footer from "../../components/layout/footer";
import Header from "../../components/layout/header";
import Topheader from "../../components/layout/top-header";
import Card from "../../components/shared/card";

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
      <Card/>
    </>
  );
}
