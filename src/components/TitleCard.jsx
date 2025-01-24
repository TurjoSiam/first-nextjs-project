import Link from "next/link";


const TitleCard = ({ item }) => {
    return (
        <Link href={`/blog/${item.id}`} className="rounded-2xl shadow-md shadow-orange-300 px-4 py-4 bg-orange-50">
            <h2 className="text-center">{item.title}</h2>
        </Link>
    );
};

export default TitleCard;