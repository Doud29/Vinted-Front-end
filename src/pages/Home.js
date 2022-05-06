import React from "react";
import Header from "../Composent/Header";
// on navigue de page en pages grace à des liens, pour cela il faut importer Link de react-router. Cela nous permettra de créer nos liens
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import mainphoto from "../img/mainphoto.jpg";

const Home = () => {
  /* ----------------------------------------------------------------------------- */
  /*-----------------------------------// States //--------------------------------*/
  /* ---------------------------------------------------------------------------- */
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  /* ---------------------------------------------------------------------------- */
  /* ----------------------------------/ USe effect  /--------------------------- */
  /* ---------------------------------------------------------------------------- */

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return isLoading ? (
    <h1>En cours de chargement...</h1>
  ) : (
    <div>
      <Header />

      <div className="photo-presentation">
        <img src={mainphoto} alt="" />
        <div className="tri"></div>
      </div>

      <div className="description-offers">
        {data.offers.map((item, index) => {
          // console.log(item.owner.account.avatar.secure_url);

          return (
            <Link
              style={{ textDecoration: "none", color: "grey" }}
              to={`/product/${item._id}`}
            >
              <div key={index} className="products">
                <div className="avatar">
                  <div className="photoprofile">
                    {" "}
                    {/* <img
                      src={item.owner.account.avatar.secure_url}
                      alt="avatar"
                    /> */}
                  </div>
                  <div className="name">{item.owner.account.username}</div>
                </div>

                <div className="photo">
                  <img
                    className="photo-produit"
                    src={item.product_image.secure_url}
                    alt="description"
                  />
                </div>
                <div className="produitachat">
                  <p style={{ color: "black", fontSize: 16, marginTop: 3 }}>
                    {" "}
                    <strong>{item.product_price}</strong> €
                  </p>
                  <p style={{ fontSize: 12, marginTop: 3 }}>
                    {item.product_details[1].TAILLE}
                  </p>
                  <p style={{ marginTop: 3 }}>
                    {item.product_details[0].MARQUE.toLowerCase()}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* <Footer /> */}

      {/* la balise Link va nous permettre de naviguer  */}
      {/* on utilise la balise Link car plus rapide que d'utiliser une balise a, c'est l'effet REACT */}
      {/* on utilise la balise a pour rediriger vers un autre site internet */}
    </div>
  );
};

export default Home;

// <div className="products">
//   {item.product_name.map((name, index) => {
//     return (
//       <div key={index} className="details-products">
//         <div>{name.MARQUE}</div>
//         <div>{details.TAILLE}</div>
//         <div>{details.COULEUR}</div>
//       </div>
//     );
//   })}
// </div>
