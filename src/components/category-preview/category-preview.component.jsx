import ProductCard from '../product-card/product-card.component'
import './category-preview.styles.scss'
import {Link } from 'react-router-dom'

const CategoryPreview = ({ title, products }) => {
    return (
        <div className='category-preview-container'>
            <h2>
                <Link to={title} className='category-title'>{title.toUpperCase()}</Link>
            </h2>

            <div className='preview'>
                {
                    // filter and return products those index are less than 4, and _ means we are just ignoring
                    // the product as we will not do anything with this.  
                    products
                        .filter((_, idx) => idx < 4)
                        .map((product) => <ProductCard key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default CategoryPreview