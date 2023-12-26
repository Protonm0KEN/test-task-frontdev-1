import axios from "axios";
import React, { useEffect, useState } from "react";
import "./styles/App/App.css";
import Modal from "./components/Modal/Modal";
const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [currentProduct, setCurrentProduct] = useState()
  const [isModalActive, setIsModalActive] = useState(false)
  const [ArrayOfTitles, setArrayOfTitles] = useState([]);
  const [arr, setArr] = useState();
  const [isLoaderStateActive, setIsLoaderStateActive] = useState(false);
  const ProductsLink = "https://dummyjson.com/products";
  const LoaderState = async () => {
    setTimeout(() => {
      setIsLoaderStateActive(!isLoaderStateActive);
      fetchProductsDataFromQuery(ProductsLink);
    }, 4000);
  };
  const fetchProductsDataFromQuery = async (link) => {
    const data = await axios.get(link);
    setArr(data.data.products);
  };
  useEffect(() => {
    const inputElement = document.getElementsByClassName("input");
    console.log(inputElement);
    LoaderState();
  }, []);
  const openModalFunction = (product) => {
    setIsModalActive(!isModalActive)
    setCurrentProduct(product)
  }
  console.log(ArrayOfTitles);
  return (
    <div className="layout">
      <div className="ProductCards">
        {arr ? (
          arr.map((product) => {
            return (
              <>
                <div key={product.id} className="ProductCard">
                  <h1 className="Title">{product.title}</h1>
                  <p className="Description">{product.description}</p>
                  <span className="Price">${product.price}</span>
                  <img
                    className="Image"
                    src={product.thumbnail}
                    alt="product-img"
                  />
                  <button
                    onClick={() => openModalFunction(product) }
                    className="Button"
                  >
                    Add
                  </button>
                </div>
              </>
            );
          })
        ) : (
          <div>Загрузка...</div>
        )}
      </div>
      <input
        className="input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <div className="Cart">
        Корзина:
        {ArrayOfTitles.map((prodAdded) => {
          return <p>{prodAdded}</p>;
        })}
      </div>
      <Modal product={currentProduct} arr = {ArrayOfTitles} modalFunc = {setArrayOfTitles} state = {isModalActive} setState = {setIsModalActive} />
    </div>
  );
};

export default App;
