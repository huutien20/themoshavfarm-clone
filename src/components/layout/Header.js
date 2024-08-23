import { Link } from 'react-router-dom';
import { ChevronDown, Facebook, Mail, MapPin, Menu, Phone, Search, ShoppingCart } from 'lucide-react';
import images from '~/assets/images';

function Header() {
    return (
        <header className="w-full fixed top-0 left-0 shadow-md z-[99999]">
            {/* top */}
            <div className="w-full h-8 bg-primary">
                <div className="h-full flex-between container padding-x-common">
                    <div className="mobile-flex h-full mx-auto items-center gap-4 text-white text-sm">
                        <button>Đăng nhập</button>
                        <div className="h-5 w-[1px] bg-[#cccccc]"></div>
                        <div className="flex items-center gap-2">
                            <a href="tel:0367560274">
                                <Phone size={16} />
                            </a>
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=colang2023@gmail.com&su=Hello CoLang">
                                <Mail size={16} />
                            </a>
                            <a href="https://www.facebook.com/colangfood">
                                <Facebook size={16} />
                            </a>
                            <a href="/map">
                                <MapPin size={16} />
                            </a>
                        </div>
                    </div>
                    <div className="tablet-flex items-center max-lg:justify-between max-lg:w-full gap-16">
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
                    <ul className="pc-flex items-center gap-2">
                        <li className="h-[28px]">
                            <a href="/mess">
                                <img src={images.mess} alt="mess" className="h-[28px] object-cover" />
                            </a>
                        </li>
                        <li className="h-[28px]">
                            <a href="/zalo">
                                <img src={images.zalo} alt="zalo" className="h-[28px] object-cover" />
                            </a>
                        </li>
                        <li className="h-[28px]">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=colang2023@gmail.com&su=Hello CoLang">
                                <img src={images.mail} alt="mail" className="h-[28px] object-cover" />
                            </a>
                        </li>
                        <li className="h-[28px]">
                            <a href="https://shopee.vn/colangfood">
                                <img src={images.shopee} alt="shopee" className="h-full object-cover" />
                            </a>
                        </li>
                        <li className="h-[28px]">
                            <a href="https://www.facebook.com/colangfood">
                                <img src={images.facebook} alt="facebook" className="h-[28px] object-cover" />
                            </a>
                        </li>
                        <li className="h-[28px]">
                            <a href="/map">
                                <img src={images.googleMaps} alt="googleMaps" className="h-[28px] object-cover" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* Main Header */}
            <div className="w-full h-20 md:h-[100px] bg-white flex justify-center">
                <div className="container padding-x-common flex-between h-full">
                    {/* Logo */}
                    <div className="mobile-flex items-center justify-center">
                        <Menu size={20} />
                    </div>
                    <div className="w-[100px] md:w-[200px] h-full flex items-center overflow-hidden">
                        <Link to="/">
                            <img className="object-contain" src={images.logo2} alt="logo" />
                        </Link>
                    </div>
                    <ul className=" h-full hidden md:flex py-7 items-center gap-4">
                        <li className="font-bold text-text text-base hover:text-primary cursor-pointer">
                            <Search size={16} />
                        </li>
                        <li className="flex gap-1 items-center font-bold text-text text-base hover:text-primary cursor-pointer">
                            <a href="/">Giới Thiệu</a>
                            <ChevronDown size={16} />
                        </li>
                        <li className="font-bold text-text text-base hover:text-primary cursor-pointer">
                            <Link to="/products">Sản Phẩm</Link>
                        </li>
                        <li className="font-bold text-text text-base hover:text-primary cursor-pointer">
                            <Link to="/partnership">Hợp Tác</Link>
                        </li>
                        <li className="flex gap-1 items-center font-bold text-text text-base hover:text-primary cursor-pointer">
                            <a href="/">Tin Tức</a>
                            <ChevronDown size={16} />
                        </li>
                        <li className="font-bold text-text text-base hover:text-primary cursor-pointer">
                            <Link to="/recruitment">Tuyển Dụng</Link>
                        </li>
                        <li className="font-bold text-text text-base hover:text-primary cursor-pointer">
                            <Link to="/membership-card">Thẻ Thành Viên</Link>
                        </li>
                    </ul>
                    <div className="flex items-center gap-4 text-text text-base font-semibold">
                        <div className="hidden md:block hover:text-primary cursor-pointer">Đăng nhập</div>
                        <div className="hidden md:block h-[24px] w-[1px] bg-[#cccccc]"></div>
                        <div className="flex items-center gap-1 hover:text-primary cursor-pointer">
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
