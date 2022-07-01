import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import React, { useRef, useState } from "react";
import CardItem from "./CardItem";
import "./MainSection.css";

function MainSection() {
  return (
    <div>
      <img
        className="Banner-image"
        src="https://cdn.shopify.com/s/files/1/2090/3151/files/banner_7886d865-67e0-4976-beed-8cb7a0fadf6b.jpg?v=1654611871"
      ></img>
      <i class="fa-thin fa-air-conditioner"></i>
      <div className="s">
        <Swiper
          slidesPerView={7}
          spaceBetween={5}
          slidesPerGroup={7}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          <div className="a">
            <SwiperSlide>
              <div className="b ">
                <img
                  className="c"
                  src="https://assets.winni.in/c_limit,dpr_1,fl_progressive,q_80,w_1000/31009_amazing-designer-rakhi-set.jpeg"
                ></img>
                <h1 className="a-h1">RAKHI</h1>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                ></img>
                <h1 className="a-h1">GOD</h1>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="data:image/jpeg;base64,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"
                ></img>
                <h1 className="a-h1">GIFT</h1>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="data:image/png;base64,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"
                ></img>
                <h1 className="a-h1">ORDER</h1>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="data:image/jpeg;base64,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"
                ></img>
                <h1 className="a-h1">DECORATION</h1>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="https://media.istockphoto.com/vectors/01open-book-and-creative-paper-airplanes-teamwork-paper-art-style-vector-id1189849703?k=20&m=1189849703&s=612x612&w=0&h=ViTOSts22Be3PJY0HD_2dLSF31VE5BgD0Sm7ZB96DQ8="
                ></img>
                <h1 className="a-h1">BOOK</h1>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="https://cdn.shopify.com/s/files/1/2090/3151/files/New_Project_1.jpg?v=1655966073"
                ></img>
                <h1 className="a-h1">GANPATI</h1>{" "}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                ></img>
                <h1 className="a-h1">GANPATI</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                ></img>
                <h1 className="a-h1">GANPATI</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="b">
                <img
                  className="c"
                  src="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                ></img>
                <h1 className="a-h1">GANPATI</h1>
              </div>
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
      <section className="cards-section">
        <div className="card_box">
          <h2 className="card_title">
            Rakhi & Rakhi <span className="card_gift_spell">Gifts</span>
          </h2>
          <a className="view_button_link" href="">
            <button className="view_button ">VIEW ALL</button>
          </a>
        </div>

        <div className="Rēctangle-Cards">
          <div className="Crads-Container">
            <div className="card-content">
              <CardItem
                imgsrc="https://static.toiimg.com/thumb/70672090.cms?width=680&height=512&imgsize=695460"
                info="Eco-Friendly Plantable  "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://media.istockphoto.com/photos/rakhi-for-raksha-bandhan-festival-india-stock-image-picture-id1262683528?k=20&m=1262683528&s=612x612&w=0&h=pvseCByC-mqYQkWPxlGSPLqekKyMlK4IKFwBB1clAOA="
                info="Silver Bhabhi "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDISfTmcfjhCxqSUcJVGpTnhWdqLx4pHI-XHCWDqwUMZqVZdQvX8Xip8vv3R8PfPNokE&usqp=CAU"
                info="Eco-Friendly Plantable "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://c.ndtvimg.com/2020-07/46qbptl8_rakhi-650_650x400_28_July_20.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
                info="Eco-Friendly Rakhi "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG6Nj7HxFT1lSJA7mJRPDThlAi4CP27c8kdMTg2QJ5BRASmXoECFaSsReyN-XG6H0yVg&usqp=CAU"
                info="My Forever ATM Rakhi"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/08/19/157121-untitled-design-2021-08-19t181138912.jpg?itok=bmEbslcR"
                info="Rudraksha Bhaiya Bhabhi Rakhi"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cards-section">
        <div className="card_box">
          <h2 className="card_title">
            Healing <span className="card_gift_spell">Crystals </span>
          </h2>
          <a className="view_button_link" href="">
            <button className="view_button ">VIEW ALL</button>
          </a>
        </div>

        <div className="Rēctangle-Cards">
          <div className="Crads-Container">
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/51lfH5VrSFL._UL1200_.jpg"
                info=" Natural Crystal Bracelet "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://images.squarespace-cdn.com/content/v1/58c88bd2b8a79b83fe263ea0/1535373373942-MGL4SOED65LH2TUCE7MQ/Chakra+Stone+Chip+bracelet+2.jpg?format=1500w"
                info="Amethyst Rock Cluster Crystal"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/51lfH5VrSFL._UL1200_.jpg"
                info="Seven Chakra Stand"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://i5.walmartimages.com/asr/e8a504eb-94a5-47ec-81ab-7a4bca32e5a7.28e9f00de59f2b5a28630071d1215622.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
                info="9 Powerful Healing Crystals"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="data:image/jpeg;base64,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"
                info="Tea for Two  Heart"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://i5.walmartimages.com/asr/e8a504eb-94a5-47ec-81ab-7a4bca32e5a7.28e9f00de59f2b5a28630071d1215622.jpeg?odnHeight=450&odnWidth=450&odnBg=ffffff"
                info="Manifestation Crystal Healing"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cards-section">
        <div className="card_box">
          <h2 className="card_title">
            Ganesh <span className="card_gift_spell">Chaturthi</span>
          </h2>
          <a className="view_button_link" href="">
            <button className="view_button ">VIEW ALL</button>
          </a>
        </div>

        <div className="Rēctangle-Cards">
          <div className="Crads-Container">
            <div className="card-content">
              <CardItem
                imgsrc="https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                info="6INCH Manomay Eco-Friendly "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                info="6INCH Vibhav Eco-Friendly "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://img.staticmb.com/mbcontent//images/uploads/2022/5/ganpati-flower-decoration.jpg"
                info="6INCH Manomay Eco-Friendly"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                info="6INCH Vibhav Eco-Friendly"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                info="6INCH Manomay Eco-Friendly"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://img.staticmb.com/mbcontent//images/uploads/2022/5/ganpati-flower-decoration.jpg"
                info="6INCH Vibhav Eco-Friendly"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cards-section">
        <div className="card_box">
          <h2 className="card_title">
            Limited <span className="card_gift_spell">Edition</span>
          </h2>
          <a className="view_button_link" href="">
            <button className="view_button ">VIEW ALL</button>
          </a>
        </div>

        <div className="Rēctangle-Cards">
          <div className="Crads-Container">
            <div className="card-content">
              <CardItem
                imgsrc="data:image/jpeg;base64,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"
                info="Eco-Friendly "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPzm1p3uoJW8RfA-qALQ2n7ScGWS73u_yTvr_Bz-mMJirSVmOWN8hhTobC7ott46i7VY&usqp=CAU"
                info="Lamps"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                info="Ganpati"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                info="Murti"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="http://i.123g.us/c/eaug_rakshabandhan_happy/card/318411.jpg"
                info="Rakhi Card"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://5.imimg.com/data5/SELLER/Default/2021/6/VV/GY/YE/26088404/crystal-stacking-bracelets-500x500.jpg"
                info="Crystal Bracelet"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="Banner-image2">
        <a href="#">
          <img
            className="Banner-image"
            src="https://cdn.shopify.com/s/files/1/2090/3151/files/RAKHI_BANNER__1654851826_203.122.11.36.jpg?v=1654852191"
          ></img>
        </a>
      </div>
      <section className="cards-section">
        <div className="card_box">
          <h2 className="card_title">
            Salt <span className="card_gift_spell">Lamps</span>
          </h2>
          <a className="view_button_link" href="">
            <button className="view_button ">VIEW ALL</button>
          </a>
        </div>

        <div className="Rēctangle-Cards">
          <div className="Crads-Container">
            <div className="card-content">
              <CardItem
                imgsrc="https://static.toiimg.com/thumb/70672090.cms?width=680&height=512&imgsize=695460"
                info="Eco-Friendly Plantable  "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://media.istockphoto.com/photos/rakhi-for-raksha-bandhan-festival-india-stock-image-picture-id1262683528?k=20&m=1262683528&s=612x612&w=0&h=pvseCByC-mqYQkWPxlGSPLqekKyMlK4IKFwBB1clAOA="
                info="Silver Bhabhi "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZDISfTmcfjhCxqSUcJVGpTnhWdqLx4pHI-XHCWDqwUMZqVZdQvX8Xip8vv3R8PfPNokE&usqp=CAU"
                info="Eco-Friendly Plantable "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://c.ndtvimg.com/2020-07/46qbptl8_rakhi-650_650x400_28_July_20.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675"
                info="Eco-Friendly Rakhi "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCG6Nj7HxFT1lSJA7mJRPDThlAi4CP27c8kdMTg2QJ5BRASmXoECFaSsReyN-XG6H0yVg&usqp=CAU"
                info="My Forever ATM Rakhi"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/08/19/157121-untitled-design-2021-08-19t181138912.jpg?itok=bmEbslcR"
                info="Rudraksha Bhaiya Bhabhi Rakhi"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="Banner-image2">
        <a href="#">
          <img
            className="Banner-image"
            src="https://cdn.shopify.com/s/files/1/2090/3151/files/RAKHI_BANNER__1654851826_203.122.11.36.jpg?v=1654852191"
          ></img>
        </a>
      </div>
      <section className="cards-section">
        <div className="card_box">
          <span className="card_gift_spell">Incense</span>

          <a className="view_button_link" href="">
            <button className="view_button ">VIEW ALL</button>
          </a>
        </div>

        <div className="Rēctangle-Cards">
          <div className="Crads-Container">
            <div className="card-content">
              <CardItem
                imgsrc="https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                info="6INCH Manomay Eco-Friendly "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://images.unsplash.com/photo-1598090216740-eb040d8c3f82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                info="6INCH Vibhav Eco-Friendly "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://img.staticmb.com/mbcontent//images/uploads/2022/5/ganpati-flower-decoration.jpg"
                info="6INCH Manomay Eco-Friendly"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://images.unsplash.com/photo-1567591414240-e9c1e59f3e06?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2FucGF0aXxlbnwwfHwwfHw%3D&w=1000&q=80"
                info="6INCH Vibhav Eco-Friendly"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                info="6INCH Manomay Eco-Friendly"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://img.staticmb.com/mbcontent//images/uploads/2022/5/ganpati-flower-decoration.jpg"
                info="6INCH Vibhav Eco-Friendly"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="cards-section">
        <div className="card_box">
          <h2 className="card_title">
            Evil <span className="card_gift_spell">Eye</span>
          </h2>
          <a className="view_button_link" href="">
            <button className="view_button ">VIEW ALL</button>
          </a>
        </div>

        <div className="Rēctangle-Cards">
          <div className="Crads-Container">
            <div className="card-content">
              <CardItem
                imgsrc="data:image/jpeg;base64,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"
                info="Eco-Friendly "
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWPzm1p3uoJW8RfA-qALQ2n7ScGWS73u_yTvr_Bz-mMJirSVmOWN8hhTobC7ott46i7VY&usqp=CAU"
                info="Lamps"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                info="Ganpati"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://m.media-amazon.com/images/I/71k2ZoPPl6L._SL1200_.jpg"
                info="Murti"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="http://i.123g.us/c/eaug_rakshabandhan_happy/card/318411.jpg"
                info="Rakhi Card"
              />
            </div>
            <div className="card-content">
              <CardItem
                imgsrc="https://5.imimg.com/data5/SELLER/Default/2021/6/VV/GY/YE/26088404/crystal-stacking-bracelets-500x500.jpg"
                info="Crystal Bracelet"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MainSection;
