import { ArrowRight } from 'lucide-react';
import images from '~/assets/images';
import { Button } from '../ui';

function About() {
    return (
        <section className="relative w-full py-[50px]">
            <img className="absolute top-0 left-0 h-full w-full object-cover" src={images.ss2_bg} alt="ss2-bg" />
            <div className="container flex flex-col z-[99]">
                <div className="w-full padding-common mobile-col gap-[30px]">
                    <div className="flex flex-col w-full md:w-1/2">
                        <h1 className="font-pacifico text-4xl md:text-5xl !leading-[77px] text-secondary">
                            Về chúng tôi
                        </h1>
                        <h2 className="font-semibold md:text-[26px] text-2xl leading-[34px] text-[#608800]">
                            Đi xa để học hỏi
                        </h2>
                        <p className="text-base text-justify mt-2">
                            Được thành lập từ tháng 10 năm 2018 bởi các bạn trẻ thế hệ 9X có đam mê nông nghiệp, đã từng
                            có thời gian trải nghiệm, học tập và làm việc tại Israel và mong muốn triển khai mô hình
                            nông nghiệp theo kiểu hiện đại, áp dụng KHKT tại VN nhằm tận dụng những lợi thế về thiên
                            nhiên để phát triển nền nông nghiệp nước nhà, nâng cao giá trị nông sản, giải quyết việc làm
                            cho lao động nông thôn.
                        </p>
                        <Button variant="outline" className="mt-2 md:mt-4 w-full md:w-1/3 border-2 uppercase font-bold">
                            Xem thêm
                            <ArrowRight className="mt-1" size={20} />
                        </Button>
                    </div>
                    <div className="flex flex-col w-full md:w-1/2">
                        <img src={images.thumbVideo} alt="thumb video" className="w-full object-cover" />
                    </div>
                </div>
            </div>
            <div className="container padding-x-common flex flex-col z-[99]">
                <div className="w-full lg:max-w-[91.66667%] flex flex-col gap-2">
                    <p className="text-heading">Nông sản thiên nhiên, an toàn, thân thiện</p>
                    <div className="mobile-col gap-3">
                        <div className="w-full md:w-1/4 h-auto flex flex-col items-center p-3 bg-white border border-secondary rounded-md">
                            <div className="font-bold text-[35px] leading-[56px] text-secondary">5+</div>
                            <span className="text-[17px] leading-[27px] text-center">Năm hoạt động</span>
                        </div>
                        <div className="w-full md:w-1/4 h-auto flex flex-col items-center p-3 bg-white border border-secondary rounded-md">
                            <div className="font-bold text-[35px] leading-[56px] text-secondary">40+</div>
                            <span className="text-[17px] leading-[27px] text-center">Nhân sự chủ chốt</span>
                        </div>
                        <div className="w-full md:w-1/4 h-auto flex flex-col items-center p-3 bg-white border border-secondary rounded-md">
                            <div className="font-bold text-[35px] leading-[56px] text-secondary">56</div>
                            <span className="text-[17px] leading-[27px] text-center">
                                Hecta (ha) Diện tích canh tác
                            </span>
                        </div>
                        <div className="w-full md:w-1/4 h-auto flex flex-col items-center p-3 bg-white border border-secondary rounded-md">
                            <div className="font-bold text-[35px] leading-[56px] text-secondary">5+</div>
                            <span className="text-[17px] leading-[27px] text-center">
                                Sản phẩm từ nông sản tại Moshav Farm
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
