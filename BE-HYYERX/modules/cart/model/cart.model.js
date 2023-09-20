import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      refs: "Auth",
    },
    carts: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          refs: "Product",
        },
        quantityOrder: {
          nameColor: String,
          nameSize: String,
          quantity: Number,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Cart", cartSchema);
