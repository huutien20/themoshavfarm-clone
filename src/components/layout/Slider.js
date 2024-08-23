import images from '../../assets/images';

function Slider() {
    //set h thẻ cha linh hoạt dựa theo thẻ con
    return (
        <section className="relative h-auto w-full flex flex-col items-center">
            <img src={images.cover} alt="cover" className="lg:h-[500px] w-full object-cover" />
            <div className="relative -mt-[50px] md:-mt-[70px] w-full lg:max-w-[1170px] min-h-[270px] px-[15px] z-10">
                <div className="flex flex-col items-center p-5 bg-primary text-white rounded-lg text-center">
                    <h2 className="text-[44px] text-5xl leading-[57px] uppercase font-bold">The Moshav Farm</h2>
                    <p className="text-[32px] leading-[51px] capitalize">Bình dân hóa nông sản thượng hạng</p>
                    <p className="text-[18px] leading-[28px] mt-[15px]">
                        Một nông trại kiểu mẫu được khởi xướng bởi những người Việt trẻ đầy nhiệt huyết, áp dụng tinh
                        hoa khoa học công nghệ hàng đầu từ Israel. Với tầm nhìn trở thành một doanh nghiệp xã hội tiên
                        tiến, Moshav kết hợp sự bền vững trong nông nghiệp và trải nghiệm du lịch, mang lại những sản
                        phẩm từ nông sản cao cấp với giá cả phải chăng cho bà con.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Slider;
