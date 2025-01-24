

const TitleCard = ({ item }) => {
    return (
        <div className="rounded-2xl shadow-md shadow-orange-300 px-4 py-4 bg-orange-50">
            <h2 className="text-center">{item.title}</h2>
        </div>
    );
};

export default TitleCard;