import React from "react";
import { WidgetContext } from "./WidgetContext";
import { ResourceList } from "@shopify/polaris";

export const TilesList = () => (
  <WidgetContext.Consumer>
    {({
      props: { tiles },
      methods: { handleLoadTile, handleMoveTile, handleRemoveTile }
    }) => (
      <ResourceList
        title="Tiles"
        items={tiles}
        renderItem={tile => {
          const {
            id,
            label,
            recommendation: { name }
          } = tile;
          return (
            <ResourceList.Item
              url={"#"}
              id={id}
              shortcutActions={[
                { content: "Edit", onAction: () => handleLoadTile(tile) },
                { content: "Move up", onAction: () => handleMoveTile(tile) },
                { content: "Remove", onAction: () => handleRemoveTile(tile) }
              ]}
              persistActions
            >
              <h3>{`Tile label: ${label}`}</h3>
              <div>{`Recommends: ${name}`}</div>
            </ResourceList.Item>
          );
        }}
      />
    )}
  </WidgetContext.Consumer>
);
