export const blurDataUrl = `data:image/svg+xml;base64,${btoa(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
		<rect width="100%" height="100%" fill="url(#gradient)" />
		<defs>
			<linearGradient id="gradient">
				<stop offset="0%" stop-color="#e0e0e0">
					<animate attributeName="stop-color" values="#e0e0e0;#f0f0f0;#e0e0e0" dur="1.5s" repeatCount="indefinite" />
				</stop>
				<stop offset="50%" stop-color="#f0f0f0">
					<animate attributeName="stop-color" values="#f0f0f0;#e0e0e0;#f0f0f0" dur="1.5s" repeatCount="indefinite" />
				</stop>
				<stop offset="100%" stop-color="#e0e0e0">
					<animate attributeName="stop-color" values="#e0e0e0;#f0f0f0;#e0e0e0" dur="1.5s" repeatCount="indefinite" />
				</stop>
			</linearGradient>
		</defs>
	</svg>`
)}`
