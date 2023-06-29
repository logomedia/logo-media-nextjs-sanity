"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"

export default function Analytics() {
	const url = usePathname()
	const searchParams = useSearchParams()
	console.log(searchParams)
	return (
		<>
			<Script id='gtm-script' strategy='afterInteractive'>
				{`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-W4KVTWQ');window.dataLayer.push({
                    event: 'pageview',
                    page: ${url},
                  })`}
			</Script>
		</>
	)
}
