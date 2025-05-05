import React from "react";
import GroceryEntrance2 from "../assets/grocery-entrance-2.jpg";
import "../styles/ItemDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/features/cartSlice";

const ItemDetailsInfo = ({ setIsFading }) => {
  const { id, section } = useParams();
  const navigate = useNavigate();

  const newItems = useSelector((state) => state.new.items);
  const popularItems = useSelector((state) => state.popular.items);
  const saleItems = useSelector((state) => state.sale.items);
  const dispatch = useDispatch();

  let item;
  switch (section) {
    case "new":
      item = newItems.find((item) => item.id === Number(id));
      break;
    case "popular":
      item = popularItems.find((item) => item.id === Number(id));
      break;
    case "sale":
      item = saleItems.find((item) => item.id === Number(id));
      break;
    default:
      item = [...newItems, ...popularItems, ...saleItems].find(
        (item) => item.id === Number(id)
      );
  }

  const handleNavigation = (destination) => {
    setIsFading(true);
    setTimeout(() => {
      navigate(destination);
    }, 1000);
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  if (!item) {
    return (
      <div className="item__details--container">
        <h1>Item not found</h1>
        <button
          className="item__button back"
          onClick={() => handleNavigation("/shopping")}
        >
          Back to Shopping
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="background__images">
        <img
          src={GroceryEntrance2}
          alt="white brick wallpaper"
          className="light-mode__img--shopping"
        />
        <img
          src={GroceryEntrance2}
          alt="red brick wallpaper"
          className="dark-mode__img--shopping"
        />
      </div>
      <section id="item__details--section">
        <div className="container">
          <div className="row">
            <h1 className="item__details--title">Item Details</h1>
            <div className="item__details--container">
              <div className="item__image--wrapper">
                <img
                  src={require(`../assets/${item.image}`)}
                  alt={item.name}
                  className="item__image"
                />
              </div>
              <div className="item__details--content">
                <h1 className="item__name">{item.name}</h1>
                <p className="item__price">
                  ${item.price}/{item.unit}
                </p>
                <p className="item__description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Itaque soluta veniam aspernatur impedit, quae delectus dolorum
                  minima voluptatem, molestiae, consectetur ratione dolorem
                  aliquid error saepe blanditiis natus adipisci laudantium atque
                  ex vel eligendi tenetur inventore fugit! Dolorem asperiores
                  minus quibusdam, consectetur, suscipit optio aut culpa numquam
                  neque possimus velit quis.
                </p>
                <div className="item__buttons">
                  <button
                    className="item__button add-to-cart"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                  <button
                    className="item__button back"
                    onClick={() => handleNavigation("/shopping")}
                  >
                    Back to Shopping
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemDetailsInfo;
