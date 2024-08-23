import images from '~/assets/images';
import { ArrowRight } from 'lucide-react';
import { Button, ProductCard } from '../ui';

function Introduce() {
    const products = [
        {
            imgURL: images.product1,
            name: 'Tổ Yến Nhung Hươu Chưng Sẵn Anbinest Gold (Lốc 6 Hũ)',
            to: '/',
        },
        {
            imgURL: images.product2,
            name: 'Tổ Yến Nhung Hươu Anbinest King hương quế (Thùng 72 Hũ)',
            to: '/',
        },
        {
            imgURL: images.product3,
            name: 'Tổ Yến Nhung Hươu Anbinest Queen hương quế (Thùng 72 Hũ)',
            to: '/',
        },
        {
            imgURL: images.product4,
            name: 'Tổ Yến Nhung Hươu Anbinest Queen hương quế (Lốc 6 Hũ)',
            to: '/',
        },
    ];
    return (
        <section className="py-[30px]">
            <div className="h-full w-full pb-14">
                <img className="h-full w-full object-cover" src={images.introduce} alt="introduce" />
            </div>
            <div className="container flex flex-col items-center">
                <div className="max-w-[66.66667%] padding-common flex flex-col items-center">
                    <p className="text-heading">Thương hiệu từ nông dân Việt: Ăn “thượng hạng”, Chi “bình dân”</p>
                    <p className="text-center text-lg mt-3">
                        Sử dụng sản phẩm từ The Moshav Farm không đơn giản chỉ là thưởng thức được những món “thượng
                        hạng”, mà còn là việc được sử dụng những thành quả trên vùng đất thân quen, ủng hộ cộng đồng
                        nông dân địa phương và nông nghiệp bền vững.
                    </p>
                    <Button className="mt-3 md:mt-5 w-full md:w-1/3 border-2 uppercase font-bold">
                        Tất cả sản phẩm
                        <ArrowRight className="mt-1" size={20} />
                    </Button>
                </div>
                <div className="w-full py-[30px] mobile-col px-[15px] items-center gap-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.imgURL}
                            imgURL={product.imgURL}
                            productName={product.name}
                            to={product.to}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Introduce;
