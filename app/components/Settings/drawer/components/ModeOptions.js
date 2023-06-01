// @mui
import { ToggleButton } from "@mui/material"
//
import Iconify from "../../../iconify"
import { useSettingsContext } from "../../SettingsContext"

// ----------------------------------------------------------------------

export default function ModeOptions() {
	const { themeMode, onToggleMode } = useSettingsContext()

	const isLight = themeMode === "light"

	return (
		<ToggleButton
			color={isLight ? "standard" : "primary"}
			value={themeMode}
			selected={!isLight}
			onChange={onToggleMode}
			sx={{
				p: 1,
				border: 0,
				borderRadius: 0,
				justifyContent: "space-between",
				"&.Mui-selected": {
					boxShadow: "none",
					bgcolor: "transparent",
					...(!isLight && {
						"&:hover": {
							bgcolor: "action.hover",
						},
					}),
				},
			}}
		>
			<Iconify width={24} icon={isLight ? "carbon:asleep" : "carbon:asleep-filled"} />
		</ToggleButton>
	)
}
