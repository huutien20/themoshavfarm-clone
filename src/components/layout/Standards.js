import images from '~/assets/images';
import { StandardBox } from '../ui';

function Standards() {
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
    return (
        <section className="container flex flex-col items-center justify-center">
            <div className="max-w-[75%] padding-common flex flex-col gap-2 items-center justify-center">
                <p className="text-heading">Chất lượng theo tiêu chuẩn Quốc tế</p>
                <p className="text-lg text-center mt-2">
                    The Moshav Farm chăn nuôi, trồng trọt, sản xuất, chế biến và bảo quản theo tiêu chuẩn xuất khẩu quốc
                    tế, mang giá trị cao nhất đến tay người tiêu dùng.
                </p>
            </div>
            <div className="w-full mobile-col flex-wrap justify-center items-start pb-[30px]">
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
    );
}

export default Standards;
