/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [{ protocol: "https", hostname: "cdn.sanity.io" }, { hostname: "source.unsplash.com" }],
		domains: ["cdn.sanity.io"],
	},

	reactStrictMode: false,
	async redirects() {
		return [
			{
				source: "/capabilities",
				destination: "/services", // Matched parameters can be used in the destination
				permanent: true,
			},
			{
				source: "/skills",
				destination: "/services", // Matched parameters can be used in the destination
				permanent: true,
			},
		]
	},
}

module.exports = nextConfig
