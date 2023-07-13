"use client"
import Script from "next/script"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function GTM() {
	const url = usePathname()
	useEffect(() => {
		console.log("data push")
		window.dataLayer.push({
			event: "pageview",
			page: url,
		})
	}, [url])
	return (
		<>
			<noscript>
				<iframe src={`https://www.googletagmanager.com/ns.html?id=GTM-W4KVTWQ`} height='0' width='0' style={{ display: "none", visibility: "hidden" }} />
			</noscript>
			<Script id='gtm-script' strategy='afterInteractive'>
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W4KVTWQ');console.log("loaded gtm")`}
			</Script>
		</>
	)
}
