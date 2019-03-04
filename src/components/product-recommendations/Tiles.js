import React from "react";
import { WidgetContext } from "./WidgetContext";
import { Tile } from "./Tile";

const renderTiles = (tiles, selectedTiles, onClick) => {
  if (tiles.length) {
    return tiles.map(tile => (
      <Tile
        key={`tile-${tile.id}`}
        id={tile.id}
        label={tile.label}
        active={selectedTiles.map(current => current.id).indexOf(tile.id) >= 0}
        onClick={() => {
          onClick(tile);
        }}
      />
    ));
  }
};

export const Tiles = () => (
  <WidgetContext.Consumer>
    {({
      props: { tiles, selectedTiles },
      methods: { handleTileSelection }
    }) => (
      <div className="tiles__container">
        <div className="tiles">
          {renderTiles(tiles, selectedTiles, handleTileSelection)}
        </div>
      </div>
    )}
  </WidgetContext.Consumer>
);
