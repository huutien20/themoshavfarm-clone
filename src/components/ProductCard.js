import { Link } from 'react-router-dom';
import Button from './Button';

function ProductCard({ imgURL, productName, to }) {
    return (
        <div className="flex-1 flex flex-col justify-center bg-white rounded-md shadow cursor-pointer hover:shadow-lg">
            <img src={imgURL} alt={productName} className="w-full object-cover" />
            <div className="p-3 pb-4 flex flex-col justify-center items-center">
                <Link
                    to={to}
                    className="px-3 text-[20px] leading-[26px] font-bold text-center line-clamp-2 text-ellipsis text-primary"
                >
                    {productName}
                </Link>
                <Button variant="outline" className="rounded-full mt-4">
                    Mua ngay
                </Button>
            </div>
        </div>
    );
}

export default ProductCard;
