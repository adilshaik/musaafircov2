interface ContactFormData {
  name: string
  email: string
  phone?: string
  message: string
  destination?: string
  groupSize?: string | number
  budget?: string
}

export async function submitContactForm(data: ContactFormData): Promise<void> {
  // TODO: replace with real API call / server action
  console.log('Form submission:', data)
  await new Promise((resolve) => setTimeout(resolve, 600))
}
