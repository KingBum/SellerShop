import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./NewItem.module.css";

export default class SwipeToSlide extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 5,
      swipeToSlide: true,
      autoplay: true,

    };
    return (
      <div className={styles.newitems}>
        <h2 className="mainTitle">New Items</h2>
        <div className="line"></div>

        <Slider {...settings}>
          <div className={styles.wrapper}>
            <div className={styles.boxItem}>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src="http://134.209.110.122:1337/uploads/music_2_e30565f237.jpg"
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>The Truth</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>0.08 ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.place}>Place a bid</div>
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.boxItem}>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src="http://134.209.110.122:1337/uploads/anim_5_ec9190202f.webp"
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>The Truth</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>0.08 ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.place}>Place a bid</div>
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.boxItem}>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src="http://134.209.110.122:1337/uploads/music_1_c6c961faa9.jpg"
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>The Truth</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>0.08 ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.place}>Place a bid</div>
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.boxItem}>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src="http://134.209.110.122:1337/uploads/static_5_82c702df64.jpg"
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>The Truth</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>0.08 ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.place}>Place a bid</div>
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.boxItem}>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src="http://134.209.110.122:1337/uploads/anim_8_3b95944cfb.webp"
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>The Truth</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>0.08 ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.place}>Place a bid</div>
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.boxItem}>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src="http://134.209.110.122:1337/uploads/anim_7_b0be11eee1.webp"
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>The Truth</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>0.08 ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.place}>Place a bid</div>
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.boxItem}>
              <div className="avatarBox">
                <img
                  className="avatar"
                  src="http://134.209.110.122:1337/uploads/ff2a61a5ad0a4581a7676c49783ab5c77c83983df4d6a0a3d7bde7eb21ffa694_d02f891d9d.jpg"
                  alt=""
                />
                <i className={`fa fa-check stick`}></i>
              </div>
              <div className={styles.clockdown}>00d 00h 00m 00s</div>
              <div className={styles.img}>
                <img
                  className={styles.imgNFT}
                  src="http://134.209.110.122:1337/uploads/anim_6_afe5709e78.webp"
                  alt=""
                />
              </div>
              <div className={styles.bottomBoxItem}>
                <div className={styles.title}>The Truth</div>
                <div className={styles.priceBox}>
                  <div className={styles.price}>0.08 ETH</div>
                  <div className={styles.quantity}>1/20</div>
                </div>
                <div className={styles.actions}>
                  <div className={styles.place}>Place a bid</div>
                  <div className={styles.like}>
                    <i className={`fa-solid fa-heart ${styles.heart}`}></i>
                    <span>50</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
