import CompanyDesc from "./layout/CompanyDesc";
import MainBanner from "./layout/MainBanner";
import Navbar from "./layout/Navbar";
import Products from "./layout/Products";

export const preferredRegion = ["fra1"];

export default function Home() {
  return (
    <>
      <Navbar />
      <MainBanner />
      <CompanyDesc />
      <Products />
    </>
  );
}
