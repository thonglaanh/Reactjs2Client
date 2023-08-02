import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/About.css';
import image1 from '../assets/about2.jpg';
import image2 from '../assets/about1.jpg';
import image3 from '../assets/about3.jpg';
import image4 from '../assets/about4.jpg';

const About = () => {
    return (
        <div>
            <Header />
            <div className="intro-image">
                <img src={image1} alt="Hình ảnh 1" style={{ width: '100%' }} />
            </div>
            <div>
                <p style={{ fontSize: '30px', fontWeight: 'bold', width: '900px', marginLeft: '250px', marginTop: '80px', marginBottom: '50px' }}>Shopee là nền tảng thương mại điện tử hàng đầu tại Đông Nam Á và Đài Loan.</p>
                <p style={{ fontSize: '20px', width: '1400px', marginLeft: '10px', marginTop: '50px', marginBottom: '50px', color: 'gray' }}>Ra mắt năm 2015, nền tảng thương mại Shopee được xây dựng nhằm cung cấp cho người dùng những trải nghiệm dễ dàng, an toàn và nhanh chóng khi mua sắm trực tuyến thông qua hệ thống hỗ trợ thanh toán và vận hành vững mạnh.
                    Chúng tôi có niềm tin mạnh mẽ rằng trải nghiệm mua sắm trực tuyến phải đơn giản, dễ dàng và mang đến cảm xúc vui thích. Niềm tin này truyền cảm hứng và thúc đẩy chúng tôi mỗi ngày tại Shopee.</p>
            </div>
            <div className="intro-container">
                <div className="intro-section">
                    <div className="intro-image">
                        <img src={image2} alt="Hình ảnh 1" style={{ width: '700px', height: '400px' }} />
                    </div>
                    <div className="intro-text">
                        <h2>Mục tiêu</h2>
                        <p style={{ fontSize: '18px', width: '400px', marginLeft: '10px', marginTop: '50px', marginBottom: '50px', color: 'gray' }}>Chúng tôi tin tưởng vào sức mạnh khai triển của công nghệ và mong muốn góp phần làm cho thế giới trở nên tốt đẹp hơn bằng việc kết nối cộng đồng người mua và người bán thông qua việc cung cấp một nền tảng thương mại điện tử.</p>
                    </div>
                </div>
                <div className="intro-section">
                    <div className="intro-text">
                        <h2>Software Engineering</h2>
                        <p style={{ fontSize: '18px', width: '400px', marginLeft: '10px', marginTop: '50px', marginBottom: '50px', color: 'gray' }}>Mấu chốt trong sự phát triển của nền tảng Shopee là Đội Kỹ thuật và Công nghệ (Engineering and Technology team). Đội được hình thành từ một nhóm những kỹ sư đầy nhiệt huyết đến từ khắp nơi trên thế giới với cố gắng xây dựng hệ thống tốt nhất cùng những công nghệ phù hợp nhất. Tốc độ phát triển nhanh của Shopee đã biến hầu hết các vấn đề tưởng chừng như "đơn giản" thành những thách thức kỹ thuật lớn. Nếu bạn cuồng công nghệ như chúng tôi thì không có nơi nào tốt hơn Shopee để trải nghiệm trực tiếp những thách thức này.</p>
                    </div>
                    <div className="intro-image">
                        <img src={image4} alt="Hình ảnh 2" style={{ width: '800px', marginLeft: '150px' }} />
                    </div>
                </div>
                <div className="intro-section">
                    <div className="intro-image">
                        <img src={image3} alt="Hình ảnh 3" />
                    </div>
                    <div className="intro-text">
                        <h2>Achievements</h2>
                        <p style={{ fontSize: '18px', width: '800px', marginLeft: '10px', marginTop: '10px', color: 'gray' }}>Tại Tech@Shopee Academy, bạn sẽ có thể truy cập các sự kiện và cuộc thi Công nghệ của Shopee, đồng thời tìm hiểu thêm về Engineering, Product và Data. Hãy sẵn sàng học hỏi từ đội ngũ Shopee Tech mọi lúc, mọi nơi thông qua những chương trình được tuyển chọn đặc biệt, hoặc chinh phục các thử thách và các cuộc thi của chúng tôi!</p>
                        <p style={{ fontSize: '18px', width: '800px', marginLeft: '10px', marginTop: '5px', marginBottom: '50px', color: 'gray' }}>Hãy cùng tham gia các buổi sự kiện được tổ chức bởi Shopee và các tổ chức công nghệ. Các diễn giả đến từ Shopee sẽ chia sẻ những kinh nghiệm, bí quyết làm việc, cũng như chia sẻ cho bạn biết vì sao công nghệ là cốt lõi đối với Shopee.</p>
                    </div>
                </div>
                <footer>
                    <p>&copy; 2023 Company ABC. All rights reserved.</p>
                </footer>
            </div>
            <Footer />
        </div>
    );
};

export default About;
