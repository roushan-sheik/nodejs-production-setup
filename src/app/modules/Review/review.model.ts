import { model, Schema } from "mongoose";
import { IReview } from "./review.interface";

const reviewSchema = new Schema<IReview>({
  movie: {
    type: Schema.Types.ObjectId,
    ref: "Movie",
    required: true,
  },
  comment: {
    type: String,
    required: true,
    minlength: [8, "Min length should be 6 characters."],
  },
  email: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

const Review = model<IReview>("Review", reviewSchema);

export default Review;
