export function slugParamToPath(slugParam) {
	// Possible slug value types:
	const slug = Array.isArray(slugParam)
		? // - ["multiple", "paths"]
		  slugParam.join("/")
		: // - "single-path"
		  slugParam ||
		  // - undefined -> default to "/"
		  "/"
	return slug
}
