import React from "react";
import { WidgetContext } from "./WidgetContext";
import { Tile } from "./Tile";

export const Tiles = () => (
  <WidgetContext.Consumer>
    {({ props: { tiles } }) => (
      <div className="tiles__container">
        <div className="tiles">
          {tiles.map(tile => (
              <Tile
                  key={`tile-${tile.id}`}
                  id={tile.id}
                  label={tile.label}
                  active={false}
                  onClick={() => {}}
              />
          ))}
        </div>
      </div>
    )}
  </WidgetContext.Consumer>
);
