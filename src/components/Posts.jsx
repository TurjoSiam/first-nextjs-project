"use client"

import TitleCard from "./TitleCard";

const Posts = ({ posts }) => {


    return (
        <div className="mt-5">
            <div className="grid grid-cols-4 gap-5">
                {
                    posts.map(item => <TitleCard key={item.id} item={item}></TitleCard>)
                }
            </div>
        </div>
    );
};

export default Posts;