const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Define the cart item schema
const cartItemSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
    quantity: { type: Number, default: 1 },
    price: { type: Number, required: true },
    name: { type: String, required: true },
    image: { type: String }
});

// Define the user schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: [true, "Please enter your name!"] },
    email: { type: String, required: [true, "Please enter your email!"], unique: true },
    password: { type: String, required: [true, "Please enter your password"], minLength: 4, select: false },
    phoneNumber: { type: Number, required: false },
    cart: { type: [cartItemSchema], default: [] }, // ✅ Ensure cart is always an array
    avatar: { 
        public_id: { type: String, default: "" },  // ✅ Allow empty string instead of required
        url: { type: String, default: "" } // ✅ Allow empty string instead of required
    },
    createdAt: { type: Date, default: Date.now }
});

// Hash password before saving
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

// Method to get JWT token
userSchema.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_EXPIRES });
};

// Method to compare entered password with hashed password
userSchema.methods.comparePassword = async function (enteredPassword) {
    return bcrypt.compare(enteredPassword, this.password);
};

// Create the User model
const User = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = User;
