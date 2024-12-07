import mongoose from "mongoose";

export interface labels extends mongoose.Document {
  description: string;
}

const labelschema = new mongoose.Schema<labels>({
  description: {
    type: String,
  },
});

export default mongoose.models.label ||
  mongoose.model<labels>("label", labelschema);
