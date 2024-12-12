import mongoose from "mongoose";

export interface configs extends mongoose.Document {
  resumeLink: string;
}

const configschema = new mongoose.Schema<configs>({
  resumeLink: {
    type: String,
  },
});

export default mongoose.models.config ||
  mongoose.model<configs>("config", configschema);
