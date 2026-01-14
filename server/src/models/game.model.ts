import mongoose, { Schema, Document } from 'mongoose';


interface IRequirement {
  os: string;
  cpu: string;
  ram: string;
  gpu: string;
  storage: string;
}
export interface IGame extends Document {
  slug: string;
  title: string;
  price: number;
  originalPrice?: number;
  coverImage?: string;  
  squareImage?: string;
  bannerImage?: string;
  gallery: string[];
  description: string;
  developer: string;
  releaseDate: string;
  tags?: string[];

  requirements?: {
    minimum: IRequirement;
    recommended: IRequirement;
  };
}



const GameSchema: Schema = new Schema({
  slug: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  price: { type: Number, required: true },
  originalPrice: { type: Number },
  coverImage: { type: String },
  squareImage: { type: String }, 
  bannerImage: { type: String },
  gallery: [{ type: String }],
  description: { type: String, required: true },
  developer: { type: String, required: true },
  releaseDate: { type: String, required: true },
  tags: [{ type: String }], 

  requirements: {
    minimum: {
      os: { type: String },
      cpu: { type: String },
      ram: { type: String },
      gpu: { type: String },
      storage: { type: String },
    },
    recommended: {
      os: { type: String },
      cpu: { type: String },
      ram: { type: String },
      gpu: { type: String },
      storage: { type: String },
    }
  }
},


{
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: function (doc, ret: any) {
      ret.id = ret._id;
      delete ret._id;
      delete ret.__v;
    }
  }
});

export default mongoose.model<IGame>('Game', GameSchema);