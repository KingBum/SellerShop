import React, { Component } from "react";
import Slider from "react-slick";
import styles from "./HotCollections.module.css";

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
      <div className={styles.hotcollections}>
        <h2 className="mainTitle">Hot Collections</h2>
        <div className="line"></div>
        <Slider {...settings}>
          <div className={styles.wrapper}>
            <div className={styles.hotItem}>
              <div className={styles.topHotItem}>
                <img
                  className={styles.img}
                  src="http://134.209.110.122:1337/uploads/coll_4_69f3883518.jpg"
                  alt=""
                />
              </div>
              <div className={styles.midHotItem}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    src="http://134.209.110.122:1337/uploads/author_4_623046d09c.jpg"
                    alt=""
                  />
                  <i className={`fa-solid fa-circle-check ${styles.stick}`}></i>
                </div>
              </div>
              <div className={styles.bottomHotItem}>
                <div className="name">Patternlicious</div>
                <div className="subName">ERC-61</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.hotItem}>
              <div className={styles.topHotItem}>
                <img
                  className={styles.img}
                  src="http://134.209.110.122:1337/uploads/coll_3_e286085ffd.jpg"
                  alt=""
                />
              </div>
              <div className={styles.midHotItem}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    src="http://134.209.110.122:1337/uploads/author_2_c6ff6b745e.jpg"
                    alt=""
                  />
                  <i className={`fa-solid fa-circle-check ${styles.stick}`}></i>
                </div>
              </div>
              <div className={styles.bottomHotItem}>
                <div className="name">Patternlicious</div>
                <div className="subName">ERC-61</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.hotItem}>
              <div className={styles.topHotItem}>
                <img
                  className={styles.img}
                  src="http://134.209.110.122:1337/uploads/coll_6_62bc79d217.jpg"
                  alt=""
                />
              </div>
              <div className={styles.midHotItem}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    src="http://134.209.110.122:1337/uploads/author_6_f8c8033ffc.jpg"
                    alt=""
                  />
                  <i className={`fa-solid fa-circle-check ${styles.stick}`}></i>
                </div>
              </div>
              <div className={styles.bottomHotItem}>
                <div className="name">Patternlicious</div>
                <div className="subName">ERC-61</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.hotItem}>
              <div className={styles.topHotItem}>
                <img
                  className={styles.img}
                  src="http://134.209.110.122:1337/uploads/coll_2_bfc2467cc8.jpg"
                  alt=""
                />
              </div>
              <div className={styles.midHotItem}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    src="http://134.209.110.122:1337/uploads/author_2_c6ff6b745e.jpg"
                    alt=""
                  />
                  <i className={`fa-solid fa-circle-check ${styles.stick}`}></i>
                </div>
              </div>
              <div className={styles.bottomHotItem}>
                <div className="name">Patternlicious</div>
                <div className="subName">ERC-61</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.hotItem}>
              <div className={styles.topHotItem}>
                <img
                  className={styles.img}
                  src="http://134.209.110.122:1337/uploads/coll_3_e286085ffd.jpg"
                  alt=""
                />
              </div>
              <div className={styles.midHotItem}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    src="http://134.209.110.122:1337/uploads/author_2_c6ff6b745e.jpg"
                    alt=""
                  />
                  <i className={`fa-solid fa-circle-check ${styles.stick}`}></i>
                </div>
              </div>
              <div className={styles.bottomHotItem}>
                <div className="name">Patternlicious</div>
                <div className="subName">ERC-61</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.hotItem}>
              <div className={styles.topHotItem}>
                <img
                  className={styles.img}
                  src="http://134.209.110.122:1337/uploads/coll_1_a126dd2884.jpg"
                  alt=""
                />
              </div>
              <div className={styles.midHotItem}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    src="http://134.209.110.122:1337/uploads/k6_762ec5d5ce.png"
                    alt=""
                  />
                  <i className={`fa-solid fa-circle-check ${styles.stick}`}></i>
                </div>
              </div>
              <div className={styles.bottomHotItem}>
                <div className="name">Patternlicious</div>
                <div className="subName">ERC-61</div>
              </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <div className={styles.hotItem}>
              <div className={styles.topHotItem}>
                <img
                  className={styles.img}
                  src="http://134.209.110.122:1337/uploads/coll_3_e286085ffd.jpg"
                  alt=""
                />
              </div>
              <div className={styles.midHotItem}>
                <div className={styles.avatar}>
                  <img
                    className={styles.avatarImg}
                    src="http://134.209.110.122:1337/uploads/author_2_c6ff6b745e.jpg"
                    alt=""
                  />
                  <i className={`fa-solid fa-circle-check ${styles.stick}`}></i>
                </div>
              </div>
              <div className={styles.bottomHotItem}>
                <div className="name">Patternlicious</div>
                <div className="subName">ERC-61</div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
  }
}
