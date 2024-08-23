import images from '~/assets/images';
import Button from '../ui/Button';

function Footer() {
    return (
        <footer className="relative pt-[400px] md:pt-[200px]">
            <img src={images.footer_bg} alt="footer" className="absolute top-0 left-0 w-full h-full object-cover" />
            <div className="relative w-full border-b-2 border-secondary">
                <div className="container padding-x-common mobile-col">
                    <div className="w-full md:w-1/2 padding-common flex flex-col text-white">
                        <h4 className="capitalize font-bold text-lg">Thông tin liên hệ</h4>
                        <p className="text-sm mt-2">77/40 Lê Lai, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh</p>
                        <a href="tel:0367560274">0367560274</a>
                    </div>
                    <div className="w-full md:w-1/2 padding-common flex flex-col items-center text-white">
                        <h4 className="font-bold text-lg text-center">
                            Cùng Moshav Farm Bình dân hóa nông sản thượng hạng - MUA NGAY!
                        </h4>
                        <div className="w-full flex flex-col gap-2 mt-5 px-16">
                            <input
                                placeholder="Họ và tên của anh (chị)"
                                type="text"
                                className="py-1 px-2 outline-none border border-secondary rounded-md"
                            />
                            <input
                                placeholder="Email của anh (chị)"
                                type="text"
                                className="py-1 px-2 outline-none border border-secondary rounded-md"
                            />
                            <input
                                placeholder="Số điện thoại của anh (chị)"
                                type="text"
                                className="py-1 px-2 outline-none border border-secondary rounded-md"
                            />
                            <textarea
                                rows={3}
                                placeholder="Thông tin anh (chị) cần CoLang hỗ trợ"
                                type="text"
                                className="resize-none py-1 px-2 outline-none border border-secondary rounded-md"
                            />
                            <Button variant="outline">Gửi đến CoLang!</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative w-full pt-[60px] px-[15px]">
                <div className="container mobile-col">
                    <div className="w-full md:w-2/5 flex flex-col items-center md:items-start padding-common text-white">
                        <h4 className="font-bold text-lg capitalize">Công Ty Cổ Phần Nông Nghiệp The Moshav Farm</h4>
                        <p className="text-sm mt-2">
                            GPKD/MST: 4201889386 cấp ngày 18/05/2020 tại Sở kế hoạch & Đầu tư tỉnh Khánh Hòa
                        </p>
                        <h4 className="font-bold text-lg capitalize mt-3">Liên hệ</h4>
                        <ul className="flex items-center gap-2 mt-2">
                            <li>
                                <img src={images.mess} alt="mess" className="h-[28px] object-cover" />
                            </li>
                            <li>
                                <img src={images.zalo} alt="zalo" className="h-[28px] object-cover" />
                            </li>
                            <li>
                                <img src={images.mail} alt="mail" className="h-[28px] object-cover" />
                            </li>
                            <li className="h-[28px]">
                                <a href="">
                                    <img src={images.shopee} alt="shopee" className="h-full object-cover" />
                                </a>
                            </li>
                            <li>
                                <img src={images.tiktok} alt="tiktok" className="h-[28px] object-cover" />
                            </li>
                            <li>
                                <img src={images.facebook} alt="facebook" className="h-[28px] object-cover" />
                            </li>
                            <li>
                                <img src={images.googleMaps} alt="googleMaps" className="h-[28px] object-cover" />
                            </li>
                        </ul>
                        <img src={images.congthuong} alt="cong thuong" className="w-1/2 object-cover mt-3" />
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col items-center md:items-start padding-common text-white gap-1">
                        <h4 className="font-bold text-lg capitalize">Giới thiệu</h4>
                        <a href="/" className="text-sm py-1 capitalize">
                            Về The Moshav Farm
                        </a>
                        <a href="/" className="text-sm py-1 capitalize">
                            Lĩnh Vực Kinh Doanh
                        </a>
                        <a href="/" className="text-sm py-1 capitalize">
                            Thành Viên Sáng Lập
                        </a>
                        <a href="/" className="text-sm py-1 capitalize">
                            Thông Điệp Từ Người Sáng Lập
                        </a>
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col items-center md:items-start padding-common text-white gap-1">
                        <h4 className="font-bold text-lg capitalize">Thông tin</h4>
                        <a href="/products" className="text-sm py-1 capitalize">
                            Sản phẩm
                        </a>
                        <a href="/partnership" className="text-sm py-1 capitalize">
                            Hợp tác
                        </a>
                        <a href="/recruitment" className="text-sm py-1 capitalize">
                            Tuyển dụng
                        </a>
                        <a href="/membership-card" className="text-sm py-1 capitalize">
                            Thẻ thành viên
                        </a>
                    </div>
                    <div className="w-full md:w-1/5 flex flex-col items-center md:items-start padding-common text-white gap-1">
                        <h4 className="font-bold text-lg capitalize">Tin tức</h4>
                        <a href="/" className="text-sm py-1 capitalize">
                            CoLang & Xã hội
                        </a>
                        <a href="/" className="text-sm py-1 capitalize">
                            Con người CoLang
                        </a>
                        <a href="/" className="text-sm py-1 capitalize">
                            Thông tin sản phẩm
                        </a>
                        <a href="/" className="text-sm py-1 capitalize">
                            Chương trình khuyến mãi
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
