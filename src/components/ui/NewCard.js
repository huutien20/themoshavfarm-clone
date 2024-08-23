import { ArrowRight } from 'lucide-react';
import Button from './Button';

function NewCard({ imageURL, name, desc }) {
    return (
        <div className="padding-common w-1/3 flex flex-col shadow hover:shadow-lg">
            <img src={imageURL} alt={name} className="w-full object-cover" />
            <a href="/" className="my-2 font-bold text-black line-clamp-2">
                {name}
            </a>
            <p className="line-clamp-2">{desc}</p>
            <Button variant="outline" className="rounded-full mt-4">
                Xem tất cả
                <ArrowRight size={18} />
            </Button>
        </div>
    );
}

export default NewCard;
