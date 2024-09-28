import React, { useState, useEffect } from "react";

const Card = ({ name, email, body }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [bodye, setBodye] = useState(body);

  const handleEdit = (e) => {
    setBodye(e.target.value);
  };
  const handelSave = () => {
    setIsEditing(false);
  };
  const change = () => {
    setIsEditing(true);
  };

  return (
    <div className="wrapper">
      <div className="card">
        <div className="bio">
          <img
            src="https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611731.jpg?t=st=1726578125~exp=1726581725~hmac=93aa3d5a7932a1ced1a865efcd3555fe6118717de289c11d285446148665127d&w=826"
            alt="avatar"
          />
          <div className="details">
            <h1>{name}</h1>
            <h2>{email}</h2>
          </div>
        </div>
        <div className="box">
          <form>
            {isEditing ? (
              <textarea value={bodye} onChange={handleEdit} />
            ) : (
              <textarea style={{ overflow: "hidden" }} value={bodye} />
            )}
          </form>
          <div className="nav">
            <button className="btn-cta" onClick={handelSave}>
              Save
            </button>
            <button onClick={change} className="btn-cta">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
