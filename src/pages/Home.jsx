import React from "react";
import "../style/Home.css";
import Slider from "react-slick";
import ArrowForwar from "@mui/icons-material/ArrowForwardRounded";
import ArrowBack from "@mui/icons-material/ArrowBackRounded";
import Products from "../contexts/Products";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow: <ArrowForwar />,
    nextArrow: <ArrowBack />,
  };

  return (
    //  home
    <div className="home">
      {/* home 배너 */}
      <div className="home_banner_box">
        <img
          className="home_banner"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2022/GiftGuides/Fuji_holiday_header_desktop_3000x250.jpg"
          alt=""
        ></img>
      </div>

      {/* home 슬라이드 배너 */}
      <div home_slide_box>
        <Slider {...settings}>
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/GiftHub/2021_Holiday_events_CategoryTile_desktop_2x1_GiftHub_Home_EN.jpg"
            alt=""
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/GiftHub/2021_Holiday_events_CategoryTile_desktop_2x1_GiftHub_Fashion_EN.jpg"
            alt=""
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/GiftHub/2021_Holiday_events_CategoryTile_desktop_2x1_GiftHub_Electronics_EN.jpg"
            alt=""
          />
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/Holiday/GiftHub/2021_Holiday_events_CategoryTile_desktop_2x1_GiftHub_Toys_EN.jpg"
            alt=""
          />
        </Slider>
      </div>

      <div className="home_category">{/* 카테고리 리스트 만들기 */}</div>

      <div className="home_products">
        <section className="product_section">
          <div>
            <Products
              title="아마존 에나멜 냄비"
              price={101000}
              image="https://m.media-amazon.com/images/I/41m0Sjw+yeL._AC_SY164_.jpg"
              rating={4}
            />
          </div>
          <div>
            <Products
              le="인조 크리스마스 리스"
              price={45000}
              image="https://m.media-amazon.com/images/I/61jRlyYWg8L._AC_SY164_.jpg"
              rating={4}
            />
          </div>
          <div>
            <Products
              le="Joy Jolt Pila 이중 단열 커피 유리 머그잔"
              price={25000}
              image="https://m.media-amazon.com/images/I/31itH6tGQbL._AC_SY164_.jpg"
              rating={5}
            />
          </div>
          <div>
            <Products
              title="SWEEJAR 베이킹용 세라믹 파이 팬 "
              price={37800}
              image="https://m.media-amazon.com/images/I/316O5OEInvS._AC_SY164_.jpg"
              rating={5}
            />
          </div>
          <div>
            <Products
              title="Eddie Bauer 사슴 쿠션"
              price={32000}
              image="https://m.media-amazon.com/images/I/41PXOoVzRRL._AC_SY164_.jpg"
              rating={3}
            />
          </div>
          <div>
            <Products
              title="La JOLY MUSE 프레이저 천연 향수"
              price={43900}
              image="https://m.media-amazon.com/images/I/410RqtEf-vL._AC_SY164_.jpg"
              rating={5}
            />
          </div>
          <div>
            <Products
              title="스톤라인 화이트 도자기 16개 세트, 4인용"
              price={170500}
              image="https://m.media-amazon.com/images/I/41XDIhH-bPL._AC_SY164_.jpg"
              rating={4}
            />
          </div>
          <div>
            <Products
              title="VASAGLE 바 카트, 주방 서빙 카트"
              price={145000}
              image="https://m.media-amazon.com/images/I/411bu3M58EL._AC_SY164_.jpg"
              rating={5}
            />
          </div>
          <div>
            <Products
              title="아루스 하이랜드 컬렉션 타탄 담요"
              price={42100}
              image="https://m.media-amazon.com/images/I/41+LOs5u+rL._AC_SY164_.jpg"
              rating={5}
            />
          </div>
          <div>
            <Products
              title="모던 하누카 메노라 촛대"
              price={43000}
              image="https://m.media-amazon.com/images/I/41aECvmAD8L._AC_SY164_.jpg"
              rating={4}
            />
          </div>
          <div>
            <Products
              title="BALIN DESIGNS 2층 아카시아 서빙 트레이"
              price={6300}
              image="https://m.media-amazon.com/images/I/41tXlsMwAyL._AC_SY164_.jpg"
              rating={4}
            />
          </div>
          <div>
            <Products
              title="KAF 홈키친 프린트 페브릭 식기 매트"
              price={18240}
              image="https://m.media-amazon.com/images/I/51oxfjlr73L._AC_SY164_.jpg"
              rating={4}
            />
          </div>
          <div>
            <Products
              title="3.5미터 던힐 퍼 화이트 라이트 트리ㅁ"
              price={265000}
              image="https://m.media-amazon.com/images/I/51OcWOmfVsL._AC_SY164_.jpg"
              rating={5}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
