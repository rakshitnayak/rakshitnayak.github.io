import { About, Social } from "@/types";
import mongoose, { Schema, Document } from "mongoose";

export interface Labels extends Document {
  description: string;
}

export interface Configs extends Document {
  resumeLink: string;
  socials: Social[];
  about: About[];
}

const configSchema = new Schema<Configs>({
  resumeLink: { type: String, required: true },
  socials: [
    {
      name: { type: String, required: true },
      link: { type: String, required: true },
    },
  ],
  about: [
    {
      list: { type: String, required: true },
      linkWord: { type: String },
      link: { type: String },
    },
  ],
});

const labelSchema = new Schema<Labels>({
  description: {
    type: String,
    required: true,
  },
});

const ConfigModel =
  mongoose.models.config || mongoose.model<Configs>("config", configSchema);
const LabelModel =
  mongoose.models.label || mongoose.model<Labels>("label", labelSchema);

export { ConfigModel, LabelModel };
