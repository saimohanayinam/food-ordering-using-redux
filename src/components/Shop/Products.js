import ProductItem from './ProductItem';
import classes from './Products.module.css';


const dummyIteams =[
  {
    id: 1,
    price: 10,
    title: 'book',
    description: 'This is a first product - amazing!'
  },
  {
    id: 2,
    price: 20,
    title: '2book',
    description: '2This is a first product - amazing!'
  }
]

const Products = (props) => {
  return (
    <section className={classes.products}>
          <h2>Buy your favorite products</h2>
          <ul>


    {dummyIteams.map((product) =>{return<ProductItem
    key={product.id}
    id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />}

    )}

      </ul>
    </section>
  );
};

export default Products;
