import images from '~/assets/images';
import { NewCard } from '../ui';

function News() {
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
        <section className="relative pb-[30px]">
            <div className="container flex-col flex-center pb-[30px]">
                <p className="text-heading">Tin tức từ farm</p>
                <div className="w-full flex items-center gap-4 mt-3 padding-common">
                    {news.map((news, index) => (
                        <NewCard key={index} imageURL={news.imageURL} name={news.name} desc={news.desc} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default News;
