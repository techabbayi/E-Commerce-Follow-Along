const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

// Import the User model
const User = require("../model/user");

router.post("/add-cart", async (req, res) => {
  const { userId, productId, quantity, price, name, image } = req.body;

  // Ensure all necessary fields are provided
  if (!userId || !productId || !quantity || !price || !name) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // Check if the userId is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(userId)) {
    return res.status(400).json({ message: "Invalid userId format" });
  }

  // Check if the productId is a valid MongoDB ObjectId
  if (!mongoose.Types.ObjectId.isValid(productId)) {
    return res.status(400).json({ message: "Invalid productId format" });
  }

  try {
    // Find the user using a valid ObjectId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the product already exists in the cart
    const existingProductIndex = user.cart.findIndex(
      (item) => item.productId.toString() === productId.toString()
    );

    if (existingProductIndex !== -1) {
      // If the product already exists, increase the quantity
      user.cart[existingProductIndex].quantity += quantity;
    } else {
      // If the product doesn't exist, add a new product to the cart
      user.cart.push({
        productId: mongoose.Types.ObjectId(productId),
        quantity,
        price,
        name,
        image, // Optional field
      });
    }

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: "Item added to cart" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
