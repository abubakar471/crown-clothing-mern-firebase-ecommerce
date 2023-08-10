import './category.styles.scss'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component';
import { useEffect, useState, Fragment } from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesIsLoading, selectCategoriesMap } from '../../store/categories/category.selector';
import Spinner from '../../components/spinner/spinner.component';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
    const [products, setProducts] = useState(categoriesMap[category]);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap]);


    return (
        <Fragment>
            <h1 className='category-title'>{category}</h1>
            {
                isLoading ? <Spinner /> : <div className='category-container'>
                    {products &&
                        products.map(product => <ProductCard key={product.id} product={product} />)
                    }
                </div>
            }
        </Fragment>
    )
}

export default Category