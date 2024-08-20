import { Star } from 'lucide-react';

function FeedbackUser({ avt, name, cmt, rate }) {
    return (
        <div className="flex gap-5">
            <img src={avt} alt="avt" className="w-12 h-12 rounded-full object-cover" />
            <div className="flex flex-col pt-4 gap-3">
                <p className="text-base font-bold">{name}</p>
                <div className="flex items-center gap-1">
                    {Array(rate)
                        .fill(0)
                        .map((_, index) => (
                            <Star key={index} size={20} />
                        ))}
                </div>
                <p className="text-sm italic line-clamp-3">{cmt}</p>
            </div>
        </div>
    );
}

export default FeedbackUser;
