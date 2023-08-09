import './category.styles.scss'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/product-card/product-card.component';
import { useEffect, useState , Fragment} from 'react';
import { useSelector } from 'react-redux';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const Category = () => {
    const { category } = useParams();
    const categoriesMap = useSelector(selectCategoriesMap);
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