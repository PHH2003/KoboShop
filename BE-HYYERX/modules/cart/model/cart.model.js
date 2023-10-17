import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: 'Auth',
    },
    carts: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: 'Product',
        },
        quantity: Number,    
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cart", cartSchema);
