import { Link } from 'react-router-dom';
import { ChevronDown, Facebook, Mail, MapPin, Menu, Phone, Search, ShoppingCart, Youtube } from 'lucide-react';
import images from '../assets/images';

function Header() {
    const containerClasses = 'w-full lg:w-[1170px] h-full px-[15px] flex justify-between items-center';
    return (
        <header className="w-full absolute top-0 left-0 z-[99999] shadow-md">
            {/* top */}
            <div className="w-full h-[30px] bg-primary flex justify-center">
                <div className={containerClasses}>
                    <div className="mx-auto flex md:hidden items-center h-full gap-4 text-white text-sm">
                        <button>Đăng nhập</button>
                        <div className="h-5 w-[1px] bg-[#cccccc]"></div>
                        <div className="flex items-center gap-2">
                            <Phone size={16} />
                            <Mail size={16} />
                            <Youtube size={16} />
                            <Facebook size={16} />
                            <MapPin size={16} />
                        </div>
                    </div>
                    <div className="hidden md:flex items-center gap-16">
                        <div className="flex items-center gap-2">
                            <img src={images.call} alt="call" className="h-4 w-4 object-cover" />
                            <a href="tel:0367560274" className="text-base text-white">
                                0367560274
                            </a>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src={images.maps} alt="maps" className="h-4 w-4 object-cover" />
                            <span className="text-base text-white">
                                77/40 Lê Lai, Phường 12, Quận Tân Bình, TP. Hồ Chí Minh
                            </span>
                        </div>
                    </div>

                    {/* socials */}
                    <ul className="hidden md:flex items-center gap-2">
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
                </div>
            </div>
            {/* Main Header */}
            <div className="w-full h-20 md:h-[100px] bg-white flex justify-center">
                <div className={containerClasses}>
                    {/* Logo */}
                    <div className="md:hidden flex items-center justify-center">
                        <Menu size={20} />
                    </div>
                    <div className="w-[100px] md:w-[200px] h-full flex items-center overflow-hidden">
                        <img className="object-contain" src={images.logo2} alt="logo" />
                    </div>
                    <ul className=" h-full hidden md:flex py-7 items-center gap-4">
                        <li className="font-bold text-text text-base">
                            <a href="/">
                                <Search size={16} />
                            </a>
                        </li>
                        <li className="flex gap-1 items-center font-bold text-text text-base">
                            <a href="/">Giới Thiệu</a>
                            <ChevronDown size={16} />
                        </li>
                        <li className="font-bold text-text text-base">
                            <Link to="/products">Sản Phẩm</Link>
                        </li>
                        <li className="font-bold text-text text-base">
                            <a href="/">Hợp Tác</a>
                        </li>
                        <li className="flex gap-1 items-center font-bold text-text text-base">
                            <a href="/">Tin Tức</a>
                            <ChevronDown size={16} />
                        </li>
                        <li className="font-bold text-text text-base">
                            <a href="/">Tuyển Dụng</a>
                        </li>
                        <li className="font-bold text-text text-base">
                            <a href="/">Thẻ Thành Viên</a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 text-text text-base font-semibold">
                        <div className="hidden md:block">Đăng nhập</div>
                        <div className="hidden md:block h-[24px] w-[1px] bg-[#cccccc]"></div>
                        <div className="flex items-center gap-1">
                            <span className="hidden lg:block">Giỏ hàng</span>
                            <ShoppingCart size={20} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
