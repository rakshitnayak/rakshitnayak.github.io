import mongoose from "mongoose";

export interface Labels extends mongoose.Document {
  description: string;
}
export interface Configs extends mongoose.Document {
  resumeLink: string;
}

const configSchema = new mongoose.Schema<Configs>({
  resumeLink: {
    type: String,
  },
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
