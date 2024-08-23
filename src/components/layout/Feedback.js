import images from '~/assets/images';
import { FeedbackUser } from '../ui';

function Feedback() {
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
    return (
        <section className="relative pb-[30px] mb-[30px] pt-[130px] overflow-hidden">
            <img src={images.ss5_bg} alt="ss5-bg" className="absolute top-0 left-0 w-full object-cover" />
            <div className="relative z-10 w-full">
                <div className="container flex-col flex-center">
                    <div className="max-w-[58.33333%] flex flex-col padding-common">
                        <p className="text-heading">Cảm nhận của khách hàng</p>
                        <p className="text-lg text-center mt-2">
                            Với triết lý kinh doanh lấy khách hàng là trung tâm, chúng tôi đã nhận được các phản hồi
                            tích cực về sản phẩm
                        </p>
                    </div>
                    <div className="w-full mobile-col padding-common">
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
    );
}

export default Feedback;
