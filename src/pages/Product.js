import React from "react";

// Use params permet de recuperer l'id de Home
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  /* ----------------------------------------------------------------------------- */
  /*-----------------------------------// States //--------------------------------*/
  /* ---------------------------------------------------------------------------- */
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  /* ---------------------------------------------------------------------------- */
  /* ----------------------------------/ USe effect  /--------------------------- */
  /* ---------------------------------------------------------------------------- */

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
      console.log(response.data);
    };
    fetchData();
  }, []);

  //   toto sera un objet qui contiendra une clé id
  return isLoading ? (
    <h1>En cours de chargement...</h1>
  ) : (
    <div>
      <div className="description-offre">
        <div className="photoproduit">
          <img src={data.product_image.secure_url} alt="" />
        </div>
        <div className="descriptionoffre">
          <div className="prix">{data.product_price}€</div>
          <div className="produitsdetails">
            <div> MARQUE : {data.product_details[0].MARQUE}</div>
            <div> TAILLE :{data.product_details[1].TAILLE}</div>
            <div> ETAT : {data.product_details[2].ÉTAT}</div>
            <div>COULER : {data.product_details[3].COULEUR}</div>
            <div> EMPLACEMENT : {data.product_details[4].EMPLACEMENT}</div>
            <div>
              {" "}
              {/* MODE DE PAIMENT : {data.product_details[5].MODEDEPAIMENT} */}
            </div>
          </div>

          <div className="productname">{data.product_name}</div>

          <div className="productdescription">{data.product_description}</div>
          <div className="profile">
            <div className="photoprofile">
              <img src={data.owner.account.avatar.secure_url} alt="avatar" />
            </div>
            <p>{data.owner.account.username}</p>
          </div>
          <div className="acheter">
            <span>Acheter</span>
          </div>
        </div>
      </div>

      <div className="offer-footer"></div>
    </div>
  );
};

export default Product;
