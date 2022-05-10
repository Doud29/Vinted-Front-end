// import de nos packages//

import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Publish = ({ token }) => {
  // créatoin de nos states

  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("combinaison de surf");
  const [description, setDescription] = useState("Neuf, jamais Porté");
  const [brand, setBrand] = useState("Quicksilver");
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Bleu");
  const [condition, setCondition] = useState("Neuf");
  const [city, setCity] = useState("Brest");
  const [price, setPrice] = useState("125");

  const createOffer = async (event) => {
    try {
      event.preventDefault();
      const formData = new FormData();

      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("etat", condition);
      formData.append("city", city);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="formulaire">
      <form onSubmit={createOffer}>
        <div className="bloc-photo">
          <input
            type="file"
            onChange={(event) => setPicture(event.target.files[0])}
          />
        </div>
        <div className="bloc-offre">
          <div className="bloc-description">
            <span>Titre</span>

            <input
              type="text"
              placeholder="ex: Chemise Levis verte"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div className="bloc-description">
            <span>Décris ton article </span>
            <input
              type="text"
              placeholder="ex: portée quelques fois"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
        </div>

        <div className="bloc-offre">
          <div className="bloc-description">
            <span>Marque</span>
            <input
              type="text"
              placeholder="ex: Levis"
              value={brand}
              onChange={(event) => setBrand(event.target.value)}
            />
          </div>
          <div className="bloc-description">
            <span>Taille</span>
            <input
              type="text"
              placeholder="ex: L/M/S "
              value={size}
              onChange={(event) => setSize(event.target.value)}
            />
          </div>

          <div className="bloc-description">
            <span>Etat</span>
            <input
              type="text"
              placeholder="ex: Neuf avec etiquette"
              value={condition}
              onChange={(event) => setCondition(event.target.value)}
            />
          </div>
          <div className="bloc-description">
            <span>Couleur</span>
            <input
              type="text"
              placeholder="ex:Fushia "
              value={color}
              onChange={(event) => setColor(event.target.value)}
            />
          </div>
          <div className="bloc-description">
            <span>Lieu</span>
            <input
              type="text"
              placeholder="ex: Paris"
              value={city}
              onChange={(event) => setCity(event.target.value)}
            />
          </div>
        </div>

        <div className="bloc-offre">
          <div className="bloc-description">
            <span>Prix</span>
            <input
              type="text"
              placeholder="ex: Prix"
              value={price}
              onChange={(event) => setPrice(event.target.value)}
            />
          </div>
        </div>
        <div className="bloc-submit">
          <Link style={{ textDecoration: "none" }} to="/">
            <input type="submit" value="Valider" />
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Publish;
