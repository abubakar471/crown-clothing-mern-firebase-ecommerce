import { Fragment, useContext } from 'react'
import { useSelector } from 'react-redux';
import CategoryPreview from '../../components/category-preview/category-preview.component';
import { selectCategoriesMap } from '../../store/categories/category.selector';

const CategoriesPreview = () => {
    const categoriesMap = useSelector(selectCategoriesMap);
    
    return (
        <Fragment>
            {
                // object.keys creates an array with keys in categoriesMap object 
                Object.keys(categoriesMap).map((title) => {
                    const products = categoriesMap[title];

                    return <CategoryPreview key={title} title={title} products={products} />
                })
            }
        </Fragment>
    )
}

export default CategoriesPreview