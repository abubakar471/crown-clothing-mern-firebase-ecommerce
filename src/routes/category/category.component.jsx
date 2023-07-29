import './category.styles.scss'
import { useParams } from 'react-router-dom'
import { useContext } from 'react';
import { CategoriesContext } from '../../components/contexts/categories.context';
import { useState } from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { useEffect } from 'react';
import { Fragment } from 'react';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);
    return (
        <Fragment>
            <h1 className='category-title'>{category}</h1>
            <div className='category-container'>

                {products &&
                    products.map(product => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </Fragment>
    )
}

export default Category