import BigSlider from "@/components/shared/BigSlider";
import Header from "@/components/shared/Header";
import SliderCollections from "@/components/shared/SliderCollections";
import About from "@/components/shared/about";
import CatalogUpdates from "@/components/shared/catalog-updates";
import CompanyServices from "@/components/shared/company-services";
import PopularProducts from "@/components/shared/popular-products";
import Services from "@/components/shared/services";

export default function Home() {
  return (
    <div className="">
      <BigSlider/>
      <Services/>
      <SliderCollections/>
      <CatalogUpdates/>
      <PopularProducts />
      <CompanyServices/>
      <About/>
    </div>
  );
}
