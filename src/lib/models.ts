import { Social } from "@/types";
import mongoose from "mongoose";

export interface Labels extends mongoose.Document {
  description: string;
}

export interface Configs extends mongoose.Document {
  resumeLink: string;
  socials: Social[];
}

const configSchema = new mongoose.Schema<Configs>({
  resumeLink: {
    type: String,
  },
  socials: [
    {
      name: {
        type: String,
        required: true,
      },
      link: {
        type: String,
        required: true,
      },
    },
  ],
});

const labelSchema = new mongoose.Schema<Labels>({
  description: {
    type: String,
  },
});

const ConfigModel =
  mongoose.models.config || mongoose.model<Configs>("config", configSchema);
const LabelModel =
  mongoose.models.label || mongoose.model<Labels>("label", labelSchema);

export { ConfigModel, LabelModel };
