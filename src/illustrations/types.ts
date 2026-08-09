import type { ComponentType } from "react";

export type IllustrationComponent = ComponentType<{ accentColor: string }>;

export type IllustrationVariant = "ground" | "medallion";

export type IllustrationDefinition = {
  component: IllustrationComponent;
  variant?: IllustrationVariant;
};
