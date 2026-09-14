import { About, Blog, Social } from "@/types";
import type { CareerData } from "./career";
import mongoose, { Schema, Document } from "mongoose";

export interface Labels extends Document {
  description: string;
}

export interface Configs extends Document {
  resumeLink: string;
  socials: Social[];
  about: About[];
  blogs: Blog[];
  career?: CareerData;
}

const careerRoleSchema = new Schema({
  id: { type: String, required: true },
  company: { type: String, required: true },
  title: { type: String, required: true },
  period: { type: String, required: true },
  location: { type: String, required: true },
  summary: { type: String, required: true },
  impact: { type: String, required: true },
  highlights: [{ type: String, required: true }],
  technologies: [{ type: String, required: true }],
  accent: { type: String, required: true, match: /^#[0-9a-fA-F]{6}$/ },
}, { _id: false });

const careerSchema = new Schema({
  source: { type: String, required: true },
  roles: {
    type: [careerRoleSchema],
    required: true,
    validate: {
      validator: (roles: { id: string }[]) => roles.length > 0 && new Set(roles.map((role) => role.id)).size === roles.length,
      message: "Career must contain at least one role with unique IDs",
    },
  },
}, { _id: false });

const configSchema = new Schema<Configs>({
  career: { type: careerSchema, required: false },
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
  blogs: [
    {
      title: { type: String, required: true },
      link: { type: String, required: true },
      publishedAt: { type: String, required: true },
      tags: [{ type: String }],
      readTime: { type: Number },
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
