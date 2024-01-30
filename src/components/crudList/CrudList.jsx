import React, { useEffect } from "react";

import css from "./CrudList.module.css";

const CrudList = ({ fetchData, deleteItem, putRequest }) => {
  useEffect(() => {}, [fetchData]);

  return (
    <div className={css.items}>
      {fetchData?.map((el) => (
        <div className={css.header} key={el.id}>
          <h3>Вопросы: {el.text}</h3>
          <h4>тема: {el.title}</h4>
          <button className={css.button}
            onClick={() => {
              deleteItem(el._id);
            }}
          >
            delete
          </button>
          <button className={css.button}
            onClick={() => {
              putRequest(el._id);
            }}
          >
            update
          </button>
        </div>
      ))}
    </div>
  );
};

export default CrudList;
