import "./directory.styles.scss";
import DirectoryItem from "../directory-item/directory-item.component";
import { useNavigate } from "react-router-dom";

const categories = [
    {
        id: 1,
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        route: "shop/hats",
    },
    {
        id: 2,
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        route: "shop/jackets",
    },
    {
        id: 3,
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        route: "shop/sneakers",
    },
    {
        id: 4,
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        route: "shop/womens",
    },
    {
        id: 5,
        title: "mens",
        imageUrl:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        route: "shop/mens",
    },
];

const Directory = () => {
    const navigate = useNavigate();

    const onNavigateHandler = (route) => navigate(route);

    return (
        <div className={"directory-container"}>
            {categories.map(({ title, id, imageUrl, route }) => {
                return (
                    <DirectoryItem
                        key={id}
                        category={{ title, imageUrl }}
                        onClick={() => onNavigateHandler(route)}
                    />
                );
            })}
        </div>
    );
};

export default Directory;
