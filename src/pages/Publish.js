// import de nos packages//

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Publish = ({ token }) => {
  // créatoin de nos states
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("combinaison de surf");
  const [description, setDescription] = useState("Neuf, jamais Porté");
  const [brand, setBrand] = useState("Quicksilver");
  const [size, setSize] = useState("M");
  const [color, setColor] = useState("Bleu");
  const [etat, setEtat] = useState("Neuf");
  const [place, setPlace] = useState("Brest");
  const [price, setPrice] = useState("125");

  const createOffer = async (event) => {
    try {
      event.preventDefault();

      const formData = new FormData();
      formData.append("files", file);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("etat", etat);
      formData.append("place", place);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: "Bearer" + token,
            "Content-Type": "multipart/form-data",
          },
        }

        // {
        //   title,
        //   description,
        //   price,
        //   etat,
        //   place,
        //   brand,
        //   size,
        //   color,
        // }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="formulaire">
      <form onSubmit={createOffer}>
        <div className="bloc-offre">
          <input
            type="file"
            onChange={(event) => setFile(event.target.files[0])}
          />
          <br />
        </div>
        <div className="bloc-offre">
          <div>
            <span>Titre</span>
            <input
              type="text"
              placeholder="ex: Chemise Levis verte"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>
          <div>
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
          <span>Marque</span>
          <input
            type="text"
            placeholder="ex: Levis"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          />
          <br />
          <span>Taille</span>
          <input
            type="text"
            placeholder="ex: L/M/S "
            value={size}
            onChange={(event) => setSize(event.target.value)}
          />
          <br />
          <span>Couleur</span>
          <input
            type="text"
            placeholder="ex:Fushia "
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
          <br />
          <span>Etat</span>
          <input
            type="text"
            placeholder="ex: Neuf avec etiquette"
            value={etat}
            onChange={(event) => setEtat(event.target.value)}
          />
          <br />
          <span>Lieu</span>
          <input
            type="text"
            placeholder="ex: Paris"
            value={place}
            onChange={(event) => setPlace(event.target.value)}
          />
        </div>
        <div className="bloc-offre">
          <span>Prix</span>
          <input
            type="text"
            placeholder="ex: Prix"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </div>
        <div className="bloc-paiement">
          <input type="submit" value="Valider" />
        </div>
      </form>
    </div>
  );
};

export default Publish;
