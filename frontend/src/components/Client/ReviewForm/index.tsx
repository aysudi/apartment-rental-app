import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import reviewsController from "@/services/api/reviews/reviewsApi";
import { toast } from "sonner";
import type { Review as ReviewType, User } from "@/types/type";
import Review from "@/classes/Review";

interface ReviewFormProps {
  apartmentId: string;
  user: User;
  onSubmitSuccess?: (newReview: ReviewType) => void;
}

const ReviewForm: React.FC<ReviewFormProps> = ({
  apartmentId,
  user,
  onSubmitSuccess,
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!rating || !comment.trim()) {
      toast.error("Please provide a rating and comment.");
      return;
    }

    try {
      setSubmitting(true);

      const newReview = new Review(user.id, apartmentId, rating, comment);
      const posted = await reviewsController.postReview(newReview);

      const enrichedReview: ReviewType = {
        ...posted,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          profileImage: user.profileImage,
          createdAt: new Date().toISOString(),
        },
      };

      toast.success("Review submitted!");
      setRating(0);
      setComment("");
      onSubmitSuccess?.(enrichedReview);
    } catch {
      toast.error("Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold text-gray-800">Leave a Review</h4>

      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => {
          const starValue = index + 1;
          return (
            <button
              type="button"
              key={index}
              onClick={() => setRating(starValue)}
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(0)}
              className="focus:outline-none cursor-pointer"
            >
              <FaStar
                size={22}
                className={
                  starValue <= (hover || rating)
                    ? "text-yellow-400"
                    : "text-gray-300"
                }
              />
            </button>
          );
        })}
      </div>

      <textarea
        className="w-full p-3 border border-gray-300 text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 bg-white"
        rows={4}
        placeholder="Write your experience..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <div>
        <button
          type="submit"
          disabled={submitting}
          className={`px-5 py-2 text-sm rounded-md font-medium text-white cursor-pointer ${
            submitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#FF9A1E] hover:bg-[#e88810] transition"
          }`}
        >
          {submitting ? "Submitting..." : "Submit Review"}
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
