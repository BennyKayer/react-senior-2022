import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";

const categories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    },
    {
        id: 5,
        title: "mens",
        imageUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    },
];

const Directory = () => {
    return (
        <div className={"directory-container"}>
            {categories.map(({ title, id, imageUrl }) => {
                return (
                    <DirectoryItem key={id} category={{ title, imageUrl }} />
                );
            })}
        </div>
    );
};

export default Directory;
