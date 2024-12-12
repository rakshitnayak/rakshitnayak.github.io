import mongoose from "mongoose";

export interface configs extends mongoose.Document {
  resumeLink: string;
}

const configsSchema = new mongoose.Schema<configs>({
  resumeLink: {
    type: String,
  },
});

export default mongoose.models.configs ||
  mongoose.model<configs>("config", configsSchema);
