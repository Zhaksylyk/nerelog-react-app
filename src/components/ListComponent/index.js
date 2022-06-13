import React, { useRef } from "react";
import {
  List,
  AutoSizer,
  CellMeasurer,
  CellMeasurerCache,
} from "react-virtualized";
import { GiCardPickup } from "@react-icons/all-files/gi/GiCardPickup";
import { GrDeliver } from "@react-icons/all-files/gr/GrDeliver";
import { moneyFormat } from "../../utils/helpers";
import "./style.css";

const ListComponent = ({ data = [] }) => {
  const cache = React.useRef(
    new CellMeasurerCache({
      fixedWidth: true,
      defaultHeight: 100,
    })
  );

  return (
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
                    <i className="material-icons circle">
                      {order.type === "pickup" ? (
                        <GiCardPickup
                          className="iconColumn"
                          color="green"
                          size={30}
                        />
                      ) : (
                        <GrDeliver color="red" size={30} />
                      )}
                    </i>
                    <div className="spaceBeetween">
                      <h5 className="title bold clientColumn">
                        Название клиента : <br />
                        {order.name}
                      </h5>
                      <h5 className="bold" style={{ width: "30%" }}>
                        Тип заявки: <br />
                        {order.type === "pickup" ? " Забор" : " Доставка"}
                      </h5>
                      <h5 className="title bold" style={{ width: "30%" }}>
                        Цена заявки: <br />
                        {moneyFormat(order.price)} тг.
                      </h5>
                    </div>
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
