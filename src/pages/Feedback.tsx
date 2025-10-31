import React, { useState } from "react";

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "Student",
    category: "General",
    feedback: "",
    rating: 3,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Feedback:", formData);
    alert("Thank you for your feedback!");
    setFormData({
      name: "",
      email: "",
      role: "Student",
      category: "General",
      feedback: "",
      rating: 3,
    });
  };

  return (
    <div className="max-w-lg mx-auto mt-10 bg-gray-900 p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-semibold mb-4 text-white">Feedback Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-lg text-white bg-gray-800 border-gray-600 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full mt-1 p-2 border rounded-lg text-white bg-gray-800 border-gray-600 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg text-white bg-gray-800 border-gray-600"
          >
            <option>Student</option>
            <option>Teacher</option>
            <option>Parent</option>
          </select>
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Feedback Category
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded-lg text-white bg-gray-800 border-gray-600"
          >
            <option>General</option>
            <option>Teaching Quality</option>
            <option>Facilities</option>
            <option>Administration</option>
          </select>
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Rating: {formData.rating}/5
          </label>
          <input
            type="range"
            name="rating"
            min="1"
            max="5"
            value={formData.rating}
            onChange={handleChange}
            className="w-full accent-blue-500"
          />
        </div>

        {/* Feedback */}
        <div>
          <label className="block text-sm font-medium text-gray-300">
            Your Feedback
          </label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            required
            className="w-full mt-1 p-2 border rounded-lg text-white bg-gray-800 border-gray-600 focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-all"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
}
