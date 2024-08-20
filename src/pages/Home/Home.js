import images from '~/assets/images';
import { About, Introduce, Slider, StandardBox } from '~/components';
import FeedbackUser from '~/components/FeedbackUser';
import NewCard from '~/components/NewCard';

function Home() {
    const standards = [
        {
            iconURL: images.safeIcon,
            heading: 'An toàn',
            desc: 'Nguồn nguyên liệu xuất xứ rõ ràng, minh bạch, do chính tay Moshav và người dân Ninh Hòa sản xuất và kiểm soát.',
        },
        {
            iconURL: images.friendlyIcon,
            heading: 'Thân thiện',
            desc: 'Quy trình sản xuất và đóng gói theo tiêu chuẩn: tự nhiên, an toàn, bền vững và thân thiện với môi trường.',
        },
        {
            iconURL: images.highQualityIcon,
            heading: 'Chất lượng',
            desc: 'Tất cả sản phẩm đều được sản xuất, chế biến theo các tiêu chuẩn an toàn hàng đầu thế giới – Đạt tiêu chuẩn chất lượng ISO, HACCP,…',
        },
        {
            iconURL: images.conveyorBeltIcon,
            heading: 'Quy trình sản xuất hiện đại',
            desc: 'Mô hình từ Israel – nền nông nghiệp hiện đại nhất thế giới, nâng cao hiệu suất và chất lượng sản phẩm.',
        },
        {
            iconURL: images.missionIcon,
            heading: 'Tiên phong sản phẩm',
            desc: 'Kết hợp hai nguyên liệu quý hiếm, The Moshav Farm tự hào là doanh nghiệp đầu tiên sản xuất sản phẩm Tổ Yến Nhung Hươu tại thị trường Việt Nam.',
        },
    ];

    const feedbacks = [
        {
            avt: images.avt,
            name: 'Tâm Trần',
            rate: 4,
            cmt: 'Với vị đắng nhẹ và lạ miệng, Trà Thảo Mộc Linh Chi không chỉ giúp thải độc mà còn mang lại cảm giác sức sống mới cho cơ thể. Sau khi sử dụng đều đặn, tôi cảm thấy mệt mỏi và căng thẳng giảm đi rõ rệt.',
        },
        {
            avt: images.avt,
            name: 'Tâm Trần',
            rate: 4,
            cmt: 'Với vị đắng nhẹ và lạ miệng, Trà Thảo Mộc Linh Chi không chỉ giúp thải độc mà còn mang lại cảm giác sức sống mới cho cơ thể. Sau khi sử dụng đều đặn, tôi cảm thấy mệt mỏi và căng thẳng giảm đi rõ rệt.',
        },
        {
            avt: images.avt,
            name: 'Tâm Trần',
            rate: 5,
            cmt: 'Với vị đắng nhẹ và lạ miệng, Trà Thảo Mộc Linh Chi không chỉ giúp thải độc mà còn mang lại cảm giác sức sống mới cho cơ thể. Sau khi sử dụng đều đặn, tôi cảm thấy mệt mỏi và căng thẳng giảm đi rõ rệt.',
        },
        {
            avt: images.avt,
            name: 'Tâm Trần',
            rate: 4,
            cmt: 'Với vị đắng nhẹ và lạ miệng, Trà Thảo Mộc Linh Chi không chỉ giúp thải độc mà còn mang lại cảm giác sức sống mới cho cơ thể. Sau khi sử dụng đều đặn, tôi cảm thấy mệt mỏi và căng thẳng giảm đi rõ rệt.',
        },
    ];

    const news = [
        {
            imageURL: images.product1,
            name: 'MIÊN LÃO DƯỢC – CHO GIẤC NGỦ NGON HƠN',
            desc: 'Vừa qua, Moshav có cơ duyên được một dược sĩ Đông Y ở Phan Thiết chỉ cho cách làm một loại trà thảo dược cải thiện...',
        },
        {
            imageURL: images.product2,
            name: 'TRÀ DETOX BỤP GIẤM – THỨC UỐNG THANH NHIỆT GIẢI ĐỘC MÙA HÈ',
            desc: 'Bụp giấm, hay còn được gọi là atiso đỏ, là một dược liệu tự nhiên với nhiều công dụng tốt cho sức khỏe. Tận dụng hương...',
        },
        {
            imageURL: images.product3,
            name: 'MIÊN LÃO DƯỢC – CHO GIẤC NGỦ NGON HƠN',
            desc: 'Vừa qua, Moshav có cơ duyên được một dược sĩ Đông Y ở Phan Thiết chỉ cho cách làm một loại trà thảo dược cải thiện...',
        },
    ];
    return (
        <div>
            <Slider />
            <About />
            <Introduce />
            <section className="w-full md:max-w-[1170px] mx-auto flex flex-col items-center justify-center">
                <div className="max-w-[75%] px-[15px] pb-[30px] flex flex-col gap-2 items-center justify-center">
                    <p className="font-pacifico text-4xl md:text-5xl !leading-[77px] text-secondary text-center">
                        Chất lượng theo tiêu chuẩn Quốc tế
                    </p>
                    <p className="text-lg text-center mt-2">
                        The Moshav Farm chăn nuôi, trồng trọt, sản xuất, chế biến và bảo quản theo tiêu chuẩn xuất khẩu
                        quốc tế, mang giá trị cao nhất đến tay người tiêu dùng.
                    </p>
                </div>
                <div className="w-full flex flex-wrap justify-center items-start pb-[30px]">
                    {standards.map((standard) => (
                        <StandardBox
                            key={standard.heading}
                            iconURL={standard.iconURL}
                            heading={standard.heading}
                            desc={standard.desc}
                        />
                    ))}
                </div>
            </section>
            <section className="relative pb-[30px] mb-[30px] pt-[130px] overflow-hidden">
                <img src={images.ss5_bg} alt="ss5-bg" className="absolute top-0 left-0 w-full object-cover" />
                <div className="relative z-10 w-full flex flex-col items-center justify-center">
                    <div className="w-full md:max-w-[1170px] flex flex-col items-center justify-center">
                        <div className="max-w-[58.33333%] flex flex-col px-[15px] pb-[30px]">
                            <p className="font-pacifico text-4xl md:text-5xl !leading-[77px] text-secondary text-center">
                                Cảm nhận của khách hàng
                            </p>
                            <p className="text-lg text-center mt-2">
                                Với triết lý kinh doanh lấy khách hàng là trung tâm, chúng tôi đã nhận được các phản hồi
                                tích cực về sản phẩm
                            </p>
                        </div>
                        <div className="w-full flex flex-col md:flex-row px-[15px] pb-[30px]">
                            <div className="flex-1 flex justify-center">
                                <img src={images.product1} alt="product" className="w-full object-contain" />
                            </div>
                            <div className="flex-1 flex flex-col gap-2 px-5 py-4">
                                {feedbacks.map((user, index) => (
                                    <FeedbackUser
                                        key={index}
                                        avt={user.avt}
                                        name={user.name}
                                        rate={user.rate}
                                        cmt={user.cmt}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative pb-[30px]">
                <div className="w-full md:max-w-[1170px] mx-auto flex flex-col items-center justify-center pb-[30px]">
                    <p className="font-pacifico text-4xl md:text-5xl !leading-[77px] text-secondary text-center">
                        Tin tức từ farm
                    </p>
                    <div className="w-full flex items-center gap-4 mt-3 px-[15px] pb-[30px]">
                        {news.map((news, index) => (
                            <NewCard key={index} imageURL={news.imageURL} name={news.name} desc={news.desc} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
