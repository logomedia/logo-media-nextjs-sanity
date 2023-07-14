"use client"
import * as Yup from "yup"
import { useForm, Controller } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
// @mui
import { LoadingButton } from "@mui/lab"
import { Stack, Typography, ToggleButton, FormHelperText } from "@mui/material"
// utils
import { fCurrency } from "../../../utils/formatNumber"
// components
import FormProvider, { RHFTextField, RHFSlider } from "../../components/hook-form"
import emailjs from "@emailjs/browser"
import { usePathname } from "next/navigation"
import { useState } from "react"
// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

export default function ContactMarketingForm() {
	const url = usePathname()
	const SERVICES = ["Design", "Development", "Ecommerce"]
	const MarketingContactSchema = Yup.object().shape({
		services: Yup.array().required().min(1, "Services field must have at least 1 items"),
		email: Yup.string().required("Email is required").email("That is not an email"),
		company: Yup.string().required("Compnany is required"),
		website: Yup.string().required("Website is required"),
	})

	const defaultValues = {
		services: [],
		firstName: "",
		lastName: "",
		email: "",
		phoneNumber: "",
		company: "",
		website: "",
		budget: [10000, 50000],
		message: "",
	}

	const methods = useForm({
		resolver: yupResolver(MarketingContactSchema),
		defaultValues,
	})

	const {
		reset,
		control,
		handleSubmit,
		formState: { isSubmitting },
	} = methods
	const [success, setSuccess] = useState("")
	const onSubmit = async (data) => {
		try {
			window.dataLayer.push({
				event: "generate_lead",
				page: url,
			})

			await new Promise((resolve) => setTimeout(resolve, 500))
			reset()

			const serviceList = data.services.toString()
			const message = `Name:${data.firstName} ${data.lastName}
			 Company: ${data.company}
			 Email: ${data.email}
			 Phone: ${data.phoneNumber}
			 Website: ${data.website}
			 Budget: $${data.budget[0]}-$${data.budget[1]}
			 Services: ${serviceList}
			 Message:${data.message}`

			const toSend = {
				from_name: data.firstName + " " + data.lastName,
				to_name: "Logo Media",
				message: message,
				reply_to: data.email,
			}
			emailjs
				.send("service_1tbbiwc", "template_nta5lyb", toSend, "XtmHxL5zdet_8tKjY")
				.then((response) => {
					setSuccess("Your message has been sent succesfully")
				})
				.catch((err) => {
					setSuccess(err)
				})
		} catch (error) {
			console.error(error)
		}
	}

	const getSelected = (selectedItems, item) => (selectedItems.includes(item) ? selectedItems.filter((value) => value !== item) : [...selectedItems, item])

	return (
		<FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
			<Stack spacing={2.5} alignItems='flex-start'>
				<Controller
					name='services'
					control={control}
					render={({ field, fieldState: { error } }) => (
						<div>
							<Stack direction='row' flexWrap='wrap'>
								{SERVICES.map((service) => (
									<ToggleButton
										{...field}
										key={service}
										color='standard'
										selected={field.value.includes(service)}
										onChange={() => field.onChange(getSelected(field.value, service))}
										sx={{
											py: 0.5,
											px: 2,
											m: 0.5,
											typography: "body2",
											"&.Mui-selected": {
												bgcolor: "text.primary",
												borderColor: "transparent",
												color: (theme) => (theme.palette.mode === "light" ? "common.white" : "grey.800"),
												"&:hover": {
													bgcolor: "text.primary",
												},
											},
										}}
									>
										{service}
									</ToggleButton>
								))}
							</Stack>

							{!!error && (
								<FormHelperText error sx={{ px: 2 }}>
									{error?.message}
								</FormHelperText>
							)}
						</div>
					)}
				/>

				<Stack spacing={{ xs: 2.5, md: 2 }} direction={{ xs: "column", md: "row" }} sx={{ width: 1 }}>
					<RHFTextField name='firstName' label='First Name' />
					<RHFTextField name='lastName' label='Last Name' />
				</Stack>

				<RHFTextField name='email' label='Email' />
				<RHFTextField name='phoneNumber' label='Phone number' />

				<Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 2.5, md: 2 }} sx={{ width: 1 }}>
					<RHFTextField name='company' label='Company' />

					<RHFTextField name='website' label='Website' />
				</Stack>

				<Stack spacing={5} sx={{ py: 2, width: 1 }}>
					<Typography variant='overline' sx={{ color: "text.disabled" }}>
						Your Budget
					</Typography>

					<RHFSlider name='budget' valueLabelDisplay='on' max={100000} step={1000} valueLabelFormat={(value) => fCurrency(value)} />
				</Stack>

				<RHFTextField name='message' label='Message' multiline rows={4} />
			</Stack>
			<Stack>
				<Typography>{success}</Typography>
			</Stack>
			<LoadingButton fullWidth size='large' color='primary' type='submit' variant='contained' loading={isSubmitting} sx={{ mt: 3 }}>
				Send Request
			</LoadingButton>
		</FormProvider>
	)
}
