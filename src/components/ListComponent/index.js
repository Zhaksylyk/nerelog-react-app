import React, { useRef } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";

const ListComponent = ({ data = [] }) => {
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );
  const rowRenderer = ({
    key, // Unique key within array of rows
    index, // Index of row within collection
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    style, // Style object to be applied to row (to position it)
  }) => {
    console.log("index", index);
    console.log("KEY", key);
    return (
      <ul key={data[index].id} style={{ height: 100 }} className="collection">
        <li className="collection-item avatar">
          <i className="material-icons circle">Logo</i>
          <span className="title">{`Название: ${data[index].name} `}</span>
          <p>{`ID: ${data[index].id} `}</p>
          <p>Тип: {data[index].type === "pickup" ? "Забор" : "Доставка"}</p>
          <p>{`Цена: ${data[index].price} тг.`}</p>
        </li>
      </ul>
    );
  };
  return (
    // <AutoSizer>
    //   {({ width, height }) => {
    //     console.log("width", width);
    //     console.log("height", height);
    //     return (
    //       <List
    //         autoHeight={true}
    //         width={width}
    //         height={height}
    //         rowCount={data.length}
    //         overscanRowCount={10}
    //         rowHeight={100}
    //         rowRenderer={rowRenderer}
    //       />
    //     );
    //   }}
    // </AutoSizer>
    <AutoSizer>
      {({ width, height }) => (
        <List
          width={width}
          height={height}
          rowHeight={cache.current.rowHeight}
          deferredMeasurementCache={cache.current}
          rowCount={data.length}
          rowRenderer={({ key, index, style, parent }) => {
            const order = data[index];

            return (
              <CellMeasurer
                key={key}
                cache={cache.current}
                parent={parent}
                columnIndex={0}
                rowIndex={index}
              >
                <ul key={data[index].id} style={style} className="collection">
                  <li className="collection-item avatar">
                    <i className="material-icons circle">Logo</i>
                    <span className="title">Название: {order.name}</span>
                    <p>ID: {order.id}</p>
                    <p>Заказ: {order.type}</p>
                    <p>Цена: {order.price}</p>
                  </li>
                </ul>
              </CellMeasurer>
            );
          }}
        />
      )}
    </AutoSizer>
  );
};

export default ListComponent;
