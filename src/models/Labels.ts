import mongoose from "mongoose";

export interface Labels extends mongoose.Document {
  description: string;
}

const LabelSchema = new mongoose.Schema<Labels>({
  description: {
    type: String,
  },
});

export default mongoose.models.Label ||
  mongoose.model<Labels>("Label", LabelSchema);
