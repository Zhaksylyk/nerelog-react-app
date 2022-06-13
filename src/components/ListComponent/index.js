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
                        <GiCardPickup color="green" size={30} />
                      ) : (
                        <GrDeliver color="red" size={30} />
                      )}
                    </i>
                    <h6 className="title bold">
                      Название клиента : {order.name}
                    </h6>
                    <p>
                      Тип заявки:
                      {order.type === "pickup" ? " Забор" : " Доставка"}
                    </p>
                    <p>Цена заявки: {moneyFormat(order.price)} тг.</p>
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
