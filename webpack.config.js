const path = require("path");

module.exports = {
  // ... other webpack configuration options

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, "src"), // Update the path to match your source directory
      },
    ],
  },
};
