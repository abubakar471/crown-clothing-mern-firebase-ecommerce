import { Fragment, useContext } from 'react'
import { CategoriesContext } from '../../components/contexts/categories.context'
import CategoryPreview from '../../components/category-preview/category-preview.component';

const CategoriesPreview = () => {
    const { categoriesMap } = useContext(CategoriesContext);

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