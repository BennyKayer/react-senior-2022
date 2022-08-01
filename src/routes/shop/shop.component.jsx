import { useContext } from "react";
import { ProductContext } from "../../contexts/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shot.styles.scss";

const Shop = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className={"products-container"}>
            {products.map((product) => {
                const { id } = product;
                return <ProductCard key={id} product={product} />;
            })}
        </div>
    );
};

export default Shop;
