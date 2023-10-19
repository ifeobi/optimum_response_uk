module.exports = {
  siteUrl: "https://optimumresponse.vercel.app/",
  generateRobotsTxt: true,
  outDir: "./public",
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
