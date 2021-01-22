import React from "react";
import PropTypes from "prop-types";

const charInfo = [
  {
    id: 1,
    name: "Suyeon",
    image: "https://t1.daumcdn.net/cfile/tistory/217AB7395538EF7B1C",
  },

  {
    id: 2,
    name: "Hyunjip",
    image:
      "https://lh3.googleusercontent.com/proxy/m6GI6Lnfqtczl-EoIOojaCHKmSgE2r3OdJ216hUWDBxDtYqvPOmqzBj1iqiyUUDf2tiPJtebTPwzYxGNEXtFln0cRQvWRB_6JpSMdLOZKzUpN-tAAAk-KJwy2suJewqXwOGr4tx3XFi4T69G5Q582iINnoUgIqCdStZHUsGSuVIvlvnOIPFTG_myrS5fv2_sPlB_uAL8Ss2OQFSYJpG5kmsJtq_wt0xhWpqm76-fNvPZ4d-VL9iSeQxbzsvLNWbri3iuE0JsFkE2wRvsmKPCTXGrNbUInnlBaZvUqPKH4zgIxWg",
  },
];

function Welcome({ name, picture }) {
  return (
    <div>
      <h2>Welcome {name}</h2>
      <img src={picture} alt={name} />;
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string.isRequired,
};

function App() {
  return (
    <div>
      <h1>Zivi World!!!</h1>
      {charInfo.map((char) => (
        <Welcome key={char.id} name={char.name} picture={char.image} />
      ))}
    </div>
  );
}

export default App;
