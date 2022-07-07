import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>VỀ CHÚNG TÔI</h2>
      <h3 className={styles.slogan}>
        160STORE - Nơi Trải Nghiệm Xu Hướng Thời Trang Toàn Cầu
      </h3>
      <div className={styles.description}>
        <p className={styles["description-text"]}>
          160STORE là thương hiệu thời trang mang đến cho khách hàng các xu
          hướng hiện đại trong và ngoài nước nhanh nhất, với mục tiêu mang lại
          giá trị thật tương xứng với chất lượng tốt nhất cho khách hàng trên
          từng sản phẩm.{" "}
        </p>
        <br />
        <p className={styles["description-text"]}>
          Với triết lý kinh doanh “lấy Khách Hàng là trung tâm” 160STORE mong
          muốn mang lại sự trải nghiệm tuyệt vời nhất và những lựa chọn hoàn hảo
          dành cho khách hàng trong quá trình mua sắm tại 160STORE.
        </p>
        <br />
        <p className={styles["description-text"]}>
          Để làm được điều đó, 160STORE đã đặt ra những tiêu chuẩn về chất lượng
          trong quy trình lựa chọn sản phẩm và đào tạo dịch vụ trên nền tảng
          kiến thức, kinh nghiệm gặt hái được từ nhiều năm hoạt động trong ngành
          thời trang bán lẻ. 160STORE đã góp phần tạo nên một thị trường mang
          nhiều màu sắc rực rỡ mới và khác biệt cho phái mạnh với cương vị là
          đại lý phân phối các thương hiệu chính hãng như: ICON DENIM, RUNPOW,
          NOMOUS ESSENTIALS, MASCUS, BOUTON...
        </p>
      </div>
      <div className={styles.locations}>
        <span className={styles.chain}>HỆ THỐNG CỬA HÀNG 160STORE</span>
        <span className={styles.location}>Khu vực Thành Phố Hồ Chí Minh:</span>
        <ul className={styles.list}>
          <li className={styles.item}>
            Số 69 Phước Long C, Phường Phước Long C, Quận 9
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
